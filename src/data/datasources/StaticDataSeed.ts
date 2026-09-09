import type { ProjectEntity } from "@/domain/entities/Project";
import type { ExperienceEntity, ActivityEntity } from "@/domain/entities/Experience";
import type { SkillGroupEntity } from "@/domain/entities/Skill";
import type { CertificationGroupEntity } from "@/domain/entities/Certification";
import type { EducationEntity } from "@/domain/entities/Education";
import type { StatEntity } from "@/domain/entities/Stats";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const socials = {
  github: "https://github.com/mikrajus",
  linkedin: "https://linkedin.com/in/mikrajuz-sulthan-644a7b246",
  email: "mailto:mikrajus@gmail.com",
  resume: "#",
};

export const statsSeed: StatEntity[] = [
  { label: "GPA Score", value: "3.52", sub: "Universitas Syiah Kuala", icon: "academic" },
  { label: "Lab TA Roles", value: "2+", sub: "Embedded Systems & Software Eng.", icon: "briefcase" },
  { label: "Featured Projects", value: "5+", sub: "IoT, Mobile & Computer Vision", icon: "code" },
  { label: "Certifications", value: "10+", sub: "Dicoding, IBM, Cisco, Progate", icon: "award" },
];

export const skillsSeed: SkillGroupEntity[] = [
  {
    group: "Programming & Languages",
    icon: "code",
    items: ["Flutter", "Dart", "Python", "C / C++", "JavaScript", "Node.js", "Git & GitHub"],
  },
  {
    group: "Embedded & IoT Ecosystem",
    icon: "cpu",
    items: ["Arduino", "ESP32", "ESP8266", "Sensors & Actuators", "MQTT", "Proteus Circuit Simulation"],
  },
  {
    group: "Data, Backend & AI",
    icon: "database",
    items: ["PostgreSQL", "SQLite", "Firestore", "REST API", "YOLOv8", "TFLite / Deep Learning"],
  },
];

export const projectsSeed: ProjectEntity[] = [
  {
    name: "YouthFarmKit",
    flag: "Featured",
    badge: "🏆 Top 180 Innovillage 2025",
    tabCategory: "iot",
    category: "IoT · Smart Agriculture · Innovillage 2025",
    desc: "A comprehensive agricultural land monitoring system that optimizes food productivity for guided farmer groups through real-time telemetry.",
    features: [
      {
        strong: "ESP32 Microcontroller",
        text: "connected environmental sensors monitoring soil moisture & ambient temperature.",
      },
      {
        strong: "Telemetry Dashboard",
        text: "interactive web application providing actionable analytics for field farmers.",
      },
    ],
    architectureFlow: ["ESP32 Sensors", "MQTT Protocol", "Node.js API", "React Dashboard"],
    stack: ["ESP32", "Sensors", "MQTT", "JavaScript", "Node.js"],
    github: "https://github.com/mikrajus/youthfarmkit",
    image: "assets/images/mockup-youthfarmkit.webp",
    imageAlt: "Screenshot of YouthFarmKit smart farming dashboard",
  },
  {
    name: "AA-PoDiTa",
    flag: "Featured",
    badge: "📱 Health-Tech & Offline-First",
    tabCategory: "mobile",
    category: "Mobile App · Health-Tech",
    desc: "Digitalized Posyandu operations in Blang Teue Village — early detection platform for stunting and malnutrition using automatic WHO / Ministry of Health Z-score calculations.",
    features: [
      {
        strong: "Offline-First Engine",
        text: "stable data entry in low-signal rural areas via SQLite, auto-syncing when online.",
      },
      {
        strong: "Role-Based Access Control",
        text: "separated privileges for field health officers and administrative supervisors.",
      },
    ],
    architectureFlow: ["Flutter App", "SQLite Storage", "WHO Z-Score Engine", "Cloud Postgres Sync"],
    stack: ["Flutter", "Node.js", "SQLite", "PostgreSQL"],
    image: "assets/images/mockup-aapodita.webp",
    imageAlt: "Screenshot of AA-PoDiTa child growth monitoring app",
  },
  {
    name: "Gigoe Detection",
    flag: "Featured",
    badge: "🧠 Computer Vision & AI",
    tabCategory: "mobile",
    category: "Computer Vision · Mobile App",
    desc: "Final-year thesis project detecting clinical dental caries in real time through the mobile camera using on-device deep learning.",
    features: [
      {
        strong: "On-Device Inference",
        text: "lightweight AI model running efficiently on memory-constrained mobile hardware.",
      },
      {
        strong: "Real-Time Detection",
        text: "low-latency bounding-box visualization overlay directly on live camera feed.",
      },
    ],
    architectureFlow: ["Camera Stream", "YOLOv8 Model", "TFLite Engine", "Clinical UI Overlay"],
    stack: ["Flutter", "Python", "YOLOv8", "PyTorch", "TFLite"],
    image: "assets/images/mockup-gigoedetection.webp",
    imageAlt: "Screenshot of Gigoe Detection dental caries app",
  },
  {
    name: "Laundry Management App",
    flag: null,
    badge: "⚡ Clean Architecture",
    tabCategory: "mobile",
    category: "Personal Project · Mobile App",
    desc: "Laundry status tracking, order management, and employee task delegation built using Flutter & Clean Architecture principles.",
    architectureFlow: ["Flutter UI", "Bloc State", "Clean Arch Domain", "Firestore DB"],
    stack: ["Flutter", "Firestore", "Firebase Auth", "Dart"],
    github: "https://github.com/mikrajus/laundry-app.git",
  },
  {
    name: "IoT Air Quality & Traffic Control",
    flag: null,
    badge: "🚦 Smart City IoT",
    tabCategory: "iot",
    category: "Academic Project · IoT",
    desc: "Real-time carbon monoxide (CO) gas monitoring at traffic light intersections with web telemetry and automated alert triggers.",
    architectureFlow: ["MQ-7 Gas Sensor", "ESP32 Board", "MQTT Pub/Sub", "Intersection Panel"],
    stack: ["ESP32", "MQ-7 Sensor", "MQTT", "C++"],
    github: "https://github.com/mikrajus/SmartTrafficPollution",
  },
];

export const experienceSeed: ExperienceEntity[] = [
  {
    period: "2025 – 2026",
    role: "Embedded System Laboratory Teaching Assistant",
    org: "Universitas Syiah Kuala",
    desc: "Guided 50+ students in designing, assembling, and evaluating embedded system projects from circuit design to microcontroller programming and final testing.",
    tags: ["Arduino", "ESP32", "Proteus", "Sensors & Actuators"],
    icon: "cpu",
  },
  {
    period: "2025",
    role: "Software Engineering Laboratory Teaching Assistant",
    org: "Universitas Syiah Kuala",
    desc: "Guided student teams through full SDLC lifecycle — requirements analysis, UML architectural design, clean code practices, and Git/GitHub version control.",
    tags: ["Clean Code", "OOP", "SDLC", "GitHub"],
    icon: "code",
  },
  {
    period: "2025",
    role: "IT Support Staff Intern",
    org: "KPP Pratama Banda Aceh",
    desc: "Managed government agency internal network infrastructure, hardware maintenance, and daily enterprise software troubleshooting.",
    tags: ["Networking", "Hardware", "Troubleshooting", "Linux"],
    icon: "server",
  },
];

export const activitiesSeed: ActivityEntity[] = [
  {
    period: "2025 – 2026",
    title: "Head of Secretariat Division",
    org: "HIMATEKKOM USK",
    desc: "Managed administrative correspondence system and coordinated student organization internal archives and official documentation.",
  },
  {
    period: "2024 – 2025",
    title: "Public Relations Division Member",
    org: "HIMATEKKOM USK",
    desc: "Built external institutional partnerships and organized 'Computer Visit Company' program to BMKG Aceh Besar.",
  },
  {
    period: "2025 – 2026",
    title: "Internet of Things (IoT) Mentor",
    org: "Seulanga Team",
    desc: "Compiled hands-on IoT modules, conducted interactive workshops, and mentored junior members across microcontrollers and sensor networks.",
  },
];

export const educationSeed: EducationEntity[] = [
  {
    school: "Universitas Syiah Kuala",
    program: "S1 Computer Engineering (Teknik Komputer / S.T.)",
    meta: "2022 – 2026 · GPA 3.52 / 4.00 (Graduated)",
    note: "Focus Areas: Embedded Systems, Internet of Things (IoT), Computer Vision & Intelligent Mobile Apps.",
  },
  {
    school: "SMAN 1 Darul Imarah, Aceh Besar",
    program: "Natural Sciences (IPA)",
    meta: "2019 – 2022",
    note: null,
  },
];

export const certificationsSeed: CertificationGroupEntity[] = [
  {
    org: "Dicoding Indonesia",
    items: [
      { name: "Learning to Build Flutter Apps for Beginners", date: "Sep 2026", tag: "Flutter" },
      { name: "Learning Deep Learning Fundamentals", date: "Jun 2026", tag: "AI / ML" },
      { name: "Basics of Mobile App Development", date: "Jun 2026", tag: "Mobile" },
      { name: "Getting Started with Dart Programming", date: "Aug 2025", tag: "Dart" },
      { name: "Python & C Programming", date: "2024", tag: "Programming" },
    ],
  },
  {
    org: "IBM",
    items: [
      { name: "Code Generation & Optimization Using IBM Granite", date: "Oct 2025", tag: "AI / LLM" },
    ],
  },
  {
    org: "Cisco",
    items: [{ name: "Introduction to IoT", date: "Jan 2025", tag: "IoT" }],
  },
  {
    org: "Progate",
    items: [
      { name: "SQL Fundamentals", date: "Dec 2022", tag: "Database" },
      { name: "Introduction to Programming with Python", date: "Dec 2022", tag: "Python" },
    ],
  },
];
