// src/data/portfolioData.js
// ── Edit all your content here ──

export const META = {
  name: "Imoh Wisdom",
  alias: "davaboi",
  role: "Frontend Developer",
  location: "Available Worldwide — Remote",
  email: "Imohwisdom07@gmail.com",
  status: "Open to Work",
  preference: "Remote / Hybrid",
  github: "https://github.com/imohwisdom07-del",
  linkedin: "https://linkedin.com/in/wisdom-imoh-362b42381/",
  vestige: "https://vestige-edit.vercel.app",
  emax: "https://e-max-trade-p3nd.vercel.app",
};

export const STATS = [
  { value: "1+", label: "Years Active" },
  { value: "2",  label: "Projects Shipped" },
  { value: "∞",  label: "Lines Committed" },
];

export const PROJECTS = [
  {
    id: "001",
    name: "VESTIGE",
    sub: "Luxury E-Commerce",
    tags: ["React · Vite", "E-Commerce"],
    featured: true,
    year: "2026",
    art: "vestige",
    link: "https://vestige-edit.vercel.app",
  },
  {
    id: "002",
    name: "E-MAX TRADE",
    sub: "Crypto Platform",
    tags: ["React · Vite", "Fintech"],
    featured: true,
    year: "2026",
    art: "p2",
    link: "https://e-max-trade-p3nd.vercel.app",
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
      { name: "React",          level: "Advanced" },
      { name: "JavaScript",     level: "Advanced" },
      { name: "CSS",            level: "Advanced" },
      { name: "HTML5",          level: "Advanced" },
      { name: "Vite",           level: "Proficient" },
      { name: "React Router",   level: "Proficient" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git / GitHub", level: "Proficient" },
      { name: "Vercel",       level: "Proficient" },
      { name: "VS Code",      level: "Advanced" },
      { name: "Figma",        level: "Beginner" },
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