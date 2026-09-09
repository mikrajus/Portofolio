import React, { useState, useEffect } from "react";
import { usePortfolioData } from "@/lib/portfolio-context";

export default function AdminDashboard() {
  const {
    adminOpen,
    setAdminOpen,
    experience,
    projects,
    skills,
    certifications,
    addExperience,
    deleteExperience,
    addProject,
    deleteProject,
    addCertification,
    deleteCertification,
    addSkillItem,
    deleteSkillItem,
    resetAllData,
    exportJSON,
  } = usePortfolioData();

  const [activeTab, setActiveTab] = useState<"exp" | "proj" | "skill" | "cert">("exp");
  const [copied, setCopied] = useState(false);

  // Form states
  const [expForm, setExpForm] = useState({
    role: "",
    org: "",
    period: "2026",
    desc: "",
    tags: "",
    icon: "briefcase",
  });

  const [projForm, setProjForm] = useState({
    name: "",
    tabCategory: "iot",
    badge: "",
    category: "",
    desc: "",
    stack: "",
    github: "",
    architectureFlow: "",
    image: "",
  });

  const [skillGroup, setSkillGroup] = useState("Programming & Languages");
  const [newSkillItem, setNewSkillItem] = useState("");

  const [certOrg, setCertOrg] = useState("Dicoding Indonesia");
  const [certForm, setCertForm] = useState({ name: "", date: "2026", tag: "" });

  // Listen for Ctrl+Shift+A shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        setAdminOpen(!adminOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [adminOpen, setAdminOpen]);

  if (!adminOpen) return null;

  // Handlers
  const handleAddExp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expForm.role || !expForm.org) return;
    addExperience({
      role: expForm.role,
      org: expForm.org,
      period: expForm.period,
      desc: expForm.desc,
      tags: expForm.tags ? expForm.tags.split(",").map((t) => t.trim()) : [],
      icon: expForm.icon,
    });
    setExpForm({ role: "", org: "", period: "2026", desc: "", tags: "", icon: "briefcase" });
  };

  const handleAddProj = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projForm.name || !projForm.desc) return;
    addProject({
      name: projForm.name,
      tabCategory: projForm.tabCategory,
      badge: projForm.badge || null,
      category: projForm.category || projForm.name,
      desc: projForm.desc,
      stack: projForm.stack ? projForm.stack.split(",").map((s) => s.trim()) : [],
      architectureFlow: projForm.architectureFlow
        ? projForm.architectureFlow.split(",").map((a) => a.trim())
        : undefined,
      github: projForm.github || undefined,
      image: projForm.image || undefined,
    });
    setProjForm({
      name: "",
      tabCategory: "iot",
      badge: "",
      category: "",
      desc: "",
      stack: "",
      github: "",
      architectureFlow: "",
      image: "",
    });
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillItem.trim()) return;
    addSkillItem(skillGroup, newSkillItem.trim());
    setNewSkillItem("");
  };

  const handleAddCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certForm.name) return;
    addCertification(certOrg, {
      name: certForm.name,
      date: certForm.date,
      tag: certForm.tag || undefined,
    });
    setCertForm({ name: "", date: "2026", tag: "" });
  };

  const handleCopyJSON = () => {
    const jsonStr = exportJSON();
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[90vh] rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
              ⚙️
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-100">Web Admin Dashboard</h2>
              <p className="text-xs text-neutral-400">Kelola data portofolio secara dinamis & real-time</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] font-mono rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
              Ctrl+Shift+A
            </kbd>
            <button
              onClick={() => setAdminOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Admin Tabs */}
        <div className="flex border-b border-neutral-800 bg-neutral-900/60 px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab("exp")}
            className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-colors ${
              activeTab === "exp"
                ? "bg-blue-600 text-white"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            💼 Pengalaman ({experience.length})
          </button>
          <button
            onClick={() => setActiveTab("proj")}
            className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-colors ${
              activeTab === "proj"
                ? "bg-blue-600 text-white"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            🚀 Proyek ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("skill")}
            className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-colors ${
              activeTab === "skill"
                ? "bg-blue-600 text-white"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            ⚡ Skills
          </button>
          <button
            onClick={() => setActiveTab("cert")}
            className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-colors ${
              activeTab === "cert"
                ? "bg-blue-600 text-white"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            📜 Sertifikasi
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          {/* TAB 1: EXPERIENCE */}
          {activeTab === "exp" && (
            <div className="space-y-6">
              <form onSubmit={handleAddExp} className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800 space-y-3">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Tambah Pengalaman Baru</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Peran / Jabatan (contoh: Lab Assistant)"
                    required
                    value={expForm.role}
                    onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Organisasi / Instansi (contoh: USK)"
                    required
                    value={expForm.org}
                    onChange={(e) => setExpForm({ ...expForm, org: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Periode (contoh: 2025 - 2026)"
                    value={expForm.period}
                    onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Tags dipisah koma (contoh: Arduino, ESP32, Python)"
                    value={expForm.tags}
                    onChange={(e) => setExpForm({ ...expForm, tags: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Deskripsi singkat tanggung jawab dan kontribusi..."
                  rows={2}
                  value={expForm.desc}
                  onChange={(e) => setExpForm({ ...expForm, desc: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500 resize-none"
                />
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors">
                  + Tambah Pengalaman
                </button>
              </form>

              {/* Current List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Daftar Pengalaman Aktif</h4>
                {experience.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/40 border border-neutral-800 text-xs">
                    <div>
                      <div className="font-bold text-neutral-100">{item.role} <span className="text-blue-400">@ {item.org}</span></div>
                      <div className="text-[11px] text-neutral-400">{item.period} — {item.desc}</div>
                    </div>
                    <button
                      onClick={() => deleteExperience(idx)}
                      className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 text-[10px]"
                    >
                      Hapus
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PROJECTS */}
          {activeTab === "proj" && (
            <div className="space-y-6">
              <form onSubmit={handleAddProj} className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800 space-y-3">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Tambah Proyek Baru</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nama Proyek (contoh: Smart Farm Kit)"
                    required
                    value={projForm.name}
                    onChange={(e) => setProjForm({ ...projForm, name: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                  <select
                    value={projForm.tabCategory}
                    onChange={(e) => setProjForm({ ...projForm, tabCategory: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  >
                    <option value="iot">📡 IoT & Embedded Systems</option>
                    <option value="mobile">📱 Mobile App & AI</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Badge (contoh: 🏆 Top 180 Innovillage)"
                    value={projForm.badge}
                    onChange={(e) => setProjForm({ ...projForm, badge: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Tech Stack dipisah koma (contoh: ESP32, MQTT, Flutter)"
                    value={projForm.stack}
                    onChange={(e) => setProjForm({ ...projForm, stack: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Architecture Flow dipisah koma (contoh: ESP32, MQTT, Node.js, Dashboard)"
                  value={projForm.architectureFlow}
                  onChange={(e) => setProjForm({ ...projForm, architectureFlow: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="url"
                    placeholder="GitHub Repo URL (opsional)"
                    value={projForm.github}
                    onChange={(e) => setProjForm({ ...projForm, github: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Image Screenshot URL (opsional)"
                    value={projForm.image}
                    onChange={(e) => setProjForm({ ...projForm, image: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Deskripsi penjelasan proyek..."
                  rows={2}
                  required
                  value={projForm.desc}
                  onChange={(e) => setProjForm({ ...projForm, desc: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500 resize-none"
                />
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors">
                  + Tambah Proyek
                </button>
              </form>

              {/* Current List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Daftar Proyek Aktif</h4>
                {projects.map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/40 border border-neutral-800 text-xs">
                    <div>
                      <div className="font-bold text-neutral-100">{p.name} <span className="text-blue-400">({p.tabCategory})</span></div>
                      <div className="text-[11px] text-neutral-400">{p.desc}</div>
                    </div>
                    <button
                      onClick={() => deleteProject(idx)}
                      className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 text-[10px]"
                    >
                      Hapus
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === "skill" && (
            <div className="space-y-6">
              <form onSubmit={handleAddSkill} className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800 space-y-3">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Tambah Item Skill Baru</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    value={skillGroup}
                    onChange={(e) => setSkillGroup(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  >
                    {skills.map((s) => (
                      <option key={s.group} value={s.group}>
                        {s.group}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Nama Skill / Teknologi (contoh: Docker, GraphQL)"
                    required
                    value={newSkillItem}
                    onChange={(e) => setNewSkillItem(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors">
                  + Tambah Skill
                </button>
              </form>

              {/* Current List */}
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.group} className="p-3.5 rounded-xl bg-neutral-950/40 border border-neutral-800 space-y-2 text-xs">
                    <div className="font-bold text-neutral-200">{group.group}</div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700">
                          {item}
                          <button
                            onClick={() => deleteSkillItem(group.group, item)}
                            className="text-red-400 hover:text-red-300 font-bold"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATIONS */}
          {activeTab === "cert" && (
            <div className="space-y-6">
              <form onSubmit={handleAddCert} className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800 space-y-3">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Tambah Sertifikat Baru</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    value={certOrg}
                    onChange={(e) => setCertOrg(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  >
                    {certifications.map((c) => (
                      <option key={c.org} value={c.org}>
                        {c.org}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Nama Sertifikat"
                    required
                    value={certForm.name}
                    onChange={(e) => setCertForm({ ...certForm, name: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Tanggal / Tahun (contoh: Sep 2026)"
                    value={certForm.date}
                    onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Tag Kategori (contoh: Flutter, IoT)"
                    value={certForm.tag}
                    onChange={(e) => setCertForm({ ...certForm, tag: e.target.value })}
                    className="px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors">
                  + Tambah Sertifikat
                </button>
              </form>

              {/* Current List */}
              <div className="space-y-4">
                {certifications.map((c) => (
                  <div key={c.org} className="p-3.5 rounded-xl bg-neutral-950/40 border border-neutral-800 space-y-2 text-xs">
                    <div className="font-bold text-blue-400">{c.org}</div>
                    <div className="space-y-1">
                      {c.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
                          <div>
                            <span className="text-neutral-200">{item.name}</span>
                            <span className="text-[10px] text-neutral-400 font-mono ml-2">({item.date})</span>
                          </div>
                          <button
                            onClick={() => deleteCertification(c.org, idx)}
                            className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20 text-[10px]"
                          >
                            Hapus
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-neutral-800 bg-neutral-950/50">
          <div className="flex gap-2">
            <button
              onClick={handleCopyJSON}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-neutral-800 text-blue-300 border border-blue-500/40 hover:bg-blue-500/10 transition-colors"
            >
              {copied ? "✓ JSON Copied!" : "📥 Export JSON Data"}
            </button>
            <button
              onClick={resetAllData}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-red-400 hover:border-red-500/40 transition-colors"
            >
              🔄 Reset to Default
            </button>
          </div>

          <button
            onClick={() => setAdminOpen(false)}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-700 transition-colors"
          >
            Selesai & Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
