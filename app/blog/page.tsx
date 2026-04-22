import Link from "next/link";
import type { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";

import "@/views/Blog/Blog.css";
import "@/views/Blog/components/BlogPostPreview/BlogPostPreview.css";
import "@/views/Blog/components/ListOfPosts/ListOfPosts.css";

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
    <Container className="py-4 blog-container" id="blog-container" fluid>
      <Row className="h-100">
        <Col sm={12} className="align-self-center">
          <h1 id="blogTitle">Blog</h1>
        </Col>
        <Col sm={12} className="align-self-start">
          {posts.length === 0 ? (
            <p style={{ margin: "2em", color: "#fff" }}>
              No posts yet. Check back soon.
            </p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="blog-post-preview"
                style={{ display: "block", textDecoration: "none" }}
              >
                <h2>{post.title}</h2>
                <p style={{ margin: 0 }}>
                  {formatDate(post.date)} &middot; {post.readingTimeText}
                </p>
                {post.description ? (
                  <p style={{ marginTop: "0.5em" }}>{post.description}</p>
                ) : null}
              </Link>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}
