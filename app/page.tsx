import type { Metadata } from "next";

import Resume from "views/Resume/Resume";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description:
    "The resume, work experience, projects, and skills of Alvin Ben Abraham.",
  path: "/",
});

export default function HomePage() {
  return <Resume />;
}
