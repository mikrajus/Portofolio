import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    title: "Embedded Systems & IoT",
    desc: "ESP32/Arduino microcontrollers, sensor telemetry via MQTT, and Proteus circuit simulation.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform Flutter & Dart apps built on Clean Architecture with offline-first SQLite data sync.",
    icon: (
      <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Computer Vision & AI",
    desc: "On-device real-time deep learning inference using YOLOv8, TFLite, and PyTorch for clinical detection.",
    icon: (
      <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Backend",
    desc: "REST APIs, PostgreSQL, and Node.js.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead
          eyebrow="About Me"
          title="Bridging Hardware & Software to Build Real-World Solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mt-6 text-left">
          {/* Main Bio Card */}
          <Reveal className="lg:col-span-6 flex">
            <div className="w-full p-6 md:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-xl flex flex-col justify-between hover:border-amber-500/60 transition-colors">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-700">
                    S1 Teknik Komputer (S.T.)
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-700">
                    IPK 3.52 / 4.00
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-neutral-900 mb-3">
                  Mikrajuz Sulthan, S.T.
                </h3>

                <p className="text-neutral-800 text-sm md:text-base font-medium leading-relaxed mb-4">
                  Saya adalah lulusan Teknik Komputer dari Universitas Syiah Kuala yang berfokus pada integrasi hardware dan software.
                </p>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-normal">
                  Saya memiliki pengalaman dalam merancang sistem embedded dari tahap penyusunan skema sirkuit hingga pemrograman mikrokontroler, serta membangun aplikasi mobile berbasis Flutter dan model Computer Vision untuk menyelesaikan permasalahan dunia nyata di bidang pertanian cerdas, kesehatan, dan infrastruktur IT.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-2 text-xs font-mono text-neutral-600 font-medium">
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200">
                  Banda Aceh, Indonesia
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200">
                  Universitas Syiah Kuala
                </span>
              </div>
            </div>
          </Reveal>

          {/* Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {pillars.map((pillar) => (
              <Reveal key={pillar.title} className="flex">
                <div className="w-full p-5 md:p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-amber-500/60 transition-all duration-300 shadow-md flex flex-col justify-between group">
                  <div>
                    <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 w-fit mb-3 group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
