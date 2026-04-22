import type { Metadata } from "next";

export const SITE_NAME = "Alvin Ben Abraham";
export const SITE_DESCRIPTION = "A foray into Alvin Ben Abraham";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alvinben.com";
export const DEFAULT_OG_IMAGE = "/android-chrome-512x512.png";

interface BuildMetadataInput {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  tags,
}: BuildMetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${SITE_URL}${normalizedPath}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const effectiveDescription = description ?? SITE_DESCRIPTION;

  return {
    title,
    description: effectiveDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      title,
      description: effectiveDescription,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(tags ? { tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: effectiveDescription,
      images: [ogImage],
    },
  };
}
