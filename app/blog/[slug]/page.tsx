import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { isValidElement, type ReactNode } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import PostEnhancements from "@/views/Blog/PostEnhancements";
import DemoEmbed from "@/views/Blog/DemoEmbed";
import "@/views/PortfolioV2/portfolio-v2.css";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: "Post not found",
      path: `/blog/${params.slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: new Date(post.date).toISOString(),
    tags: post.tags,
  });
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        properties: {
          className: ["anchor"],
          "aria-hidden": "true",
          tabIndex: -1,
        },
        content: { type: "text", value: "#" },
      },
    ],
  ],
};

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map((child) => textFromChildren(child)).join("");
  }
  if (isValidElement(children)) {
    return textFromChildren(children.props.children);
  }
  return "";
}

function slugifyHeading(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_+=[\]{};:'",.<>/?\\|]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractHeadings(content: string) {
  const headings: { id: string; text: string }[] = [];
  const regex = /^##\s+(.+)$/gm;
  let match = regex.exec(content);
  while (match) {
    const text = match[1].trim();
    headings.push({ id: slugifyHeading(text), text });
    match = regex.exec(content);
  }
  return headings;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    author: { "@type": "Person", name: "Alvin Ben Abraham" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  const headings = extractHeadings(post.content);
  const posts = getAllPosts();
  const postIndex = posts.findIndex((candidate) => candidate.slug === post.slug);
  const previousPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const postNumber = postIndex >= 0 ? String(postIndex + 1).padStart(3, "0") : "001";
  const postUrl = `${SITE_URL}/blog/${post.slug}/`;

  let sectionIndex = 0;
  const mdxComponents = {
    h2: ({ children, ...props }: { children: ReactNode; id?: string }) => {
      sectionIndex += 1;
      return (
        <>
          <span className="prose-section-num">§ {String(sectionIndex).padStart(2, "0")}</span>
          <h2 {...props}>{children}</h2>
        </>
      );
    },
    table: ({ children, ...props }: { children: ReactNode }) => (
      <div className="prose-table-wrap">
        <table className="prose-table" {...props}>
          {children}
        </table>
      </div>
    ),
    pre: ({ children, ...props }: { children: ReactNode }) => {
      let lang = "code";
      if (isValidElement(children) && typeof children.props.className === "string") {
        lang = children.props.className.replace("language-", "") || "code";
      }
      return (
        <figure className="code-block">
          <figcaption className="code-caption">
            <span className="code-lang">{lang}</span>
            <span className="code-path">content/blog/{post.slug}.mdx</span>
            <button className="code-copy" aria-label="Copy code" data-copy-btn>copy</button>
          </figcaption>
          <pre {...props}>{children}</pre>
        </figure>
      );
    },
    DemoEmbed: () => <DemoEmbed />,
    p: ({ children, ...props }: { children: ReactNode }) => {
      const text = textFromChildren(children).trim();
      if (text === "If you're reading this, the pipeline works. Onwards.") {
        return (
          <p className="prose-kicker" {...props}>
            {children}
          </p>
        );
      }
      return <p {...props}>{children}</p>;
    },
  };

  const renderPostTitle = () => {
    if (post.slug === "why-i-rebuilt-my-portfolio") {
      return (
        <>
          Why I <em>rebuilt</em>
          <br />
          my portfolio.
        </>
      );
    }
    return post.title;
  };

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
            <Link href="/blog/" className="cta">
              ← All posts
            </Link>
          </div>
        </div>
      </nav>

      <main className="post">
        <div className="post-progress" aria-hidden="true">
          <div className="post-progress-bar" />
        </div>

        <div className="v2-container post-container">
          <Link href="/blog/" className="post-back">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M8 2L4 6l4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to writing
          </Link>

          <header className="post-header">
            <div className="post-meta-top">
              <time className="post-date">{formatDate(post.date)}</time>
              <span className="post-dot">·</span>
              <span className="post-read">{post.readingTimeText}</span>
              <span className="post-dot">·</span>
              <span className="post-slug">#{postNumber}</span>
            </div>

            <h1 className="post-title">{renderPostTitle()}</h1>
            {post.description ? <p className="post-description">{post.description}</p> : null}
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="post-tag">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <hr className="post-rule" />

          <div className="post-layout">
            <aside className="post-toc" aria-label="Table of contents">
              <div className="toc-label">On this page</div>
              <ol className="toc-list">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`} className="toc-link">
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="toc-share">
                <div className="toc-label">Share</div>
                <a className="toc-sharelink" href={postUrl}>
                  Copy link
                </a>
                <a className="toc-sharelink" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}/`)}`}>
                  LinkedIn
                </a>
              </div>
            </aside>

            <article className="prose">
              {/* @ts-expect-error Async Server Component */}
              <MDXRemote source={post.content} options={{ mdxOptions }} components={mdxComponents} />

              <footer className="post-footer">
                <div className="post-signoff">
                  <div className="signoff-name">Alvin Ben Abraham</div>
                  <div className="signoff-meta">Frontend Engineer · Singapore · SGT</div>
                </div>
                <div className="post-share">
                  <a href="mailto:alvinbenabraham@gmail.com">Reply by email</a>
                </div>
              </footer>
            </article>
          </div>

          <nav className="post-pager">
            {previousPost ? (
              <Link className="pager-card pager-prev" href={`/blog/${previousPost.slug}/`}>
                <span className="pager-dir">← Previous</span>
                <span className="pager-title">{previousPost.title}</span>
              </Link>
            ) : (
              <a className="pager-card pager-prev is-disabled" aria-disabled="true">
                <span className="pager-dir">← Previous</span>
                <span className="pager-title">No earlier posts</span>
              </a>
            )}

            {nextPost ? (
              <Link className="pager-card pager-next" href={`/blog/${nextPost.slug}/`}>
                <span className="pager-dir">Next →</span>
                <span className="pager-title">{nextPost.title}</span>
              </Link>
            ) : (
              <a className="pager-card pager-next is-disabled" aria-disabled="true">
                <span className="pager-dir">Next →</span>
                <span className="pager-title">No later posts</span>
              </a>
            )}
          </nav>
        </div>
      </main>

      <footer className="footer v2-container">
        <span>© 2026 Alvin Ben Abraham</span>
        <span>Built with intent · alvinben.com v2</span>
      </footer>

      <PostEnhancements headings={headings} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
