"use client";

import React, { useEffect, useState } from "react";
import { User, Bell, CheckCircle2, RefreshCw } from "lucide-react";

export default function AdminHeader({ title }: { title: string }) {
  const [adminEmail, setAdminEmail] = useState<string>("Admin");
  const [inquiryCount, setInquiryCount] = useState<number>(0);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.user) {
          setAdminEmail(data.user.email);
        }
      })
      .catch(() => {});

    fetch("/api/inquiries?status=NEW")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setInquiryCount(data.data.length);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div>
        <h2 className="text-lg font-black uppercase tracking-wider text-[#0b3663]">
          {title}
        </h2>
      </div>

      <div className="flex items-center space-x-4">
        {inquiryCount > 0 && (
          <a
            href="/admin/inquiries"
            className="flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-300 px-2.5 py-1 text-xs font-semibold hover:bg-amber-100 transition-colors"
          >
            <Bell className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
            <span>{inquiryCount} New Inquiries</span>
          </a>
        )}

        <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
          <div className="w-8 h-8 bg-slate-100 border border-slate-300 flex items-center justify-center text-[#0b3663]">
            <User className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold text-slate-800">{adminEmail}</p>
            <span className="text-[10px] text-emerald-600 font-mono flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block mr-1"></span>
              Admin Session Active
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
