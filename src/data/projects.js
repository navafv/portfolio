export const projects = [
  {
    title: "SMT Fruit Shop Management System",
    description:
      "A production-grade POS and inventory ERP built as a Progressive Web App (PWA). Features a rapid checkout interface, loss reporting, data export center, and comprehensive Nginx/Gunicorn deployment pipelines.",
    tech: ["React PWA", "Django REST", "Tailwind", "Render/Vercel"],
    colSpan: "col-span-1",
    image: "bg-gradient-to-br from-purple-900/40 to-indigo-900/40",
    status: { label: "Completed", color: "bg-green-500" },
    links: {
      demo: "https://smtapp.vercel.app/",
      github: "https://github.com/navafv/smt_project",
    },
  },
  {
    title: "Noor Stitching Institute",
    description:
      "A comprehensive institute management platform featuring a React PWA, a Flutter mobile app, and a highly modular Django REST backend. Includes specialized tailoring measurement tracking, complete financial ERP, and automated PDF certificate generation.",
    tech: ["React", "Flutter", "Django REST", "PostgreSQL"],
    colSpan: "col-span-1 md:col-span-2",
    image: "bg-gradient-to-br from-pink-900/40 to-rose-900/40",
    status: { label: "Completed", color: "bg-green-500" },
    links: {
      demo: "https://noorinstitute.vercel.app/",
      github: "",
    },
  },
  {
    title: "ETS2 Mods Platform",
    description:
      "A full-stack gaming community hub for Euro Truck Simulator 2. Features complex mod filtering, a user rating/review engine, and an admin dashboard for content moderation.",
    tech: ["React", "Django REST", "React Query", "PostgreSQL"],
    colSpan: "col-span-1 md:col-span-2",
    image: "bg-gradient-to-br from-teal-900/40 to-emerald-900/40",
    status: { label: "Completed", color: "bg-green-500" },
    links: {
      demo: "https://ets2mods.vercel.app/",
      github: "https://github.com/navafv/ets2mods",
    },
  },
  {
    title: "Multiplayer Uno Game",
    description:
      "A real-time multiplayer web game featuring private matchmaking rooms, live WebSockets gameplay, and a complete Uno rules engine with action cards and catch mechanics.",
    tech: ["React", "Django Channels", "Tailwind"],
    colSpan: "col-span-1",
    image: "bg-gradient-to-br from-blue-900/40 to-cyan-900/40",
    status: { label: "Completed", color: "bg-green-500" },
    links: {
      demo: "https://playunogame.vercel.app/",
      github: "https://github.com/navafv/uno_game",
    },
  },
];
