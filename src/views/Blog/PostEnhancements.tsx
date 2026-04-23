"use client";

import { useEffect } from "react";

interface TocHeading {
  id: string;
}

interface PostEnhancementsProps {
  headings: TocHeading[];
}

export default function PostEnhancements({ headings }: PostEnhancementsProps) {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>(".post-progress-bar");
    const article = document.querySelector<HTMLElement>(".prose");
    if (!bar || !article) return;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.max(0, Math.min(1, scrolled / Math.max(1, total)));
      bar.style.transform = `scaleX(${pct})`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-copy-btn]"));
    buttons.forEach((btn) => {
      const handler = async () => {
        const pre = btn.closest(".code-block")?.querySelector("pre");
        if (!pre) return;
        try {
          await navigator.clipboard.writeText(pre.innerText);
          btn.textContent = "copied!";
          setTimeout(() => { btn.textContent = "copy"; }, 2000);
        } catch {
          btn.textContent = "error";
          setTimeout(() => { btn.textContent = "copy"; }, 2000);
        }
      };
      btn.addEventListener("click", handler);
    });
    return () => {
      buttons.forEach((btn) => btn.replaceWith(btn.cloneNode(true)));
    };
  }, []);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".toc-link"));
    if (links.length === 0) return;

    const sections = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) =>
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
          );
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [headings]);

  return null;
}
