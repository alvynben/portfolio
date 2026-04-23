import type { Metadata } from "next";

import PortfolioV2 from "views/PortfolioV2/PortfolioV2";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import "@/views/PortfolioV2/portfolio-v2.css";

export const metadata: Metadata = buildMetadata({
  title: "alvinben",
  description: "Frontend engineer building user-first interfaces.",
  path: "/",
});

export default function HomePage() {
  const posts = getAllPosts();
  return <PortfolioV2 posts={posts} />;
}
