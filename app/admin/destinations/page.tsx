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
  MapPin,
  Eye,
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  imageSrc?: string;
  visaType?: string;
  processingTime?: string;
  highlight?: string;
  link?: string;
  category?: string;
  description?: string;
  packagesCount?: number;
  featured?: boolean;
}

export default function AdminDestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editingDest, setEditingDest] = useState<Partial<Destination> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDestinations = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/destinations");
      const data = await res.json();
      if (data.success) {
        setDestinations(data.data || []);
      }
    } catch (err) {
      console.error("Failed to load destinations", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDestinations();
  }, []);

  const openNewModal = () => {
    setEditingDest({
      name: "",
      country: "",
      image: "/destinations/azerbaijan.jpg",
      visaType: "Tourist & Visit Visa",
      processingTime: "3 - 5 Working Days",
      highlight: "Explore unforgettable sights, rich culture and breathtaking experiences.",
      link: "/services/visa-processing",
      description: "Explore unforgettable sights, rich culture and breathtaking experiences.",
      packagesCount: 4,
      featured: true,
    });
    setError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (dest: Destination) => {
    const raw: any = dest;
    const mapped: Partial<Destination> = {
      ...dest,
      name: raw.name || "",
      country: raw.country || "",
      image: raw.image || raw.imageSrc || "/destinations/azerbaijan.jpg",
      visaType: raw.visaType || "Tourist & Visit Visa",
      processingTime: raw.processingTime || "3 - 5 Working Days",
      highlight: raw.highlight || raw.description || `${raw.name} travel and tour highlights`,
      link: raw.link || "/services/visa-processing",
      description: raw.description || raw.highlight || "Explore unforgettable sights, rich culture and breathtaking experiences.",
      packagesCount: raw.packagesCount ?? 4,
      featured: raw.featured ?? true,
    };
    setEditingDest(mapped);
    setError(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDest?.name || !editingDest?.country) {
      setError("Please fill in Destination Name and Country.");
      return;
    }

    setSaving(true);
    setError(null);

    const payload = {
      ...editingDest,
      imageSrc: editingDest.image,
      highlight: editingDest.highlight || editingDest.description || `${editingDest.name} tours`,
    };

    try {
      const method = editingDest.id ? "PUT" : "POST";
      const res = await fetch("/api/admin/destinations", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save destination");
      }

      setIsModalOpen(false);
      setEditingDest(null);
      await loadDestinations();
    } catch (err: any) {
      setError(err.message || "Failed to save destination");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/destinations?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Delete failed");
      }
      await loadDestinations();
    } catch (err: any) {
      alert(err.message || "Failed to delete destination");
    }
  };

  const filtered = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell title="Destinations">
      <div className="space-y-4 sm:space-y-6">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 border border-slate-200 shadow-2xs">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destinations by city or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#0b3663]"
            />
          </div>

          <button
            onClick={openNewModal}
            className="flex items-center justify-center space-x-1.5 bg-[#0b3663] hover:bg-[#00a8e8] text-white px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-colors shadow-2xs"
          >
            <Plus className="w-4 h-4" />
            <span>Add Destination</span>
          </button>
        </div>

        {/* Grid of destinations */}
        {loading ? (
          <div className="bg-white border border-slate-200 p-12 text-center text-slate-400 shadow-2xs">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[#00a8e8]" />
            <p className="text-xs font-semibold">Loading destinations from database...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white border border-slate-200 p-12 text-center text-slate-400 shadow-2xs">
            <MapPin className="w-10 h-10 mx-auto mb-2 text-slate-300" />
            <p className="text-xs font-semibold">No destinations configured</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((dest) => (
              <div
                key={dest.id}
                className="bg-white border border-slate-200 overflow-hidden flex flex-col group hover:border-[#00a8e8] transition-all shadow-2xs"
              >
                <div className="h-40 bg-slate-100 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {dest.featured && (
                      <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#0b3663] text-white">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider">
                    {dest.packagesCount} Tour Packages
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black uppercase text-slate-900 tracking-wide">
                      {dest.name}
                    </h4>
                    <p className="text-xs text-[#00a8e8] font-bold uppercase mt-0.5">
                      {dest.country}
                    </p>
                    {dest.description && (
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                        {dest.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => openEditModal(dest)}
                      className="p-1.5 bg-slate-100 hover:bg-[#00a8e8] hover:text-white text-slate-700 transition-colors"
                      title="Edit Destination"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(dest.id, dest.name)}
                      className="p-1.5 bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors"
                      title="Delete Destination"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit / Create Modal */}
        {isModalOpen && editingDest && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white border border-slate-300 w-full max-w-lg my-2 sm:my-8 p-4 sm:p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 sticky top-0 bg-white z-10">
                <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-[#0b3663]">
                  {editingDest.id ? "Edit Destination" : "Add New Destination"}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-800 transition-colors rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {error && (
                <div className="mb-4 p-2.5 bg-red-50 border-l-4 border-red-600 text-red-700 text-xs font-semibold">
                  {error}
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      City / Place Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingDest.name || ""}
                      onChange={(e) =>
                        setEditingDest({ ...editingDest, name: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. Baku"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Country Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingDest.country || ""}
                      onChange={(e) =>
                        setEditingDest({ ...editingDest, country: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. Azerbaijan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Packages Count
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={editingDest.packagesCount ?? 4}
                      onChange={(e) =>
                        setEditingDest({
                          ...editingDest,
                          packagesCount: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                    />
                  </div>

                  <div className="flex items-center pt-2 sm:pt-5">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={editingDest.featured ?? true}
                        onChange={(e) =>
                          setEditingDest({
                            ...editingDest,
                            featured: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-[#00a8e8] border-slate-300 focus:ring-0"
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Featured on Home
                      </span>
                    </label>
                  </div>
                </div>

                {/* Cloudinary Image Uploader */}
                <div>
                  <CloudinaryUploader
                    label="Destination Image (Cloudinary CDN)"
                    value={editingDest.image}
                    onChange={(url) => setEditingDest({ ...editingDest, image: url })}
                    folder="flysky/destinations"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Visa Type / Category Subtitle
                    </label>
                    <input
                      type="text"
                      value={editingDest.visaType || ""}
                      onChange={(e) =>
                        setEditingDest({ ...editingDest, visaType: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 5 Year Multiple & Tourist"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Processing Time
                    </label>
                    <input
                      type="text"
                      value={editingDest.processingTime || ""}
                      onChange={(e) =>
                        setEditingDest({ ...editingDest, processingTime: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 24-48 Hours / 3-5 Working Days"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Highlight Tag / Key Feature
                    </label>
                    <input
                      type="text"
                      value={editingDest.highlight || ""}
                      onChange={(e) =>
                        setEditingDest({ ...editingDest, highlight: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. Done Base Tourist Visa"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Target Page Link (URL)
                    </label>
                    <input
                      type="text"
                      value={editingDest.link || ""}
                      onChange={(e) =>
                        setEditingDest({ ...editingDest, link: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] font-mono"
                      placeholder="e.g. /services/visa-processing/uae-visa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Short Description / Overview
                  </label>
                  <textarea
                    rows={2}
                    value={editingDest.description || ""}
                    onChange={(e) =>
                      setEditingDest({ ...editingDest, description: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                    placeholder="Rich cultural heritage, modern architecture..."
                  />
                </div>

                <div className="flex items-center justify-end space-x-2 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold uppercase transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2 bg-[#0b3663] hover:bg-[#00a8e8] text-white text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 transition-colors shadow-2xs"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Save Destination</span>
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
