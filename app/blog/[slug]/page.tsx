import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Container, Row, Col } from "react-bootstrap";

import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { buildMetadata, SITE_URL } from "@/lib/seo";

import "@/views/Blog/Blog.css";
import "@/views/Blog/components/BlogPost/BlogPost.css";

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

  return (
    <Container className="py-4 blog-container" id="blog-container" fluid>
      <Row className="h-100">
        <Col sm={12} className="align-self-center">
          <h1 id="blogTitle">Blog</h1>
        </Col>
        <Col sm={12} className="align-self-start">
          <article className="blog-post">
            <Link
              href="/blog/"
              aria-label="Back to blog index"
              style={{ color: "#fff", display: "inline-block" }}
            >
              <FontAwesomeIcon
                className="blog-post-back-btn"
                icon={faChevronLeft as IconProp}
                color="#fff"
              />
            </Link>
            <header>
              <h2>{post.title}</h2>
              <p>
                {formatDate(post.date)} &middot; {post.readingTimeText}
              </p>
              {post.tags.length > 0 ? (
                <p style={{ color: "#aaa", fontSize: "0.85em", margin: 0 }}>
                  {post.tags.map((tag) => `#${tag}`).join(" ")}
                </p>
              ) : null}
            </header>
            <div className="prose">
              {/* @ts-expect-error Async Server Component */}
              <MDXRemote source={post.content} options={{ mdxOptions }} />
            </div>
          </article>
        </Col>
      </Row>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
