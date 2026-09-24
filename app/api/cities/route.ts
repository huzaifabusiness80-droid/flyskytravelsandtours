import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") || "Pakistan";

  try {
    // Call live public external API for real world cities of any country
    const res = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country }),
      next: { revalidate: 86400 }, // Cache 24 hours
    });

    if (!res.ok) {
      throw new Error(`CountriesNow API responded with status ${res.status}`);
    }

    const data = await res.json();

    if (data.error || !data.data) {
      return NextResponse.json({ success: true, country, cities: [] });
    }

    return NextResponse.json({
      success: true,
      country,
      total: data.data.length,
      cities: data.data,
    });
  } catch (error: any) {
    console.error("Cities API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch cities from live API" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { country } = await req.json();

    const res = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country: country || "Pakistan" }),
      next: { revalidate: 86400 },
    });

    const data = await res.json();

    return NextResponse.json({
      success: true,
      country,
      cities: data.data || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
