import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { getAdminSession } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string) || "flyskytravel";

    if (!file) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 1. Try Cloudinary first
    try {
      const result = await uploadToCloudinary(buffer, folder);
      if (result && result.secure_url) {
        return NextResponse.json({
          success: true,
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    } catch (cloudErr: any) {
      console.warn("Cloudinary upload failed or unauthorized, using local static storage fallback:", cloudErr?.message || cloudErr);
    }

    // 2. Fallback to local storage (public/uploads/)
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const ext = path.extname(file.name) || ".jpg";
    const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "");
    const fileName = `${Date.now()}-${baseName || "image"}${ext}`;
    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, buffer);

    const localUrl = `/uploads/${fileName}`;

    return NextResponse.json({
      success: true,
      url: localUrl,
      publicId: fileName,
    });
  } catch (error: any) {
    console.error("Upload API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process image upload" },
      { status: 500 }
    );
  }
}
