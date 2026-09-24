import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 100% Live External REST API Call
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd,flag", {
      headers: { Accept: "application/json" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error(`RestCountries API failed with status ${res.status}`);
    }

    const data = await res.json();

    const formatted = data
      .map((c: any) => {
        const root = c.idd?.root || "";
        const suffix = (c.idd?.suffixes && c.idd?.suffixes.length === 1) ? c.idd.suffixes[0] : "";
        const dialCode = root ? `${root}${suffix}` : "";

        return {
          name: c.name?.common || "",
          code: c.cca2 || "",
          dialCode: dialCode,
          flag: c.flag || "🌐",
        };
      })
      .filter((c: any) => c.name && c.code)
      .sort((a: any, b: any) => a.name.localeCompare(b.name));

    return NextResponse.json({
      success: true,
      total: formatted.length,
      countries: formatted,
    });
  } catch (error: any) {
    console.error("RestCountries Live API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
