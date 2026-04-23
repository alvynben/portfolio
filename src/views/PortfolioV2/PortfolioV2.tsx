"use client";

import { useEffect, useMemo, useState } from "react";

type WorkVariant = "list" | "cards";
type ThemeMode = "light" | "dark";

interface BlogPostCard {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTimeText: string;
}

interface PortfolioV2Props {
  posts: BlogPostCard[];
}

type PatternKind = "tiktok-shop" | "compliance-chart" | "seedling-map" | "fridge" | "lightbulb" | "target";

interface WorkProject {
  n: string;
  title: string;
  year: string;
  desc: string;
  tags: string[];
  role: string;
  swatch: string;
  pattern: PatternKind;
}

const PROJECTS: WorkProject[] = [
  {
    n: "01",
    title: "TikTok Shop Homepage",
    year: "2024—now",
    desc: "Technical owner of Popup Infrastructure serving 2B+ MAU across SEA e-commerce surfaces. Architected a no-code Golang BFF engine that enables new popup releases without any FE code changes. Improved render latency and API prefetching by 30–50% on low-end devices.",
    tags: ["React", "TypeScript", "Golang"],
    role: "Software Engineer",
    swatch: "oklch(60% 0.18 38)",
    pattern: "tiktok-shop",
  },
  {
    n: "02",
    title: "Unit21 Compliance Tools",
    year: "2023",
    desc: "Built SOC2-compliant frontend (React, TS) and backend (Flask, Kafka) for financial compliance tools processing >1B transactions per call. Integrated LLM functionality enabling customers to detect patterns and generate graphs from their compliance data.",
    tags: ["React", "TypeScript", "Python"],
    role: "SWE Intern · San Francisco",
    swatch: "oklch(55% 0.14 220)",
    pattern: "compliance-chart",
  },
  {
    n: "03",
    title: "Interseed Co.",
    year: "2021—22",
    desc: "Built a NodeJS/MongoDB REST API to group 200+ users by location for a live dynamic map. Drove mobile users from 20% to 74% by shipping full mobile responsiveness for the social networking app.",
    tags: ["React", "TypeScript", "Node"],
    role: "Full Stack Developer",
    swatch: "oklch(62% 0.14 145)",
    pattern: "seedling-map",
  },
  {
    n: "04",
    title: "Fridget — Telegram Bot",
    year: "2021",
    desc: "Telegram bot (@fridgetbot) that tracks fridge inventory and sends expiry reminders to cut food waste. Python-backed, SQL-persisted, Heroku-hosted. Built solo end-to-end in under 5 weeks.",
    tags: ["Python", "Telegram", "SQL"],
    role: "Solo Build",
    swatch: "oklch(60% 0.16 300)",
    pattern: "fridge",
  },
  {
    n: "05",
    title: "IDEATE 2021",
    year: "2021",
    desc: "Self-initiated, nationwide inter-university ideathon with 200+ participants, sponsored by James Dyson Foundation, Silicon Laboratories, and nSearch Global. Secured a $6,000 prize pool from scratch. Handled marketing, operations, and event execution.",
    tags: ["Events", "Marketing", "Leadership"],
    role: "Organiser",
    swatch: "oklch(70% 0.08 80)",
    pattern: "lightbulb",
  },
  {
    n: "06",
    title: "NUS RoboMasters — CV",
    year: "2020—21",
    desc: "Led the computer vision team: deployed YOLOv5 on PyTorch and YOLOv4 on TensorRT with ROS 2 for real-time target detection at <20ms latency. Integrated CSI camera on a Jetson Xavier NX and resolved pre-existing robot hardware issues.",
    tags: ["Python", "PyTorch", "ROS"],
    role: "Software VP",
    swatch: "oklch(55% 0.14 30)",
    pattern: "target",
  },
];

function Pattern({ kind, color }: { kind: PatternKind; color: string }) {
  const Backdrop = ({ children, gradient }: { children?: React.ReactNode; gradient?: string }) => (
    <div style={{
      position: "absolute", inset: 0,
      background: gradient || `linear-gradient(135deg, ${color} 0%, color-mix(in oklab, ${color} 60%, var(--bg-elev)) 100%)`,
      overflow: "hidden",
    }}>{children}</div>
  );

  if (kind === "tiktok-shop") {
    return (
      <Backdrop gradient={`linear-gradient(160deg, oklch(30% 0.12 340) 0%, ${color} 55%, oklch(65% 0.2 30) 100%)`}>
        <svg viewBox="0 0 280 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid meet">
          <rect x="100" y="22" width="80" height="160" rx="12" fill="oklch(18% 0.01 60)" stroke="oklch(95% 0 0 / 0.4)" strokeWidth="1"/>
          <rect x="106" y="30" width="68" height="144" rx="6" fill="oklch(22% 0.02 60)"/>
          <rect x="130" y="28" width="20" height="3" rx="1.5" fill="oklch(10% 0 0)"/>
          <rect x="110" y="42" width="60" height="88" rx="4" fill="oklch(98% 0.008 80 / 0.15)"/>
          <circle cx="140" cy="86" r="10" fill="oklch(98% 0.008 80 / 0.9)"/>
          <path d="M137 82 L145 86 L137 90 Z" fill="oklch(22% 0.02 60)"/>
          <rect x="114" y="108" width="52" height="14" rx="7" fill="oklch(65% 0.22 28)"/>
          <text x="140" y="118" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="7" fill="white" fontWeight="700" letterSpacing="0.5">SHOP · $24</text>
          <rect x="110" y="136" width="40" height="3" rx="1.5" fill="oklch(98% 0 0 / 0.6)"/>
          <rect x="110" y="142" width="28" height="2" rx="1" fill="oklch(98% 0 0 / 0.35)"/>
          <rect x="110" y="146" width="50" height="2" rx="1" fill="oklch(98% 0 0 / 0.35)"/>
          <circle cx="120" cy="166" r="2" fill="oklch(98% 0 0 / 0.8)"/>
          <circle cx="140" cy="166" r="2" fill="oklch(98% 0 0 / 0.35)"/>
          <circle cx="160" cy="166" r="2" fill="oklch(98% 0 0 / 0.35)"/>
          <text x="18" y="50" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(98% 0 0 / 0.7)" letterSpacing="1.5">GMV +8%</text>
          <line x1="18" y1="56" x2="80" y2="56" stroke="oklch(98% 0 0 / 0.3)" strokeWidth="0.5"/>
          <text x="18" y="70" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1.5">HOMEPAGE</text>
          <text x="200" y="160" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1.5">BFF · TS</text>
        </svg>
      </Backdrop>
    );
  }

  if (kind === "compliance-chart") {
    return (
      <Backdrop gradient={`linear-gradient(135deg, oklch(25% 0.06 220) 0%, ${color} 100%)`}>
        <svg viewBox="0 0 280 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid meet">
          {[0,1,2,3,4].map(i => <line key={`h${i}`} x1="30" y1={40 + i*28} x2="250" y2={40 + i*28} stroke="oklch(98% 0 0 / 0.08)" strokeWidth="0.5"/>)}
          {[0,1,2,3,4,5,6].map(i => <line key={`v${i}`} x1={40 + i*32} y1="40" x2={40 + i*32} y2="156" stroke="oklch(98% 0 0 / 0.08)" strokeWidth="0.5"/>)}
          <path d="M 40 130 L 72 120 L 104 100 L 136 85 L 168 70 L 200 55 L 232 42" stroke="oklch(95% 0.08 80)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 40 130 L 72 120 L 104 100 L 136 85 L 168 70 L 200 55 L 232 42 L 232 156 L 40 156 Z" fill="oklch(95% 0.08 80 / 0.15)"/>
          {([[40,130],[72,120],[104,100],[136,85],[168,70],[200,55],[232,42]] as [number,number][]).map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="oklch(95% 0.08 80)"/>
          ))}
          <circle cx="168" cy="70" r="7" fill="none" stroke="oklch(70% 0.2 28)" strokeWidth="1.2"/>
          <line x1="168" y1="63" x2="168" y2="30" stroke="oklch(70% 0.2 28)" strokeWidth="0.6" strokeDasharray="2 2"/>
          <rect x="142" y="16" width="52" height="14" rx="2" fill="oklch(70% 0.2 28)"/>
          <text x="168" y="26" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="7" fill="white" fontWeight="700" letterSpacing="0.5">FLAGGED</text>
          <text x="30" y="24" fontFamily="ui-monospace, monospace" fontSize="8" fill="oklch(98% 0 0 / 0.9)" letterSpacing="1.2" fontWeight="600">TRANSACTIONS</text>
          <text x="250" y="24" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="10" fill="oklch(95% 0.08 80)" fontWeight="700">1.2B</text>
          <text x="30" y="170" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1">M</text>
          <text x="72" y="170" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1">T</text>
          <text x="104" y="170" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1">W</text>
          <text x="136" y="170" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1">T</text>
          <text x="168" y="170" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(70% 0.2 28)" letterSpacing="1" fontWeight="700">F</text>
          <text x="200" y="170" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1">S</text>
          <text x="232" y="170" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.5)" letterSpacing="1">S</text>
          <rect x="30" y="180" width="38" height="14" rx="7" fill="oklch(98% 0 0 / 0.12)" stroke="oklch(98% 0 0 / 0.3)" strokeWidth="0.5"/>
          <text x="49" y="190" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(98% 0 0 / 0.9)" letterSpacing="1" fontWeight="700">SOC 2</text>
        </svg>
      </Backdrop>
    );
  }

  if (kind === "seedling-map") {
    return (
      <Backdrop gradient={`linear-gradient(140deg, oklch(82% 0.08 145) 0%, ${color} 60%, oklch(40% 0.1 145) 100%)`}>
        <svg viewBox="0 0 280 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid meet">
          <path d="M 40 60 Q 70 40 110 55 Q 140 70 170 55 Q 210 40 240 70 Q 245 100 220 115 Q 180 125 150 115 Q 110 105 80 125 Q 50 130 40 100 Z"
                fill="oklch(98% 0 0 / 0.12)" stroke="oklch(98% 0 0 / 0.35)" strokeWidth="1" strokeDasharray="3 2"/>
          <path d="M 60 140 Q 90 135 120 145 Q 150 155 180 148 Q 210 140 235 155 L 235 178 L 60 178 Z"
                fill="oklch(98% 0 0 / 0.08)" stroke="oklch(98% 0 0 / 0.25)" strokeWidth="1" strokeDasharray="3 2"/>
          {([[80, 75],[130, 60],[175, 85],[215, 95],[105, 105],[195, 140]] as [number,number][]).map(([x,y], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <circle r="10" fill="oklch(98% 0 0 / 0.95)"/>
              <path d="M 0 3 Q -4 0 -5 -3 Q -3 -4 0 -2 Q 3 -4 5 -3 Q 4 0 0 3 Z" fill="oklch(55% 0.16 145)"/>
              <line x1="0" y1="3" x2="0" y2="6" stroke="oklch(45% 0.1 60)" strokeWidth="1" strokeLinecap="round"/>
            </g>
          ))}
          <g stroke="oklch(98% 0 0 / 0.4)" strokeWidth="0.6" strokeDasharray="2 3" fill="none">
            <path d="M 80 75 Q 105 50 130 60"/>
            <path d="M 130 60 Q 155 65 175 85"/>
            <path d="M 175 85 Q 200 80 215 95"/>
            <path d="M 105 105 Q 150 120 195 140"/>
          </g>
          <text x="30" y="28" fontFamily="ui-monospace, monospace" fontSize="8" fill="oklch(98% 0 0 / 0.95)" letterSpacing="1.2" fontWeight="600">INTERSEED · LIVE MAP</text>
          <text x="30" y="192" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(98% 0 0 / 0.6)" letterSpacing="1">200+ MEMBERS · MOBILE 74%</text>
        </svg>
      </Backdrop>
    );
  }

  if (kind === "fridge") {
    return (
      <Backdrop gradient={`linear-gradient(140deg, oklch(40% 0.1 300) 0%, ${color} 70%, oklch(75% 0.14 280) 100%)`}>
        <svg viewBox="0 0 280 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid meet">
          <rect x="40" y="28" width="100" height="150" rx="6" fill="oklch(95% 0.005 80)" stroke="oklch(40% 0.02 60)" strokeWidth="1"/>
          <line x1="40" y1="82" x2="140" y2="82" stroke="oklch(40% 0.02 60 / 0.5)" strokeWidth="0.8"/>
          <rect x="130" y="42" width="3" height="30" rx="1.5" fill="oklch(40% 0.02 60)"/>
          <rect x="130" y="96" width="3" height="60" rx="1.5" fill="oklch(40% 0.02 60)"/>
          <g transform="translate(152 50)">
            <rect x="0" y="0" width="108" height="32" rx="12" fill="oklch(55% 0.14 230)"/>
            <path d="M 8 28 L 2 36 L 14 32 Z" fill="oklch(55% 0.14 230)"/>
            <text x="10" y="14" fontFamily="ui-monospace, monospace" fontSize="7" fill="white" letterSpacing="0.5">@fridgetbot</text>
            <text x="10" y="25" fontFamily="ui-monospace, monospace" fontSize="8" fill="white" fontWeight="700">Milk expires in 2d</text>
          </g>
          <g transform="translate(170 95)">
            <rect x="0" y="0" width="86" height="24" rx="10" fill="oklch(98% 0.005 80)"/>
            <path d="M 78 20 L 86 28 L 74 24 Z" fill="oklch(98% 0.005 80)"/>
            <text x="10" y="15" fontFamily="ui-monospace, monospace" fontSize="8" fill="oklch(22% 0.02 60)" fontWeight="600">/list</text>
          </g>
          <g transform="translate(156 132)">
            <rect x="0" y="0" width="108" height="28" rx="12" fill="oklch(55% 0.14 230)"/>
            <path d="M 8 24 L 2 32 L 14 28 Z" fill="oklch(55% 0.14 230)"/>
            <text x="10" y="13" fontFamily="ui-monospace, monospace" fontSize="7" fill="white" letterSpacing="0.5">🥬 · 🥛 · 🧀 · 🍎</text>
            <text x="10" y="23" fontFamily="ui-monospace, monospace" fontSize="6" fill="white" opacity="0.8">4 items tracked</text>
          </g>
        </svg>
      </Backdrop>
    );
  }

  if (kind === "lightbulb") {
    return (
      <Backdrop gradient={`linear-gradient(150deg, oklch(88% 0.1 80) 0%, ${color} 60%, oklch(55% 0.14 40) 100%)`}>
        <svg viewBox="0 0 280 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid meet">
          <g stroke="oklch(98% 0.04 80)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            {Array.from({length: 12}).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              const x1 = 140 + Math.cos(a) * 52;
              const y1 = 100 + Math.sin(a) * 52;
              const x2 = 140 + Math.cos(a) * 72;
              const y2 = 100 + Math.sin(a) * 72;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
            })}
          </g>
          <circle cx="140" cy="96" r="44" fill="oklch(98% 0.08 80 / 0.35)"/>
          <circle cx="140" cy="96" r="32" fill="oklch(98% 0.1 80 / 0.6)"/>
          <path d="M 140 60 Q 118 62 116 84 Q 115 98 124 108 Q 128 114 128 120 L 152 120 Q 152 114 156 108 Q 165 98 164 84 Q 162 62 140 60 Z"
                fill="oklch(96% 0.05 80)" stroke="oklch(40% 0.08 40)" strokeWidth="1.2"/>
          <path d="M 128 90 Q 135 82 140 90 Q 145 82 152 90" stroke="oklch(55% 0.2 40)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <rect x="128" y="120" width="24" height="4" fill="oklch(45% 0.04 60)"/>
          <rect x="130" y="124" width="20" height="4" fill="oklch(50% 0.04 60)"/>
          <rect x="132" y="128" width="16" height="4" fill="oklch(45% 0.04 60)"/>
          <path d="M 134 132 L 146 132 L 143 138 L 137 138 Z" fill="oklch(40% 0.04 60)"/>
          <g transform="translate(20 26)">
            <text x="0" y="8" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(25% 0.06 60 / 0.85)" letterSpacing="1.2" fontWeight="600">IDEATE · 2021</text>
            <text x="0" y="28" fontFamily="Fraunces, Georgia, serif" fontSize="20" fill="oklch(22% 0.04 60)" fontWeight="500">200+</text>
            <text x="0" y="42" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(35% 0.05 60 / 0.8)" letterSpacing="1.5">PARTICIPANTS</text>
          </g>
          <g transform="translate(220 148)">
            <text x="0" y="0" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(25% 0.06 60 / 0.85)" letterSpacing="1.2" fontWeight="600">SPONSORS</text>
            <text x="0" y="18" fontFamily="Fraunces, Georgia, serif" fontSize="20" fill="oklch(22% 0.04 60)" fontWeight="500">$5K+</text>
          </g>
        </svg>
      </Backdrop>
    );
  }

  if (kind === "target") {
    return (
      <Backdrop gradient={`linear-gradient(135deg, oklch(18% 0.04 60) 0%, oklch(28% 0.06 30) 70%, ${color} 100%)`}>
        <svg viewBox="0 0 280 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid meet">
          {[0,1,2,3,4,5,6,7].map(i => (
            <line key={`s${i}`} x1="0" y1={i*28 + 8} x2="280" y2={i*28 + 8} stroke="oklch(60% 0.14 30 / 0.08)" strokeWidth="0.5"/>
          ))}
          <g transform="translate(140 100)">
            <circle r="52" fill="none" stroke="oklch(70% 0.2 28)" strokeWidth="1" strokeDasharray="4 3"/>
            <circle r="32" fill="none" stroke="oklch(70% 0.2 28)" strokeWidth="1.2"/>
            <circle r="4" fill="oklch(70% 0.2 28)"/>
            <line x1="-60" y1="0" x2="-16" y2="0" stroke="oklch(70% 0.2 28)" strokeWidth="1.2"/>
            <line x1="16" y1="0" x2="60" y2="0" stroke="oklch(70% 0.2 28)" strokeWidth="1.2"/>
            <line x1="0" y1="-60" x2="0" y2="-16" stroke="oklch(70% 0.2 28)" strokeWidth="1.2"/>
            <line x1="0" y1="16" x2="0" y2="60" stroke="oklch(70% 0.2 28)" strokeWidth="1.2"/>
            <path d="M -52 -52 L -44 -52 L -44 -44 M 52 -52 L 44 -52 L 44 -44 M -52 52 L -44 52 L -44 44 M 52 52 L 44 52 L 44 44"
                  stroke="oklch(70% 0.2 28)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </g>
          <g>
            <rect x="60" y="48" width="56" height="42" fill="none" stroke="oklch(80% 0.18 145)" strokeWidth="1.2"/>
            <rect x="60" y="38" width="70" height="10" fill="oklch(80% 0.18 145)"/>
            <text x="63" y="46" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(15% 0.04 145)" fontWeight="700" letterSpacing="0.5">TARGET · 0.94</text>
          </g>
          <g>
            <rect x="192" y="120" width="48" height="36" fill="none" stroke="oklch(75% 0.1 220)" strokeWidth="1" strokeDasharray="2 2"/>
            <text x="194" y="116" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(85% 0.08 220)" letterSpacing="0.5">OBJ · 0.62</text>
          </g>
          <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(70% 0.2 28)" letterSpacing="1.5" fontWeight="700">YOLOv5 · ROS2</text>
          <text x="260" y="24" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="7" fill="oklch(70% 0.2 28)" letterSpacing="1.5" fontWeight="700">LAT 18ms</text>
          <text x="20" y="184" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.45)" letterSpacing="1.5">JETSON XAVIER NX</text>
          <text x="260" y="184" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="6" fill="oklch(98% 0 0 / 0.45)" letterSpacing="1.5">● REC</text>
        </svg>
      </Backdrop>
    );
  }

  return <div style={{ position: "absolute", inset: 0, background: color }} />;
}

export default function PortfolioV2({ posts }: PortfolioV2Props) {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [workVariant, setWorkVariant] = useState<WorkVariant>("cards");
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<WorkProject | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX + 180, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [workVariant, posts.length]);

  const heroWords = useMemo(
    () => [
      ["Full-stack", "engineer"],
      ["building", "user-first"],
      ["interfaces."],
    ],
    []
  );

  return (
    <div className="page site-v2">
      <nav className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="v2-container nav-inner">
          <a href="#top" className="nav-brand">
            <span className="dot" aria-hidden="true" />
            <span>alvin ben abraham</span>
          </a>

          <div className="nav-links">
            <a href="#work" className="nav-link">
              <span className="idx">01</span>Work
            </a>
            <a href="#writing" className="nav-link">
              <span className="idx">02</span>Writing
            </a>
            <a href="#about" className="nav-link">
              <span className="idx">03</span>About
            </a>
            <a href="#contact" className="nav-link">
              <span className="idx">04</span>Contact
            </a>
          </div>

          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="v2-container">
          <div className="hero-meta">
            <div className="status">
              <span className="pulse" aria-hidden="true" />
              <span>SWE @ TikTok - Singapore</span>
            </div>
            <div className="status">
              <span>Open to chat - SGT (UTC+8)</span>
            </div>
          </div>

          <h1 className="hero-title">
            {heroWords[0].map((word) => (
              <span key={word} className="hero-word">
                <span>{word}</span>{" "}
              </span>
            ))}
            <br />
            <span className="hero-word">
              <span>{heroWords[1][0]}</span>{" "}
            </span>
            <span className="hero-word">
              <span className="accent-word">{heroWords[1][1]}</span>
            </span>
            <br />
            <span className="hero-word">
              <span>{heroWords[2][0]}</span>
            </span>
          </h1>

          <div className="hero-sub-grid">
            <p className="hero-lede">
              I&apos;m <em>Alvin Ben Abraham</em> - a software engineer at TikTok working on Shop Homepage. I care
              about bettering user interfaces and building an internet that puts people first. Coding, cycling, and
              cinema-ing on the side.
            </p>
            <dl className="hero-stats">
              <div className="hero-stat">
                <div className="k">Now</div>
                <div className="v">SWE, TikTok Shop</div>
              </div>
              <div className="hero-stat">
                <div className="k">Stack</div>
                <div className="v">React - TS - Go</div>
              </div>
              <div className="hero-stat">
                <div className="k">Based</div>
                <div className="v">Singapore</div>
              </div>
            </dl>
          </div>

          <div className="scroll-cue">
            <span className="line" aria-hidden="true" />
            <span>scroll to explore</span>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="v2-container">
          <header className="section-head reveal">
            <span className="num">§ 01</span>
            <h2>
              Selected work, <em style={{ fontStyle: "italic", fontWeight: 340 }}>2020 - now.</em>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <a
                href="/alvin-ben-abraham-resume.pdf"
                download
                className="resume-download-btn"
                aria-label="Download resume"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 1v7M3.5 5.5l3 3 3-3M1.5 10h10"/>
                </svg>
                Resume
              </a>
              <span className="tag">Shipped</span>
              <div className="work-variant-toggle">
                <button
                  className={`work-variant-btn${workVariant === "cards" ? " active" : ""}`}
                  onClick={() => setWorkVariant("cards")}
                  aria-label="Cards view"
                  title="Cards"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="1" y="1" width="5" height="5" rx="1"/>
                    <rect x="8" y="1" width="5" height="5" rx="1"/>
                    <rect x="1" y="8" width="5" height="5" rx="1"/>
                    <rect x="8" y="8" width="5" height="5" rx="1"/>
                  </svg>
                </button>
                <button
                  className={`work-variant-btn${workVariant === "list" ? " active" : ""}`}
                  onClick={() => setWorkVariant("list")}
                  aria-label="List view"
                  title="List"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <line x1="1" y1="3.5" x2="13" y2="3.5"/>
                    <line x1="1" y1="7" x2="13" y2="7"/>
                    <line x1="1" y1="10.5" x2="13" y2="10.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <div className="work-list" data-variant={workVariant}>
            {PROJECTS.map((project, i) => (
              <a
                key={project.n}
                className="work-item reveal"
                href={`#project-${project.n}`}
                onMouseEnter={() => setHovered(project)}
                onMouseLeave={() => setHovered(null)}
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              >
                {workVariant === "cards" && (
                  <div className="work-thumb">
                    <Pattern kind={project.pattern} color={project.swatch} />
                  </div>
                )}
                <span className="work-num">{project.n}</span>
                <div className={workVariant === "cards" ? "work-body" : ""}>
                  <h3 className="work-title">
                    {project.title}
                    <span className="year">— {project.year}</span>
                  </h3>
                  {workVariant === "cards" && (
                    <>
                      <p className="work-desc">{project.desc}</p>
                      <div className="work-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="work-tag">{tag}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                {workVariant === "list" && (
                  <div className="work-meta">
                    <p className="work-desc">{project.desc}</p>
                    <div className="work-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="work-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="work-arrow">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M4 14L14 4M14 4H6.5M14 4v7.5" strokeLinecap="round" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {workVariant === "list" && (
          <div className={`work-preview${hovered ? " visible" : ""}`} style={{ left: pos.x, top: pos.y }}>
            {hovered && <Pattern kind={hovered.pattern} color={hovered.swatch} />}
          </div>
        )}
      </section>

      <section className="section" id="writing" style={{ background: "var(--bg-elev)" }}>
        <div className="v2-container">
          <header className="section-head reveal">
            <span className="num">§ 02</span>
            <h2>
              Writing, <em style={{ fontStyle: "italic", fontWeight: 340 }}>occasionally.</em>
            </h2>
            <span className="tag">Blog</span>
          </header>

          <div className="writing-list">
            {posts.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="writing-item reveal"
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="writing-meta">
                  <time className="writing-date">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <span className="writing-read">{post.readingTimeText}</span>
                </div>
                <h3 className="writing-title">{post.title}</h3>
                <p className="writing-desc">{post.description}</p>
                <div className="writing-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="work-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="writing-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M4 12L12 4M12 4H6M12 4v6" strokeLinecap="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="v2-container">
          <header className="section-head reveal">
            <span className="num">§ 03</span>
            <h2>
              About, <em style={{ fontStyle: "italic", fontWeight: 340 }}>briefly.</em>
            </h2>
            <span className="tag">Bio</span>
          </header>

          <div className="about-grid">
            <p className="about-lede reveal">
              I&apos;m passionate about bettering the quality of user interfaces - creating an internet that is{" "}
              <em>user-first.</em> If you want to engage your users and create more value for them, let&apos;s talk.
            </p>

            <div className="reveal" style={{ ["--reveal-delay" as string]: "120ms" }}>
              <div className="about-body">
                <p>
                  I&apos;m a software engineer at <strong>TikTok</strong>, shipping features for the Shop Homepage that
                  move GMV 5-10% per feature, and maintaining the BFF framework that the wider frontend org builds on.
                </p>
                <p>
                  Before TikTok full-time I interned at <strong>Unit21</strong> in San Francisco on SOC2-compliant
                  financial compliance tools, and earlier at TikTok in Singapore where I helped ship e-commerce features
                  across 5+ countries. Before that I was sole frontend at Interseed Co., a TA at NUS, and software VP at
                  NUS RoboMasters working on computer vision for ROS 2.
                </p>
                <p>Outside work: coding, cycling, cinema-ing.</p>
              </div>

              <dl className="stack-grid">
                <dt>Frontend</dt>
                <dd>React - TypeScript - HTML/CSS - SCSS</dd>
                <dt>Backend</dt>
                <dd>Python - Node.js - Golang - C++</dd>
                <dt>Tools</dt>
                <dd>Git - Ubuntu - Bash - Figma</dd>
                <dt>Also</dt>
                <dd>PyTorch - ROS - OpenAI APIs</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="v2-container">
          <span className="eyebrow reveal">§ 04 - get in touch</span>
          <h2 className="contact-title reveal" style={{ marginTop: 24 }}>
            Let&apos;s build
            <br />
            something <em>user-first.</em>
          </h2>

          <div className="contact-links reveal">
            <a href="https://t.me/alvynbeno" target="_blank" rel="noreferrer" className="contact-email">
              t.me/alvynbeno
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M4 14L14 4M14 4H6.5M14 4v7.5" strokeLinecap="round" />
              </svg>
            </a>
            <a href="mailto:alvynben@gmail.com" className="contact-email">
              alvynben@gmail.com
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M4 14L14 4M14 4H6.5M14 4v7.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>

          <dl className="contact-grid reveal">
            <div className="contact-col">
              <dt>Currently</dt>
              <dd>Software Engineer at TikTok, Singapore</dd>
            </div>
            <div className="contact-col">
              <dt>Elsewhere</dt>
              <dd>
                <a href="mailto:alvynben@gmail.com">
                  Email
                </a>{" "}
                -{" "}
                <a href="https://github.com/alvynben" target="_blank" rel="noreferrer">
                  GitHub
                </a>{" "}
                -{" "}
                <a href="https://linkedin.com/in/alvinbenabraham" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>{" "}
                -{" "}
                <a href="https://t.me/alvynbeno" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </dd>
            </div>
            <div className="contact-col">
              <dt>Response</dt>
              <dd>Usually within a day</dd>
            </div>
            <div className="contact-col">
              <dt>Based in</dt>
              <dd>Singapore (SGT, UTC+8)</dd>
            </div>
          </dl>
        </div>

        <footer className="footer v2-container" style={{ marginTop: 80 }}>
          <span>© 2026 Alvin Ben Abraham</span>
          <span>Built with intent - alvinben.com v2</span>
        </footer>
      </section>
    </div>
  );
}
