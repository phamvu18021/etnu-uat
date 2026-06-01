import { Metadata } from "next";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export function parseMetadata(headString: string): Metadata {
  const cleanedHead = replaceSeoRM(headString);

  const getMatch = (regex: RegExp) => {
    const match = cleanedHead.match(regex);
    return match ? match[1] : undefined;
  };

  const title =
    getMatch(/<title>([^<]*)<\/title>/) ||
    getMatch(/<meta\s+property="og:title"\s+content="([^"]*)"/) ||
    getMatch(/<meta\s+name="title"\s+content="([^"]*)"/);

  const description =
    getMatch(/<meta\s+name="description"\s+content="([^"]*)"/) ||
    getMatch(/<meta\s+property="og:description"\s+content="([^"]*)"/);

  const ogImage = getMatch(/<meta\s+property="og:image"\s+content="([^"]*)"/);
  const ogUrl = getMatch(/<meta\s+property="og:url"\s+content="([^"]*)"/)?.replace(
    /\/$/,
    ""
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
      url: ogUrl
    },
    alternates: {
      canonical: ogUrl
    }
  };
}
