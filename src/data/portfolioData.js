
import inventoImg from '../assets/image/invento.png';
import peminjamanImg from '../assets/image/peminjaman-ruangan.png';
import medtraceImg from '../assets/image/medtrace-register-page.png';
import nusantaraImg from '../assets/image/nusantara-dalam-angka.png';

export const personalData = {
  name: "Hafidz Kurnia Darojad",
  tagline: "",
  role: "Full Stack Developer · Backend Engineer · Mobile Developer",
  creed: "We work in the dark to build resilient digital systems in the light.",

  // Hero positioning
  heroSubheadline: "Saya Hafidz Kurnia Darojad — Full Stack Developer yang berfokus pada arsitektur backend, perancangan RESTful API, manajemen database terstruktur, serta pengembangan aplikasi mobile dan web.",

  // Origins // Dossier details
  bio: "Seorang Full Stack Developer yang berfokus pada perancangan arsitektur backend, keamanan sistem, dan pengalaman pengguna yang responsif. Memadukan ketelitian logika server (ASP.NET Core, PostgreSQL, Docker) dengan kelincahan pengembangan antarmuka lintas platform (React, TypeScript, Flutter).\n\nBagi saya, setiap baris kode bukan sekadar sintaks, melainkan kontrak kinerja: harus terstruktur, teruji keandalannya, dan siap menghadapi skala komputasi di dunia nyata.",

  baseSector: "Indonesia (Surabaya)",
  affiliation: "D4 Informatics Engineering — PENS",
  availability: "Ready for Opportunities & Contracts",
  primaryRole: "Full Stack Developer",
  specialization: "Backend Engineering & Software Architecture",

  email: "hafidzdarojad28@gmail.com",
  github: "https://github.com/HafidzBro",
  linkedin: "https://linkedin.com/in/hafidzbro",

  // Character Attribute Matrix (Database & DevOps placed at the bottom)
  stats: [
    {
      label: "Backend & API Architecture",
      value: 94,
      desc: "ASP.NET Core (.NET 10), Entity Framework Core, JWT RBAC, REST APIs"
    },
    {
      label: "Frontend & Cross-Platform UI",
      value: 80,
      desc: "React, TypeScript, Flutter & Dart, Tailwind CSS"
    },
    {
      label: "Database Management",
      value: 78,
      desc: "PostgreSQL, SQL Server, Oracle DB, Schema & Index Optimization"
    },
    {
      label: "DevOps & Infrastructure",
      value: 65,
      desc: "Docker, NGINX Reverse Proxy, Proxmox VE, Tailscale, CI/CD"
    },
  ]
};

// 02. Arsenal // Technical Skills (Proficiency levels, k6, Linux/shell & Framer Motion removed)
export const arsenalSkills = [
  {
    category: "Primary Weapons (Frontend & Mobile)",
    description: "Antarmuka web responsif dan aplikasi mobile lintas platform.",
    skills: [
      { name: "React.js", icon: "Code2" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "TypeScript", icon: "FileCode2" },
      { name: "Flutter & Dart", icon: "Smartphone" },
      { name: "JavaScript (ES6+)", icon: "Zap" },
      { name: "Kotlin (Android)", icon: "Cpu" },
    ],
  },
  {
    category: "Heavy Artillery (Backend & Core Systems)",
    description: "Logika server berkecepatan tinggi, REST API, dan integrasi enterprise.",
    skills: [
      { name: "ASP.NET Core (.NET 10)", icon: "Server" },
      { name: "C#", icon: "Code2" },
      { name: "REST APIs", icon: "Share2" },
      { name: "Entity Framework Core", icon: "Layers" },
      { name: "Python", icon: "Terminal" },
      { name: "Java (OOP)", icon: "Code2" },
    ],
  },
  {
    category: "Database & Data Management",
    description: "Pengelolaan relasi data, optimasi query, dan keandalan penyimpanan.",
    skills: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "SQL Server", icon: "Database" },
      { name: "Oracle DB", icon: "Database" },
      { name: "Supabase", icon: "Layers" },
    ],
  },
  {
    category: "Tactical Gear (DevOps & Infrastructure)",
    description: "Kontainerisasi, reverse proxy, dan alur kerja pengembangan.",
    skills: [
      { name: "Git & GitHub", icon: "GitBranch" },
      { name: "Docker & Compose", icon: "Container" },
      { name: "NGINX Reverse Proxy", icon: "Globe" },
      { name: "Postman / Swagger", icon: "Send" },
      { name: "Proxmox VE", icon: "Server" },
      { name: "Figma", icon: "Layout" },
    ],
  },
];

// 03. Contracts // Missions Log (AI removed, MedTrace included)
export const contractsProjects = [
  {
    id: "invento-warehouse",
    title: "Invento — Enterprise Warehouse & Inventory System",
    category: "Full-Stack & Mobile",
    badge: "FEATURED CONTRACT",
    description: "Sistem manajemen inventaris dan gudang terpadu yang mencakup backend API berkecepatan tinggi dan aplikasi mobile. Mendukung transaksi batch via pemindaian barcode, otorisasi berbasis role (Admin, Manager, Warehouse Staff), serta alur persetujuan dokumen bertingkat.",
    tech: ["ASP.NET Core 10", "Flutter", "PostgreSQL", "EF Core", "JWT RBAC", "Docker"],
    eagleVisionInsight: "Transaksi batch barcode dan alur approval divalidasi dengan database concurrency control untuk integritas mutasi stok.",
    image: inventoImg,
    liveUrl: "https://play.google.com/store/apps/details?id=com.invento.invento_mobile_app",
    githubUrl: "https://github.com/HafidzBro",

    caseStudy: {
      problemStatement: "Pengelolaan stok manual pada gudang skala menengah rawan terjadi selisih pencatatan (discrepancy), keterlambatan verifikasi dokumen mutasi barang, serta kendala validasi fisik saat proses opname.",
      roleAndResponsibilities: "Lead Full Stack & Backend Architect: Merancang arsitektur API dengan ASP.NET Core 10, skema database PostgreSQL, alur autentikasi JWT Role-Based Access Control, serta integrasi pemindaian barcode pada aplikasi mobile Flutter.",
      technicalArchitecture: "Clean Architecture dengan pemisahan Core/Domain, Application, Infrastructure, dan API Layer. Menggunakan Entity Framework Core untuk akses data dan Docker Compose untuk kontainerisasi layanan.",
      keyFeatures: [
        "Batch Transaction & Barcode Scanner terintegrasi via kamera mobile",
        "Multi-Tier Approval System (Staff → Warehouse Manager → Finance)",
        "Role-Based Access Control (Admin, Manager, Warehouse Staff)",
        "Audit Trail Logging setiap mutasi barang masuk & keluar",
        "Optimasi query database untuk pencarian katalog barang instan"
      ],
      challengesAndSolutions: "Tantangan: Mencegah race condition saat pembaruan stok bersamaan (concurrent checkout/transfer). Solusi: Mengimplementasikan database transaction locks dan concurrency token pada Entity Framework Core."
    }
  },
  {
    id: "campus-room-booking",
    title: "Peminjaman Ruangan — Campus Room Booking Platform",
    category: "Full-Stack & Mobile",
    badge: "PRODUCTION GRADE",
    description: "Aplikasi web full-stack untuk digitalisasi reservasi dan penjadwalan ruangan kampus. Dilengkapi sistem autentikasi terenkripsi, validasi bentrok jadwal otomatis, manajemen hak akses (Admin & Mahasiswa), serta integrasi REST API yang responsif.",
    tech: ["ASP.NET Core Web API", "React", "TypeScript", "SQL Server", "JWT", "Tailwind CSS"],
    eagleVisionInsight: "Algoritma verifikasi overlap jadwal otomatis mengeliminasi double-booking secara real-time pada level database query.",
    image: peminjamanImg,
    liveUrl: "",
    githubUrl: "https://github.com/HafidzBro/2026-peminjaman_ruangan-frontend",

    caseStudy: {
      problemStatement: "Proses peminjaman ruangan kampus yang masih berbasis formulir fisik sering memicu bentrok jadwal, keterlambatan persetujuan bagian sarana prasarana, dan ketidakteraturan pelaporan pemakaian fasilitas.",
      roleAndResponsibilities: "Full Stack Engineer: Membangun Web API backend dengan ASP.NET Core, merancang database relasional SQL Server, serta membangun antarmuka web interaktif menggunakan React dan TypeScript.",
      technicalArchitecture: "RESTful Web API berbasis .NET berpasangan dengan React SPA. Menyediakan validasi token JWT stateless, DTO data encapsulation, serta state management client-side yang bersih.",
      keyFeatures: [
        "Automated Schedule Clash Detection Engine",
        "Dual-Portal Interface (Mahasiswa Booking vs Admin Verifikator)",
        "Pemberitahuan status persetujuan peminjaman seketika",
        "Laporan rekap utilisasi ruangan berfilter tanggal"
      ],
      challengesAndSolutions: "Tantangan: Memastikan query pengecekan rentang waktu (time-range overlap) tidak memperlambat respon server. Solusi: Menggunakan spatial calendar indexing dan query SQL berbasis parameter interval waktu terindeks."
    }
  },
  {
    id: "medtrace-tb",
    title: "MedTrace — Tuberculosis Monitoring Platform",
    category: "Healthcare & Systems",
    badge: "HEALTHCARE TECH",
    description: "Platform pemantauan pengobatan TBC terpadu dengan fitur monitoring kepatuhan konsumsi obat pasien, pengingat jadwal pengobatan otomatis, riwayat rekam medis, dan saluran komunikasi langsung antara pasien dan dokter.",
    tech: ["Supabase", "PostgreSQL", "React", "TypeScript", "System Design"],
    eagleVisionInsight: "Arsitektur data terisolasi dengan Row Level Security (RLS) menjamin privasi riwayat medis pasien sesuai standar kepatuhan data kesehatan.",
    image: medtraceImg,
    liveUrl: "",
    githubUrl: "https://github.com/HafidzBro/MedTrace",

    caseStudy: {
      problemStatement: "Pengobatan Tuberkulosis (TBC) membutuhkan waktu 6-9 bulan tanpa putus. Tingginya angka drop-out pasien disebabkan oleh ketiadaan sistem pemantauan minum obat harian dan minimnya komunikasi proaktif antara tenaga kesehatan dan pasien.",
      roleAndResponsibilities: "System Architect & Frontend Specialist: Merancang skema arsitektur data kesehatan, alur notifikasi kepatuhan minum obat, integrasi database Supabase (PostgreSQL & Realtime Auth), serta antarmuka monitoring dokter.",
      technicalArchitecture: "Modular React SPA dengan Supabase Backend-as-a-Service, Row Level Security (RLS) untuk keamanan akses data rekam medis, serta scheduler pengingat jadwal minum obat otomatis.",
      keyFeatures: [
        "Daily Medication Adherence Tracker dengan konfirmasi visual",
        "Automated Health Reminder & Notification Engine",
        "Doctor-Patient Direct Consultation & Communication Portal",
        "Rekam Medis Digital & Grafik Tren Pemulihan Pasien",
        "Data Encryption & Role-Based Access Control"
      ],
      challengesAndSolutions: "Tantangan: Menjamin privasi data rekam medis pasien agar tidak bisa diakses sembarang pihak. Solusi: Menerapkan PostgreSQL Row Level Security (RLS) terikat Session ID dan otorisasi dokter yang menangani."
    }
  },
  {
    id: "web-app-sig",
    title: "Nusantara dalam Angka — GIS Platform Provinsi Indonesia",
    category: "Web & GIS Systems",
    badge: "GEOSPATIAL WEB",
    description: "Platform visualisasi data Sistem Informasi Geografis (SIG / GIS) berbasis web interaktif untuk menampilkan, memfilter, dan menganalisis data spasial serta statistik provinsi di seluruh Indonesia.",
    tech: ["React 19", "Leaflet", "React-Leaflet", "GeoJSON", "Tailwind CSS", "Vite"],
    eagleVisionInsight: "Rendering poligon kepulauan Indonesia berbasis GeoJSON dengan multi-tile provider (CartoDB, OpenStreetMap, ESRI) dan parsing CSV dinamis.",
    image: nusantaraImg,
    liveUrl: "https://web-app-4eyoox19t-hafidzbro.vercel.app/",
    githubUrl: "https://github.com/HafidzBro/web-app-sig",

    caseStudy: {
      problemStatement: "Kebutuhan visualisasi statistik dan data spasial provinsi di Indonesia secara terpadu, interaktif, dan mudah diakses tanpa memerlukan instalasi software GIS desktop yang berat.",
      roleAndResponsibilities: "Frontend & Geospatial Web Developer: Membangun arsitektur web peta interaktif, integrasi data GeoJSON batas wilayah kepulauan Indonesia, sistem parsing CSV dinamis, serta styling tematik choropleth.",
      technicalArchitecture: "Single Page Application berbasis React 19 dan React Router DOM v7, didukung engine pemetaan Leaflet dan parser data PapaParse untuk dataset statistik.",
      keyFeatures: [
        "Peta tematik interaktif provinsi Indonesia berbasis polygon GeoJSON",
        "Multi-provider Tile Layer Switcher (CartoDB Positron, OpenStreetMap, ESRI Satellite)",
        "Tooltip dan popup metrik data statistik provinsi real-time",
        "Dynamic CSV parsing untuk pembaruan indikator data wilayah",
        "Responsive geospatial UI untuk desktop dan tablet"
      ],
      challengesAndSolutions: "Tantangan: Menjaga performa rendering puluhan poligon kepulauan Indonesia agar transisi peta tetap halus (60 FPS). Solusi: Menggunakan toleransi simplifikasi koordinat GeoJSON dan event debounce pada interaksi layer kursor."
    }
  }
];

// 04. Codex // Operative Journey
export const codexTimeline = [
  {
    period: "2026 — Present",
    title: "Mobile & Backend Developer",
    organization: "PBL & Independent Engineering Projects",
    description: "Merancang arsitektur sistem inventaris gudang enterprise (Invento) berbasis ASP.NET Core dan Flutter, serta mengelola deployment infrastruktur berbasis Docker dan NGINX."
  },
  {
    period: "2025 — 2026",
    title: "Geospatial & Frontend Web Engineer",
    organization: "Independent & Academic Engineering Projects",
    description: "Mengembangkan platform Sistem Informasi Geografis (Nusantara dalam Angka) berbasis React 19, Leaflet, dan GeoJSON, merancang visualisasi peta choropleth statistik provinsi Indonesia."
  },
  {
    period: "2025 — 2026",
    title: "Full Stack Developer // Web & Database Specialist",
    organization: "D4 Informatics Engineering — PENS",
    description: "Membangun aplikasi web reservasi ruangan kampus berbasis .NET Core dan React TypeScript, merancang aplikasi akademik berorientasi objek di Java, serta mengelola administrasi enterprise database pada PostgreSQL."
  }
];
