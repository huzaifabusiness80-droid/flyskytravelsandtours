import React from "react";

export const metadata = {
  title: "Admin Portal | Fly Sky Travel & Tourism",
  description: "Fly Sky Management & Control Portal",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans antialiased">
      {children}
    </div>
  );
}
