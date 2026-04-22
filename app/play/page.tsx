import type { Metadata } from "next";

import Playground from "views/Playground/Playground";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Playground",
  description: "A WebGL playground by Alvin Ben Abraham.",
  path: "/play",
});

export default function PlayPage() {
  return <Playground />;
}
