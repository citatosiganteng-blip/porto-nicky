export type ProjectLink = {
  github?: string;
  live?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Web App" | "Mobile App" | "Tool" | "API" | "Other";
  status: "Live" | "In Progress" | "Archived";
  tags: string[];
  features: string[];
  links: ProjectLink;
  year: number;
  featured: boolean;
  accentColor: string;
};

const projects: Project[] = [
  {
    slug: "sistem-absensi-qr-code",
    title: "Sistem Absensi QR Code × WhatsApp Gateway",
    description:
      "Smart attendance system with unique QR codes per session and real-time WhatsApp notifications for students.",
    longDescription:
      "A comprehensive attendance management system built for university use. Each class session generates a unique, time-limited QR code that students scan to mark their presence. The system integrates directly with a WhatsApp Gateway API to send instant confirmation messages to students after a successful check-in. Admins get a real-time dashboard with attendance records, exportable reports, and session management tools.",
    category: "Web App",
    status: "Live",
    tags: ["Laravel", "PHP", "WhatsApp API", "QR Code", "MySQL", "Bootstrap"],
    features: [
      "QR Code Generation & Scanning",
      "WhatsApp Gateway Integration",
      "Real-time Attendance Dashboard",
      "Mobile-responsive UI",
      "CSV/Excel Export",
      "Session Management",
    ],
    links: {
      github: "https://github.com/nickyilham",
    },
    year: 2024,
    featured: true,
    accentColor: "#10b981",
  },
  {
    slug: "blog-platform",
    title: "Personal Blog Platform",
    description:
      "A modern, fast personal blog built with Next.js and MDX for writing technical articles and dev notes.",
    longDescription:
      "This very portfolio and blog site! Built from scratch with Next.js App Router for maximum performance. Articles are written in MDX format, making it easy to embed interactive components within posts. Features a clean reading experience, dark/light mode, and full static site generation for blazing-fast load times.",
    category: "Web App",
    status: "Live",
    tags: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Framer Motion"],
    features: [
      "MDX-based content management",
      "Dark / Light mode",
      "Full static site generation",
      "SEO optimized",
      "Responsive design",
    ],
    links: {
      github: "https://github.com/nickyilham",
      live: "/",
    },
    year: 2025,
    featured: false,
    accentColor: "#6366f1",
  },
  {
    slug: "task-manager-app",
    title: "Task Manager App",
    description:
      "A clean and minimalist task manager with drag-and-drop Kanban board, tags, and deadline tracking.",
    longDescription:
      "A productivity-focused task management application featuring a Kanban-style board with drag-and-drop support. Users can organize tasks into custom columns (e.g. Backlog, In Progress, Done), assign tags, set deadlines with visual urgency indicators, and filter by tag or status. Data is persisted in localStorage for a zero-backend experience.",
    category: "Web App",
    status: "Archived",
    tags: ["React", "TypeScript", "Tailwind CSS", "DnD Kit", "LocalStorage"],
    features: [
      "Drag-and-drop Kanban board",
      "Tag & deadline management",
      "Filter by status or tag",
      "LocalStorage persistence",
      "Keyboard accessible",
    ],
    links: {
      github: "https://github.com/nickyilham",
    },
    year: 2023,
    featured: false,
    accentColor: "#f59e0b",
  },
  {
    slug: "api-gateway-service",
    title: "REST API Gateway Service",
    description:
      "Lightweight Laravel API gateway with JWT authentication, rate limiting, and role-based access control.",
    longDescription:
      "A reusable backend API foundation built with Laravel. Designed to be the starting skeleton for new projects, this gateway implements JWT-based authentication, request rate limiting per user, and a flexible role-permission system (RBAC). It ships with Swagger/OpenAPI documentation auto-generated from route annotations, making it easy for frontend teams to consume.",
    category: "API",
    status: "In Progress",
    tags: ["Laravel", "PHP", "JWT", "MySQL", "Swagger", "RBAC"],
    features: [
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Request rate limiting",
      "Swagger/OpenAPI docs",
      "Modular architecture",
    ],
    links: {
      github: "https://github.com/nickyilham",
    },
    year: 2025,
    featured: false,
    accentColor: "#3b82f6",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    description:
      "Full-stack inventory system with barcode scanning, stock alerts, and supplier management for SMEs.",
    longDescription:
      "An inventory management web application tailored for small to medium enterprises (SMEs). Features include barcode-based product scanning for quick stock updates, low-stock threshold alerts sent via email, purchase order creation with supplier management, and comprehensive reporting with charts for stock movement analysis.",
    category: "Web App",
    status: "Live",
    tags: ["Laravel", "Vue.js", "MySQL", "Barcode.js", "Chart.js", "Bootstrap"],
    features: [
      "Barcode scanning",
      "Low-stock email alerts",
      "Supplier & PO management",
      "Stock movement reports",
      "Multi-user roles",
    ],
    links: {
      github: "https://github.com/nickyilham",
    },
    year: 2024,
    featured: false,
    accentColor: "#ec4899",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getProjectCategories(): string[] {
  const cats = Array.from(new Set(projects.map((p) => p.category)));
  return ["All", ...cats];
}
