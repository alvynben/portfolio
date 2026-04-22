import type { Metadata } from "next";

import LandingPage from "views/LandingPage/LandingPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "About Alvin Ben Abraham.",
  path: "/about",
});

export default function AboutPage() {
  return <LandingPage />;
}
