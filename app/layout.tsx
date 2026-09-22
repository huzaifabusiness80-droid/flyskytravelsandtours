import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fly Sky Travel & Tourism | Licensed Agency (LIC # LHR 10981)",
  description: "Official website of Fly Sky Travel & Tourism. Expert visa consultancy, worldwide flight ticketing, Umrah packages, and tour destinations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col bg-slate-100`}>{children}</body>
    </html>
  );
}
