import Link from "next/link";
import type { Metadata } from "next";

import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import "@/views/PortfolioV2/portfolio-v2.css";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Essays, notes, and experiments by Alvin Ben Abraham on software, design, and life.",
  path: "/blog",
});

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="page site-v2">
      <nav className="nav is-scrolled">
        <div className="v2-container nav-inner">
          <Link href="/" className="nav-brand">
            <span className="dot" aria-hidden="true" />
            <span>alvin ben abraham</span>
          </Link>
          <div className="nav-links">
            <Link href="/#work" className="nav-link">
              <span className="idx">01</span>Work
            </Link>
            <Link href="/#writing" className="nav-link">
              <span className="idx">02</span>Writing
            </Link>
            <Link href="/#about" className="nav-link">
              <span className="idx">03</span>About
            </Link>
            <Link href="/#contact" className="nav-link">
              <span className="idx">04</span>Contact
            </Link>
          </div>
          <div className="nav-right">
            <Link href="/" className="cta">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <section className="section" id="writing">
        <div className="v2-container">
          <header className="section-head">
            <span className="num">§ 02</span>
            <h2>
              Writing, <em style={{ fontStyle: "italic", fontWeight: 340 }}>occasionally.</em>
            </h2>
            <span className="tag">Blog</span>
          </header>

          {posts.length === 0 ? (
            <p>No posts yet. Check back soon.</p>
          ) : (
            <div className="writing-list">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="writing-item">
                  <div className="writing-meta">
                    <time className="writing-date">{formatDate(post.date)}</time>
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
