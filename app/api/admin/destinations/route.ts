import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { order: "asc" },
    });
    // Format for both Admin frontend and public consumer
    const mapped = destinations.map((d) => ({
      ...d,
      image: d.imageSrc,
      description: d.highlight,
      packagesCount: 4,
      featured: true,
    }));
    return NextResponse.json({ success: true, data: mapped });
  } catch (error) {
    console.error("GET Destinations Error:", error);
    return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();
    const name = data.name;
    const country = data.country;
    const imageSrc = data.imageSrc || data.image || "/destinations/dubai.jpg";
    const visaType = data.visaType || "Tourist & Visit Visa";
    const highlight = data.highlight || data.description || `${name} travel destination`;

    if (!name || !country) {
      return NextResponse.json({ error: "Name and Country are required" }, { status: 400 });
    }

    const newDest = await prisma.destination.create({
      data: {
        name,
        country,
        imageSrc,
        visaType,
        processingTime: data.processingTime || "Fast Processing",
        highlight,
        link: data.link || "/services/visa-processing",
        category: data.category || "all",
        order: Number(data.order) || 0,
      },
    });

    return NextResponse.json({ success: true, data: newDest });
  } catch (error) {
    console.error("POST Destination Error:", error);
    return NextResponse.json({ error: "Failed to create destination" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();
    if (!data.id) return NextResponse.json({ error: "Destination ID required" }, { status: 400 });

    const updateData: any = {};
    if (data.name) updateData.name = data.name;
    if (data.country) updateData.country = data.country;
    if (data.imageSrc || data.image) updateData.imageSrc = data.imageSrc || data.image;
    if (data.visaType) updateData.visaType = data.visaType;
    if (data.processingTime) updateData.processingTime = data.processingTime;
    if (data.highlight || data.description) updateData.highlight = data.highlight || data.description;
    if (data.link) updateData.link = data.link;
    if (data.category) updateData.category = data.category;
    if (data.order !== undefined) updateData.order = Number(data.order);

    const updated = await prisma.destination.update({
      where: { id: data.id },
      data: updateData,
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("PUT Destination Error:", error);
    return NextResponse.json({ error: "Failed to update destination" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Destination ID required" }, { status: 400 });

    await prisma.destination.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "Destination deleted" });
  } catch (error) {
    console.error("DELETE Destination Error:", error);
    return NextResponse.json({ error: "Failed to delete destination" }, { status: 500 });
  }
}
