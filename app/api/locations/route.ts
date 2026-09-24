import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

let cachedLocations: Array<{
  label: string;
  city: string;
  country: string;
  code: string;
}> | null = null;

let lastFetch = 0;

async function getLocations() {
  const now = Date.now();
  if (cachedLocations && now - lastFetch < 3600000) {
    return cachedLocations;
  }

  try {
    // 100% Live External API that provides all countries and all real cities
    const res = await fetch("https://countriesnow.space/api/v0.1/countries", {
      headers: { Accept: "application/json" },
      next: { revalidate: 86400 },
    });

    const json = await res.json();

    if (!json || !Array.isArray(json.data)) {
      throw new Error("Invalid API format");
    }

    const list: Array<{
      label: string;
      city: string;
      country: string;
      code: string;
    }> = [];

    for (const item of json.data) {
      const country = item.country || "";
      const code = item.iso2 || "";
      if (Array.isArray(item.cities)) {
        for (const city of item.cities) {
          if (city && typeof city === "string") {
            list.push({
              label: `${city}, ${country}`,
              city,
              country,
              code,
            });
          }
        }
      }
    }

    cachedLocations = list;
    lastFetch = now;
    return list;
  } catch (err) {
    console.error("CountriesNow API error:", err);
    // Fallback if network issue
    return [];
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  const all = await getLocations();

  if (!q) {
    // Return top popular hubs
    const priority = ["Lahore", "Karachi", "Islamabad", "Dubai", "Jeddah", "Riyadh", "Sharjah", "Doha", "London", "Istanbul", "Baku", "Muscat"];
    const top = all.filter((l) => priority.includes(l.city));
    return NextResponse.json({
      success: true,
      locations: top.slice(0, 15),
    });
  }

  // Live filter on all real cities of the world from the API
  const filtered = all.filter(
    (l) =>
      l.city.toLowerCase().includes(q) ||
      l.country.toLowerCase().includes(q) ||
      l.label.toLowerCase().includes(q)
  );

  return NextResponse.json({
    success: true,
    total: filtered.length,
    locations: filtered.slice(0, 20),
  });
}
