// src/data/portfolioData.js
// ── Edit all your content here ──

export const META = {
  name: "Imoh Wisdom",
  alias: "davaboi",
  role: "Fullstack Developer",
  location: "Available Worldwide — Remote",
  email: "Imohwisdom07@email.com",
  status: "Open to Work",
  preference: "Remote / Hybrid",
  github: "https://github.com/imohwisdom07-del",
  linkedin: "https://linkedin.com",
  vestige: "https://vestige-edit.vercel.app",
};

export const STATS = [
  { value: "3+", label: "Years Active" },
  { value: "12", label: "Projects Shipped" },
  { value: "∞",  label: "Lines Committed" },
];

export const PROJECTS = [
  {
    id: "001",
    name: "VESTIGE",
    sub: "E-Commerce",
    tags: ["React · Vite", "E-Commerce"],
    featured: true,
    year: "2026",
    art: "vestige",
    link: "https://vestige-edit.vercel.app",
  },
  {
    id: "002",
    name: "PROJECT",
    sub: "Two.",
    tags: ["Node.js", "PostgreSQL"],
    featured: false,
    year: "2025",
    art: "p2",
    link: "#",
  },
  {
    id: "003",
    name: "PROJECT",
    sub: "Three.",
    tags: ["Firebase", "Realtime"],
    featured: false,
    year: "2025",
    art: "p3",
    link: "#",
  },
  {
    id: "004",
    name: "PROJECT",
    sub: "Four.",
    tags: ["Python", "Automation"],
    featured: false,
    year: "2024",
    art: "p4",
    link: "#",
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React",          level: "Expert" },
      { name: "JavaScript",     level: "Expert" },
      { name: "TypeScript",     level: "Advanced" },
      { name: "CSS / Tailwind", level: "Expert" },
      { name: "Vite",           level: "Advanced" },
      { name: "HTML5",          level: "Expert" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",    level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Firebase",   level: "Advanced" },
      { name: "REST APIs",  level: "Expert" },
      { name: "Express",    level: "Advanced" },
      { name: "Supabase",   level: "Proficient" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "Vercel",       level: "Advanced" },
      { name: "Figma",        level: "Proficient" },
      { name: "Postman",      level: "Advanced" },
      { name: "VS Code",      level: "Expert" },
    ],
  },
];

export const CODE_SNIPPETS = [
  'const addToManifest = (item) => {',
  '  setManifest(prev => [...prev, item])',
  'useEffect(() => { fetchData() }, [])',
  'export default function App() {',
  'import React, { useState } from "react"',
  'router.get("/api/products", async (req,res) => {',
  'SELECT * FROM products WHERE category = $1',
  'const [state, setState] = useState(null)',
  'git commit -m "feat: ship to production"',
  'npm run build && vercel --prod',
  'border-radius: 50%; animation: spin 9s',
  'res.status(200).json({ success: true })',
];
