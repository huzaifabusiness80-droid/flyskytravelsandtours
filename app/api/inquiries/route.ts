import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

// Public: Submit a new inquiry
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.fullName || !data.phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required" },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
        serviceType: data.serviceType || "General Inquiry",
        destination: data.destination || null,
        message: data.message || "",
        status: "NEW",
      },
    });

    return NextResponse.json({ success: true, data: inquiry });
  } catch (error) {
    console.error("Inquiry Submission Error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry to database" },
      { status: 500 }
    );
  }
}

// Admin: Get all inquiries
export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Map field names for admin frontend compatibility
    const mapped = inquiries.map((inq) => ({
      ...inq,
      name: inq.fullName,
      service: inq.serviceType,
    }));

    return NextResponse.json({ success: true, data: mapped });
  } catch (error) {
    console.error("Fetch Inquiries Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

// Admin: Update inquiry status
export async function PATCH(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: "ID and Status required" }, { status: 400 });
    }

    const updated = await prisma.inquiry.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Update Inquiry Status Error:", error);
    return NextResponse.json(
      { error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}

// PUT alias for PATCH — admin frontend uses PUT for status updates
export async function PUT(req: Request) {
  return PATCH(req);
}

export async function DELETE(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    await prisma.inquiry.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Inquiry deleted" });
  } catch (error) {
    console.error("Delete Inquiry Error:", error);
    return NextResponse.json(
      { error: "Failed to delete inquiry" },
      { status: 500 }
    );
  }
}
