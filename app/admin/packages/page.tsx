"use client";

import React, { useEffect, useState } from "react";
import AdminShell from "../components/AdminShell";
import CloudinaryUploader from "../components/CloudinaryUploader";
import {
  Plus,
  Trash2,
  Edit2,
  Search,
  Check,
  X,
  Loader2,
  Package as PackageIcon,
  Star,
  Eye,
  ArrowUpDown,
} from "lucide-react";

interface TourPackage {
  id: string;
  title: string;
  slug: string;
  destination: string;
  duration: string;
  price: string;
  rating?: number;
  reviewsCount?: number;
  badge?: string;
  image: string;
  overview?: string;
  included: string[];
  excluded: string[];
  highlights: string[];
  itinerary: { day: number; title: string; desc: string }[];
  featured: boolean;
}

const emptyPackage: Partial<TourPackage> = {
  title: "",
  slug: "",
  destination: "",
  duration: "5 Days / 4 Nights",
  price: "PKR 145,000",
  rating: 4.9,
  reviewsCount: 30,
  badge: "Featured",
  image: "/destinations/azerbaijan.jpg",
  overview: "",
  included: ["Hotel Accommodation", "Daily Breakfast", "Airport Transfers", "City Tours"],
  excluded: ["International Airfare", "Personal Expenses", "Travel Insurance"],
  highlights: ["Scenic Views", "Guided Sightseeing", "Comfortable Transport"],
  itinerary: [
    { day: 1, title: "Arrival & Hotel Check-in", desc: "Meet & greet at the airport followed by transfer to hotel." },
    { day: 2, title: "City Tour & Exploration", desc: "Full day guided excursion exploring major attractions." },
  ],
  featured: true,
};

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editingPkg, setEditingPkg] = useState<Partial<TourPackage> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper string states for comma-separated inputs
  const [includedStr, setIncludedStr] = useState("");
  const [excludedStr, setExcludedStr] = useState("");
  const [highlightsStr, setHighlightsStr] = useState("");

  const loadPackages = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/packages");
      const data = await res.json();
      if (data.success) {
        setPackages(data.data || []);
      }
    } catch (err) {
      console.error("Failed to load packages", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPackages();
  }, []);

  const openNewModal = () => {
    const fresh = { ...emptyPackage };
    setEditingPkg(fresh);
    setIncludedStr(fresh.included?.join("\n") || "");
    setExcludedStr(fresh.excluded?.join("\n") || "");
    setHighlightsStr(fresh.highlights?.join("\n") || "");
    setError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (pkg: TourPackage) => {
    setEditingPkg(pkg);
    setIncludedStr(pkg.included?.join("\n") || "");
    setExcludedStr(pkg.excluded?.join("\n") || "");
    setHighlightsStr(pkg.highlights?.join("\n") || "");
    setError(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPkg?.title || !editingPkg?.slug || !editingPkg?.destination || !editingPkg?.price) {
      setError("Please fill in Title, Slug, Destination, and Price.");
      return;
    }

    setSaving(true);
    setError(null);

    const payload = {
      ...editingPkg,
      included: includedStr.split("\n").map((s) => s.trim()).filter(Boolean),
      excluded: excludedStr.split("\n").map((s) => s.trim()).filter(Boolean),
      highlights: highlightsStr.split("\n").map((s) => s.trim()).filter(Boolean),
    };

    try {
      const method = editingPkg.id ? "PUT" : "POST";
      const res = await fetch("/api/admin/packages", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save package");
      }

      setIsModalOpen(false);
      setEditingPkg(null);
      await loadPackages();
    } catch (err: any) {
      setError(err.message || "Failed to save package");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/packages?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Delete failed");
      }
      await loadPackages();
    } catch (err: any) {
      alert(err.message || "Failed to delete package");
    }
  };

  const filtered = packages.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell title="Tour Packages Management">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 border border-slate-200">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search packages by title or destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#0b3663]"
            />
          </div>

          <button
            onClick={openNewModal}
            className="flex items-center justify-center space-x-1.5 bg-[#0b3663] hover:bg-[#00a8e8] text-white px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Tour Package</span>
          </button>
        </div>

        {/* Packages Grid / Table */}
        <div className="bg-white border border-slate-200">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[#00a8e8]" />
              <p className="text-xs font-semibold">Loading tour packages from database...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              <PackageIcon className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <p className="text-xs font-semibold">No tour packages found</p>
              <button
                onClick={openNewModal}
                className="mt-3 text-xs text-[#00a8e8] font-bold uppercase hover:underline"
              >
                + Create the first tour package
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Package Title</th>
                    <th className="py-3 px-4">Destination</th>
                    <th className="py-3 px-4">Duration</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Badge / Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="w-14 h-10 bg-slate-100 border border-slate-200 overflow-hidden relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{pkg.title}</div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          slug: {pkg.slug}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-700">
                        {pkg.destination}
                      </td>
                      <td className="py-3 px-4 text-slate-600">{pkg.duration}</td>
                      <td className="py-3 px-4 font-bold text-[#0b3663]">
                        {pkg.price}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-1">
                          {pkg.badge && (
                            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
                              {pkg.badge}
                            </span>
                          )}
                          {pkg.featured && (
                            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-sky-50 text-[#00a8e8] border border-sky-200">
                              Homepage
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => openEditModal(pkg)}
                          className="p-1.5 bg-slate-100 hover:bg-[#00a8e8] hover:text-white text-slate-700 transition-colors"
                          title="Edit Package"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(pkg.id, pkg.title)}
                          className="p-1.5 bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors"
                          title="Delete Package"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Edit / Create Modal */}
        {isModalOpen && editingPkg && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white border border-slate-300 w-full max-w-3xl my-8 p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 sticky top-0 bg-white z-10">
                <h3 className="text-base font-black uppercase tracking-wider text-[#0b3663]">
                  {editingPkg.id ? "Edit Tour Package" : "Create New Tour Package"}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-600 text-red-700 text-xs font-semibold">
                  {error}
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Package Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingPkg.title || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        setEditingPkg({
                          ...editingPkg,
                          title: val,
                          slug: editingPkg.id
                            ? editingPkg.slug
                            : val.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                        });
                      }}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 5-Day Baku Highlights & Gobustan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      URL Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingPkg.slug || ""}
                      onChange={(e) =>
                        setEditingPkg({ ...editingPkg, slug: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] font-mono"
                      placeholder="baku-highlights-5-days"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Destination Country / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingPkg.destination || ""}
                      onChange={(e) =>
                        setEditingPkg({ ...editingPkg, destination: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. Baku, Azerbaijan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Duration *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingPkg.duration || ""}
                      onChange={(e) =>
                        setEditingPkg({ ...editingPkg, duration: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 5 Days / 4 Nights"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Price / Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingPkg.price || ""}
                      onChange={(e) =>
                        setEditingPkg({ ...editingPkg, price: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. PKR 145,000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={editingPkg.badge || ""}
                      onChange={(e) =>
                        setEditingPkg({ ...editingPkg, badge: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. Best Seller / Featured"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Rating (1-5)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={editingPkg.rating || 4.9}
                      onChange={(e) =>
                        setEditingPkg({
                          ...editingPkg,
                          rating: parseFloat(e.target.value) || 5,
                        })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                    />
                  </div>

                  <div className="flex items-center pt-5">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={editingPkg.featured ?? true}
                        onChange={(e) =>
                          setEditingPkg({ ...editingPkg, featured: e.target.checked })
                        }
                        className="w-4 h-4 text-[#00a8e8] border-slate-300 focus:ring-0"
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Show on Homepage
                      </span>
                    </label>
                  </div>
                </div>

                {/* Cloudinary Image Uploader */}
                <div className="border-t border-slate-200 pt-4">
                  <CloudinaryUploader
                    label="Package Cover Photo (Cloudinary CDN)"
                    value={editingPkg.image}
                    onChange={(url) => setEditingPkg({ ...editingPkg, image: url })}
                    folder="flysky/packages"
                  />
                </div>

                {/* Overview */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Package Overview / Description
                  </label>
                  <textarea
                    rows={3}
                    value={editingPkg.overview || ""}
                    onChange={(e) =>
                      setEditingPkg({ ...editingPkg, overview: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                    placeholder="Comprehensive overview of what travelers will experience..."
                  />
                </div>

                {/* Inclusions / Exclusions / Highlights (1 item per line) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-200 pt-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Included Items (1 per line)
                    </label>
                    <textarea
                      rows={4}
                      value={includedStr}
                      onChange={(e) => setIncludedStr(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] font-sans"
                      placeholder="Hotel Accommodation&#10;Daily Breakfast&#10;Airport Transfers"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Excluded Items (1 per line)
                    </label>
                    <textarea
                      rows={4}
                      value={excludedStr}
                      onChange={(e) => setExcludedStr(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] font-sans"
                      placeholder="International Flight&#10;Personal Expenses&#10;Visa Fee"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Highlights (1 per line)
                    </label>
                    <textarea
                      rows={4}
                      value={highlightsStr}
                      onChange={(e) => setHighlightsStr(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] font-sans"
                      placeholder="Flame Towers Tour&#10;Gobustan Mud Volcanoes&#10;Old City Baku Walk"
                    />
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex items-center justify-end space-x-3 pt-6 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-[#0b3663] hover:bg-[#00a8e8] text-white text-xs font-black uppercase tracking-widest transition-colors flex items-center space-x-2 disabled:opacity-50"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Save Package</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
