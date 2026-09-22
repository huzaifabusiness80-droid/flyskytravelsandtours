"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Lock, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@flyskytravel.com");
  const [password, setPassword] = useState("Admin@FlySky2026!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Invalid credentials");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b3663] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00a8e8_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00a8e8]/20 blur-3xl rounded-none pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#00a8e8] text-white text-2xl font-black mb-4">
            FS
          </div>
          <h2 className="text-2xl font-black uppercase tracking-wider text-white">
            Fly Sky Portal Login
          </h2>
          <p className="mt-1 text-xs uppercase tracking-widest text-[#00a8e8] font-mono">
            Authorized Personnel Only
          </p>
        </div>

        <div className="mt-8 bg-white p-8 border-t-4 border-[#00a8e8] shadow-2xl">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-600 flex items-center space-x-2 text-red-700 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Admin Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 focus:outline-none focus:border-[#0b3663] bg-slate-50 focus:bg-white transition-colors"
                  placeholder="admin@flyskytravel.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 focus:outline-none focus:border-[#0b3663] bg-slate-50 focus:bg-white transition-colors"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
              <span className="font-bold text-[#0b3663]">Default Seed Credentials:</span>
              <div className="mt-1 font-mono text-[10px] space-y-0.5 text-slate-700">
                <div>Email: <span className="font-semibold">admin@flyskytravel.com</span></div>
                <div>Pass: <span className="font-semibold">Admin@FlySky2026!</span></div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-3 px-4 bg-[#0b3663] hover:bg-[#00a8e8] text-white text-xs font-black uppercase tracking-widest transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In To Dashboard</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-200 text-center">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-[#0b3663] font-semibold"
            >
              ← Return to public website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
