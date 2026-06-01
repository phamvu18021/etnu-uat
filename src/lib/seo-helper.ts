import { Metadata } from "next";
import { fetchSeo } from "@/ultil/seo";
import { parseMetadata } from "./metadata";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export async function getGlobalMetadata(
  slug?: string,
  fallback: Metadata = {}
): Promise<Metadata> {
  const baseUrl = process.env.API_RMS_URL || "";
  if (!baseUrl) return fallback;

  const url = slug ? `${baseUrl}/${slug}/` : baseUrl;

  try {
    const res = await fetchSeo({ url, revalidate: 10 });
    if (!res.ok) {
      console.warn(`SEO fetch failed for slug "${slug}": ${res.statusText}`);
      return fallback;
    }
    const data = await res.json();
    const head = data?.head || "";
    if (!head) return fallback;

    const parsed = parseMetadata(replaceSeoRM(head));

    // Merge parsed metadata with fallback, preferring parsed values if they exist
    return {
      ...fallback,
      title: parsed.title || fallback.title || undefined,
      description: parsed.description || fallback.description || undefined,
      openGraph: {
        ...fallback.openGraph,
        ...parsed.openGraph,
        title: (parsed.openGraph?.title ||
          fallback.openGraph?.title ||
          parsed.title ||
          fallback.title ||
          undefined) as string | undefined,
        description: (parsed.openGraph?.description ||
          fallback.openGraph?.description ||
          parsed.description ||
          fallback.description ||
          undefined) as string | undefined,
        images:
          Array.isArray(parsed.openGraph?.images) &&
          (parsed.openGraph?.images as any[]).length > 0
            ? parsed.openGraph!.images
            : fallback.openGraph?.images || []
      },
      alternates: {
        ...fallback.alternates,
        ...parsed.alternates
      }
    };
  } catch (error) {
    console.error(`SEO fetch error for slug "${slug}":`, error);
    return fallback;
  }
}
