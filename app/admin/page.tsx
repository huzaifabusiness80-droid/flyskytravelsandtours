"use client";

import React, { useEffect, useState } from "react";
import AdminShell from "./components/AdminShell";
import Link from "next/link";
import {
  Package,
  FileCheck2,
  MapPin,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  ExternalLink,
  PlusCircle,
  PhoneCall,
  Loader2,
} from "lucide-react";

interface Stats {
  totalPackages: number;
  totalSubServices: number;
  totalDestinations: number;
  totalInquiries: number;
  pendingInquiries: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalPackages: 0,
    totalSubServices: 0,
    totalDestinations: 0,
    totalInquiries: 0,
    pendingInquiries: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [pkgRes, subRes, destRes, inqRes] = await Promise.all([
          fetch("/api/admin/packages"),
          fetch("/api/admin/sub-services"),
          fetch("/api/admin/destinations"),
          fetch("/api/inquiries"),
        ]);

        const pkgs = await pkgRes.json();
        const subs = await subRes.json();
        const dests = await destRes.json();
        const inqs = await inqRes.json();

        const inquiriesList = inqs.success && Array.isArray(inqs.data) ? inqs.data : [];
        const pendingCount = inquiriesList.filter((i: any) => i.status === "NEW").length;

        setStats({
          totalPackages: pkgs.success && Array.isArray(pkgs.data) ? pkgs.data.length : 0,
          totalSubServices: subs.success && Array.isArray(subs.data) ? subs.data.length : 0,
          totalDestinations: dests.success && Array.isArray(dests.data) ? dests.data.length : 0,
          totalInquiries: inquiriesList.length,
          pendingInquiries: pendingCount,
        });

        setRecentInquiries(inquiriesList.slice(0, 8));
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const statCards = [
    {
      title: "Active Leads / Inquiries",
      value: stats.totalInquiries,
      subtext: `${stats.pendingInquiries} new pending response`,
      icon: MessageSquare,
      color: "bg-[#0b3663]",
      href: "/admin/inquiries",
      badge: stats.pendingInquiries > 0 ? `${stats.pendingInquiries} New` : undefined,
    },
    {
      title: "Tour Packages",
      value: stats.totalPackages,
      subtext: "Domestic & International",
      icon: Package,
      color: "bg-[#00a8e8]",
      href: "/admin/packages",
    },
    {
      title: "Visas & Sub-Services",
      value: stats.totalSubServices,
      subtext: "Visas, Flights, Umrah, Tours",
      icon: FileCheck2,
      color: "bg-emerald-600",
      href: "/admin/sub-services",
    },
    {
      title: "Destinations",
      value: stats.totalDestinations,
      subtext: "Featured on Homepage",
      icon: MapPin,
      color: "bg-amber-600",
      href: "/admin/destinations",
    },
  ];

  return (
    <AdminShell title="System Overview">
      <div className="space-y-6">
        {/* Top Banner */}
        <div className="bg-[#0b3663] text-white p-6 border-l-4 border-[#00a8e8] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-black uppercase tracking-wider">
              Fly Sky Travel & Tours Management Portal
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Manage all services, visa countries, tour packages, homepage destinations, and real-time customer inquiries connected directly to Neon PostgreSQL & Cloudinary CDN.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/packages?action=new"
              className="bg-[#00a8e8] hover:bg-white hover:text-[#0b3663] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 transition-colors flex items-center space-x-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>New Package</span>
            </Link>
            <Link
              href="/admin/sub-services?action=new"
              className="bg-white/10 hover:bg-white hover:text-[#0b3663] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 transition-colors flex items-center space-x-1.5 border border-white/20"
            >
              <PlusCircle className="w-4 h-4" />
              <span>New Visa / Service</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Link
                key={idx}
                href={stat.href}
                className="bg-white border border-slate-200 p-5 hover:border-[#00a8e8] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-black text-slate-900 mt-1">
                      {loading ? "..." : stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-10 h-10 ${stat.color} text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{stat.subtext}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00a8e8] transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Recent Inquiries & Quick Table */}
        <div className="bg-white border border-slate-200">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Recent Customer Inquiries & Leads
              </h4>
              <p className="text-[11px] text-slate-500">
                Form submissions from website header, hero carousel, contact page and package modals
              </p>
            </div>
            <Link
              href="/admin/inquiries"
              className="text-xs font-bold uppercase tracking-wider text-[#00a8e8] hover:underline flex items-center space-x-1"
            >
              <span>View All Leads</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-[#00a8e8]" />
              <p className="text-xs font-semibold">Loading inquiries...</p>
            </div>
          ) : recentInquiries.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-xs font-semibold">No inquiries submitted yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Customer Name</th>
                    <th className="py-3 px-4">Service / Subject</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Quick Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentInquiries.map((inq: any) => {
                    const phoneClean = inq.phone ? inq.phone.replace(/[^0-9]/g, "") : "";
                    const whatsappUrl = phoneClean
                      ? `https://wa.me/${phoneClean.startsWith("0") ? "92" + phoneClean.slice(1) : phoneClean}?text=${encodeURIComponent(
                          `Hello ${inq.name}, thank you for contacting Fly Sky Travel & Tours regarding ${inq.service || inq.subject || "your inquiry"}.`
                        )}`
                      : null;

                    return (
                      <tr key={inq.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-mono text-slate-500 text-[11px]">
                          {new Date(inq.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900">
                          {inq.name}
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          <span className="font-semibold text-[#0b3663]">
                            {inq.service || inq.subject || "General Inquiry"}
                          </span>
                          {inq.destination && (
                            <span className="text-[10px] text-slate-500 block">
                              Dest: {inq.destination}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          <div>{inq.phone}</div>
                          {inq.email && (
                            <div className="text-[10px] text-slate-400">{inq.email}</div>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              inq.status === "NEW"
                                ? "bg-red-50 text-red-700 border border-red-200"
                                : inq.status === "CONTACTED"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {inq.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {whatsappUrl ? (
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 px-2.5 py-1 bg-emerald-600 text-white hover:bg-emerald-700 font-bold uppercase text-[10px] transition-colors"
                            >
                              <PhoneCall className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
