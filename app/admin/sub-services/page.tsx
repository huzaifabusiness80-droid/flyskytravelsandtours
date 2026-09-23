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
  FileCheck2,
  Layers,
  Filter,
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  slug: string;
}

interface StepItem {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SubService {
  id: string;
  serviceId: string;
  service?: ServiceItem;
  name: string;
  slug: string;
  country?: string;
  tagline?: string;
  description?: string;
  image: string;
  priceStarting?: string;
  currency: string;
  processingTime?: string;
  validity?: string;
  stayDuration?: string;
  entryType?: string;
  requirements: string[];
  includes: string[];
  excludes: string[];
  badge?: string;
  featured: boolean;
  stepsOrItinerary?: StepItem[];
  faqs?: FaqItem[];
}

export default function AdminSubServicesPage() {
  const [subServices, setSubServices] = useState<SubService[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterService, setFilterService] = useState<string>("ALL");
  const [editingItem, setEditingItem] = useState<Partial<SubService> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [reqsStr, setReqsStr] = useState("");
  const [includesStr, setIncludesStr] = useState("");
  const [steps, setSteps] = useState<StepItem[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [subRes, servRes] = await Promise.all([
        fetch("/api/admin/sub-services"),
        fetch("/api/admin/services"),
      ]);

      const subData = await subRes.json();
      const servData = await servRes.json();

      if (subData.success) {
        setSubServices(subData.data || []);
      }
      if (servData.success) {
        const rawServices = servData.services || servData.data || [];
        setServices(rawServices.map((s: any) => ({
          id: s.slug || s.id,
          name: s.title || s.name,
          slug: s.slug,
        })));
      }
    } catch (err) {
      console.error("Failed to load sub-services", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openNewModal = () => {
    const defaultServiceId = services.find((s) => s.slug === "visa-consultancy")?.id || services[0]?.id || "";
    const fresh: Partial<SubService> = {
      serviceId: defaultServiceId,
      name: "",
      slug: "",
      country: "",
      tagline: "Fast-Track Visa Assistance",
      description: "Complete professional processing with document verification.",
      image: "/destinations/azerbaijan.jpg",
      priceStarting: "25000",
      currency: "PKR",
      processingTime: "5 - 7 Working Days",
      validity: "30 Days / 90 Days",
      stayDuration: "30 Days",
      entryType: "Single / Multiple",
      requirements: [
        "Original Passport valid for at least 6 months",
        "Recent 2 passport size photographs with white background",
        "Valid CNIC copy / National Identity Card",
        "Confirmed return flight reservation & hotel booking",
      ],
      includes: ["Visa Fee", "Consultancy & Document Review", "Embassy Appointment Support"],
      badge: "Express",
      featured: true,
    };

    setEditingItem(fresh);
    setReqsStr(fresh.requirements?.join("\n") || "");
    setIncludesStr(fresh.includes?.join("\n") || "");
    setSteps([
      { title: "Step 1: Document Auditing", description: "Audit documents and verify embassy requirements." },
      { title: "Step 2: Form & Vouchers", description: "Draft travel itinerary and issue verifiable vouchers." },
      { title: "Step 3: Submission & Tracking", description: "Submit application file and track real-time status." }
    ]);
    setFaqs([
      { question: "What is the processing time?", answer: "Normal processing takes 3 to 7 working days depending on embassy workload." }
    ]);
    setError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: SubService) => {
    const raw: any = item;
    const cleanPrice = (raw.priceStarting || raw.priceOrFee || "").replace(/^PKR\s*/i, "").replace(/[^0-9]/g, "") || (raw.priceStarting || raw.priceOrFee || "25000");

    const mappedItem: Partial<SubService> = {
      ...item,
      id: raw.id,
      serviceId: raw.serviceId || raw.parentSlug || (services.length > 0 ? services[0].id : ""),
      name: raw.name || raw.title || "",
      slug: raw.slug || "",
      country: raw.country || raw.title || "",
      tagline: raw.tagline || raw.subtitle || "Fast-Track Travel & Visa Services",
      description: raw.description || raw.overview || "",
      image: raw.image || "/destinations/azerbaijan.jpg",
      priceStarting: cleanPrice,
      currency: "PKR",
      processingTime: raw.processingTime || raw.durationOrProcessing || "3 - 5 Working Days",
      validity: raw.validity || "30 Days / 90 Days",
      stayDuration: raw.stayDuration || "30 Days",
      entryType: raw.entryType || "Single / Multiple",
      badge: raw.badge || "Featured",
      featured: raw.featured !== undefined ? !!raw.featured : (raw.isFeatured !== undefined ? !!raw.isFeatured : true),
      requirements: Array.isArray(raw.requirements) ? raw.requirements : [],
      includes: Array.isArray(raw.includes) ? raw.includes : Array.isArray(raw.inclusions) ? raw.inclusions : [],
    };

    setEditingItem(mappedItem);
    setReqsStr(
      mappedItem.requirements && mappedItem.requirements.length > 0
        ? mappedItem.requirements.join("\n")
        : "Original Passport valid for at least 6 months\nRecent 2 passport size photos with white background\nValid CNIC copy / National Identity Card\nConfirmed return flight reservation & hotel booking"
    );
    setIncludesStr(
      mappedItem.includes && mappedItem.includes.length > 0
        ? mappedItem.includes.join("\n")
        : "Official Visa Fee & Application Filing\nComplete Document Verification\nEmbassy Appointment Support\nHotel & Flight Itinerary Vouchers"
    );
    setSteps(
      Array.isArray(raw.stepsOrItinerary) && raw.stepsOrItinerary.length > 0
        ? raw.stepsOrItinerary
        : [
            { title: "Step 1: Document Auditing", description: "Audit documents and verify embassy requirements." },
            { title: "Step 2: Form & Vouchers", description: "Draft travel itinerary and issue verifiable vouchers." },
            { title: "Step 3: Submission & Tracking", description: "Submit application file and track real-time status." }
          ]
    );
    setFaqs(
      Array.isArray(raw.faqs) && raw.faqs.length > 0
        ? raw.faqs
        : [
            { question: "What is the standard processing time?", answer: "Normal processing takes 3 to 7 working days depending on embassy verification." }
          ]
    );
    setError(null);
    setIsModalOpen(true);
  };

  const addStep = () => {
    setSteps([...steps, { title: `Step ${steps.length + 1}: `, description: "" }]);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index: number, field: keyof StepItem, value: string) => {
    const updated = [...steps];
    updated[index] = { ...updated[index], [field]: value };
    setSteps(updated);
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: keyof FaqItem, value: string) => {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: value };
    setFaqs(updated);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.serviceId || !editingItem?.name || !editingItem?.slug) {
      setError("Please select a Service Category and enter Name & Slug.");
      return;
    }

    setSaving(true);
    setError(null);

    const payload = {
      ...editingItem,
      requirements: reqsStr.split("\n").map((s) => s.trim()).filter(Boolean),
      includes: includesStr.split("\n").map((s) => s.trim()).filter(Boolean),
      stepsOrItinerary: steps.filter((s) => s.title.trim() || s.description.trim()),
      faqs: faqs.filter((f) => f.question.trim() || f.answer.trim()),
    };

    try {
      const method = editingItem.id ? "PUT" : "POST";
      const res = await fetch("/api/admin/sub-services", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save item");
      }

      setIsModalOpen(false);
      setEditingItem(null);
      await loadData();
    } catch (err: any) {
      setError(err.message || "Failed to save item");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/sub-services?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Delete failed");
      }
      await loadData();
    } catch (err: any) {
      alert(err.message || "Failed to delete item");
    }
  };

  const filtered = subServices.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.country && item.country.toLowerCase().includes(search.toLowerCase())) ||
      (item.service?.name && item.service.name.toLowerCase().includes(search.toLowerCase()));

    const matchesService =
      filterService === "ALL" || item.service?.slug === filterService || item.serviceId === filterService;

    return matchesSearch && matchesService;
  });

  return (
    <AdminShell title="Visas & Sub-Services Management">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-white p-4 border border-slate-200">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by country, title, or service..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#0b3663]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] bg-white font-semibold"
              >
                <option value="ALL">All Service Categories</option>
                {services.map((s) => (
                  <option key={s.id} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={openNewModal}
            className="flex items-center justify-center space-x-1.5 bg-[#0b3663] hover:bg-[#00a8e8] text-white px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Visa / Sub-Service</span>
          </button>
        </div>

        {/* Sub-services List */}
        <div className="bg-white border border-slate-200">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[#00a8e8]" />
              <p className="text-xs font-semibold">Loading items from database...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              <FileCheck2 className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <p className="text-xs font-semibold">No visas or sub-services found</p>
              <button
                onClick={openNewModal}
                className="mt-3 text-xs text-[#00a8e8] font-bold uppercase hover:underline"
              >
                + Add your first visa/service item
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Name / Title</th>
                    <th className="py-3 px-4">Parent Category</th>
                    <th className="py-3 px-4">Processing & Stay</th>
                    <th className="py-3 px-4">Starting Price</th>
                    <th className="py-3 px-4">Requirements</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="w-12 h-9 bg-slate-100 border border-slate-200 overflow-hidden relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          slug: {item.slug}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 font-bold text-[#0b3663] text-[10px] uppercase">
                          {item.service?.name || "General"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <div>Time: {item.processingTime || "N/A"}</div>
                        <div className="text-[10px] text-slate-400">
                          Stay: {item.stayDuration || item.validity || "Flexible"}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-bold text-[#0b3663]">
                        {item.priceStarting
                          ? `${item.currency} ${item.priceStarting}`
                          : "Call for quote"}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <span className="text-slate-500 font-semibold">
                          {item.requirements?.length || 0} items
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="p-1.5 bg-slate-100 hover:bg-[#00a8e8] hover:text-white text-slate-700 transition-colors"
                          title="Edit Visa"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id, item.name)}
                          className="p-1.5 bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors"
                          title="Delete Visa"
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
        {isModalOpen && editingItem && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white border border-slate-300 w-full max-w-3xl my-8 p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 sticky top-0 bg-white z-10">
                <h3 className="text-base font-black uppercase tracking-wider text-[#0b3663]">
                  {editingItem.id ? "Edit Visa / Sub-Service" : "Create New Visa / Sub-Service"}
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
                      Parent Service Category *
                    </label>
                    <select
                      required
                      value={editingItem.serviceId || ""}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, serviceId: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] bg-white font-semibold"
                    >
                      <option value="">Select Category...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Title / Country Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingItem.name || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        setEditingItem({
                          ...editingItem,
                          name: val,
                          country: editingItem.country || val,
                          slug: editingItem.id
                            ? editingItem.slug
                            : val.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                        });
                      }}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. Dubai / UAE Tourist Visa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      URL Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingItem.slug || ""}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, slug: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663] font-mono"
                      placeholder="dubai-tourist-visa"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Starting Price (Number)
                    </label>
                    <input
                      type="text"
                      value={editingItem.priceStarting || ""}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, priceStarting: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 28000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Processing Time
                    </label>
                    <input
                      type="text"
                      value={editingItem.processingTime || ""}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, processingTime: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 3 - 5 Working Days"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Validity Period
                    </label>
                    <input
                      type="text"
                      value={editingItem.validity || ""}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, validity: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 60 Days from issue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Stay Duration
                    </label>
                    <input
                      type="text"
                      value={editingItem.stayDuration || ""}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, stayDuration: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. 30 Days"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Entry Type
                    </label>
                    <input
                      type="text"
                      value={editingItem.entryType || ""}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, entryType: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="e.g. Single Entry / Multiple"
                    />
                  </div>
                </div>

                {/* Cloudinary Image Uploader */}
                <div className="border-t border-slate-200 pt-4">
                  <CloudinaryUploader
                    label="Cover Image (Cloudinary CDN)"
                    value={editingItem.image}
                    onChange={(url) => setEditingItem({ ...editingItem, image: url })}
                    folder="flysky/services"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Description & Overview
                  </label>
                  <textarea
                    rows={3}
                    value={editingItem.description || ""}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, description: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                    placeholder="Provide details about visa procedures, documentation guidelines..."
                  />
                </div>

                {/* Requirements & Inclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Required Documents (1 item per line)
                    </label>
                    <textarea
                      rows={5}
                      value={reqsStr}
                      onChange={(e) => setReqsStr(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="Original Passport (6+ months validity)&#10;2 Passport size photos with white background&#10;Valid CNIC copy&#10;Last 6 months bank statement"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Included In Service (1 item per line)
                    </label>
                    <textarea
                      rows={5}
                      value={includesStr}
                      onChange={(e) => setIncludesStr(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#0b3663]"
                      placeholder="Official Visa Fee&#10;Document Verification&#10;Embassy Appointment Schedule&#10;Flight & Hotel Reservation for Visa"
                    />
                  </div>
                </div>

                {/* Step-by-Step Procedure & Roadmap */}
                <div className="border-t border-slate-200 pt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Step-by-Step Procedure & Roadmap / Itinerary
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        These steps appear in the &quot;Step-by-Step Procedure &amp; Roadmap&quot; section on the detail page.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={addStep}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1 border border-slate-300 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#00a8e8]" />
                      <span>Add Step</span>
                    </button>
                  </div>

                  {steps.length === 0 ? (
                    <div className="p-3 bg-slate-50 border border-dashed border-slate-300 text-slate-500 text-xs text-center">
                      No custom steps added yet. Click &quot;Add Step&quot; to define procedure steps.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {steps.map((step, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 border border-slate-300 relative space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#00a8e8]">
                              Step #{idx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeStep(idx)}
                              className="text-red-600 hover:text-red-800 p-1 transition-colors"
                              title="Delete Step"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <input
                            type="text"
                            placeholder="Step Title (e.g. Step 1: Document Auditing)"
                            value={step.title}
                            onChange={(e) => updateStep(idx, "title", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 border border-slate-300 bg-white focus:outline-none focus:border-[#0b3663] font-semibold"
                          />
                          <textarea
                            rows={2}
                            placeholder="Step Description / details..."
                            value={step.description}
                            onChange={(e) => updateStep(idx, "description", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 border border-slate-300 bg-white focus:outline-none focus:border-[#0b3663]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Frequently Asked Questions (FAQs) */}
                <div className="border-t border-slate-200 pt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Frequently Asked Questions (FAQs)
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Add common questions and answers for this specific service / package.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={addFaq}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1 border border-slate-300 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#00a8e8]" />
                      <span>Add FAQ</span>
                    </button>
                  </div>

                  {faqs.length === 0 ? (
                    <div className="p-3 bg-slate-50 border border-dashed border-slate-300 text-slate-500 text-xs text-center">
                      No FAQs added yet. Click &quot;Add FAQ&quot; to add question/answer pairs.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {faqs.map((faq, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 border border-slate-300 relative space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                              FAQ #{idx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFaq(idx)}
                              className="text-red-600 hover:text-red-800 p-1 transition-colors"
                              title="Delete FAQ"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <input
                            type="text"
                            placeholder="Question (e.g. Can fresh passport holders apply?)"
                            value={faq.question}
                            onChange={(e) => updateFaq(idx, "question", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 border border-slate-300 bg-white focus:outline-none focus:border-[#0b3663] font-semibold"
                          />
                          <textarea
                            rows={2}
                            placeholder="Answer details..."
                            value={faq.answer}
                            onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 border border-slate-300 bg-white focus:outline-none focus:border-[#0b3663]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
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
                        <span>Save Sub-Service</span>
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
