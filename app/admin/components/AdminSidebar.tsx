"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Layers,
  Plane,
  FileCheck2,
  MapPin,
  MessageSquare,
  LogOut,
  Globe,
  PlusCircle,
  ShieldAlert,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (e) {
      console.error("Logout failed", e);
    }
  };

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      title: "Inquiries & Leads",
      href: "/admin/inquiries",
      icon: MessageSquare,
      badge: "Live",
    },
    {
      title: "Tour Packages",
      href: "/admin/packages",
      icon: Plane,
    },
    {
      title: "Visas & Sub-Services",
      href: "/admin/sub-services",
      icon: FileCheck2,
    },
    {
      title: "Destinations",
      href: "/admin/destinations",
      icon: MapPin,
    },
    {
      title: "Main Services",
      href: "/admin/services",
      icon: Layers,
    },
  ];

  return (
    <aside className="w-64 bg-[#0b3663] text-white flex flex-col min-h-screen border-r border-[#0b3663]/40 flex-shrink-0">
      {/* Brand Header */}
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <Link href="/admin" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#00a8e8] flex items-center justify-center font-black text-white text-base tracking-wider">
            FS
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-wider text-white">
              Fly Sky Admin
            </h1>
            <p className="text-[10px] text-[#00a8e8] font-mono uppercase tracking-widest">
              Control Portal
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
        <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Management
        </p>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                isActive
                  ? "bg-[#00a8e8] text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <Icon className="w-4 h-4" />
                <span>{item.title}</span>
              </div>
              {item.badge && (
                <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 font-black uppercase tracking-wider animate-pulse">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="pt-4">
          <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Quick Actions
          </p>
          <Link
            href="/admin/packages?action=new"
            className="flex items-center space-x-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#00a8e8]" />
            <span>Add Tour Package</span>
          </Link>
          <Link
            href="/admin/sub-services?action=new"
            className="flex items-center space-x-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#00a8e8]" />
            <span>Add Visa / Country</span>
          </Link>
        </div>
      </nav>

      {/* Footer / Links */}
      <div className="p-3 border-t border-white/10 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center space-x-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Globe className="w-4 h-4 text-[#00a8e8]" />
          <span>View Live Website</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-red-300 hover:bg-red-600 hover:text-white transition-colors text-left"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
