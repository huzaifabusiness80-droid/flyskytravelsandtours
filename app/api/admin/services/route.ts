import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: "asc" },
    });
    // Map fields for admin frontend compatibility
    const mapped = services.map((s) => ({
      ...s,
      name: s.title,
      description: s.shortDesc,
      image: s.heroImage,
      tagline: s.tagline,
    }));
    return NextResponse.json({ success: true, data: mapped });
  } catch (error) {
    console.error("GET Services Error:", error);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();
    const title = data.title || data.name;
    const shortDesc = data.shortDesc || data.description || "";
    const heroImage = data.heroImage || data.image || "";

    if (!title || !shortDesc || !heroImage) {
      return NextResponse.json({ error: "Required fields missing (name, description, image)" }, { status: 400 });
    }

    const slug = data.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

    const newService = await prisma.service.create({
      data: {
        slug,
        title,
        shortDesc,
        heroImage,
        tagline: data.tagline || title,
        overview: data.overview || shortDesc,
        benefits: Array.isArray(data.benefits) ? data.benefits : [],
        order: Number(data.order) || 0,
      },
    });

    return NextResponse.json({ success: true, data: newService });
  } catch (error) {
    console.error("POST Service Error:", error);
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();
    if (!data.id) return NextResponse.json({ error: "Service ID required" }, { status: 400 });

    const updated = await prisma.service.update({
      where: { id: data.id },
      data: {
        title: data.title || data.name,
        shortDesc: data.shortDesc || data.description,
        heroImage: data.heroImage || data.image,
        tagline: data.tagline,
        overview: data.overview,
        benefits: Array.isArray(data.benefits) ? data.benefits : [],
        order: Number(data.order) || 0,
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("PUT Service Error:", error);
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Service ID required" }, { status: 400 });

    await prisma.service.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    console.error("DELETE Service Error:", error);
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
  }
}
