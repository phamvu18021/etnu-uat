import { Metadata } from "next";
import { fetchContentPage } from "@/lib/fetchContentPage";
import { getGlobalMetadata } from "@/lib/seo-helper";

// Giải mã các HTML entities cơ bản từ chuỗi
export function decodeHtmlEntities(text: string) {
  if (!text) return text;
  return text
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”');
}

// Hàm lấy và xử lý dữ liệu CMS cho các trang Pillar
export async function getPillarCMSData(type: string) {
  const data = await fetchContentPage(type);
  const post = data?.posts?.[0] || null;
  
  // Không cần map tab -> majors nữa vì frontend đã đọc thẳng từ tabs

  return post;
}

// Hàm tạo Metadata từ dữ liệu CMS WP
export async function getPillarMetadata(
  type: string,
  slug: string,
  fallback: Metadata = {}
): Promise<Metadata> {
  const post = await getPillarCMSData(type);
  
  let title = fallback.title;
  let description = fallback.description;
  let images = fallback.openGraph?.images || [];

  if (post) {
    if (post.title?.rendered) {
      title = decodeHtmlEntities(post.title.rendered);
    }
    // Lấy mô tả từ excerpt nếu có, hoặc từ một phần content
    if (post.excerpt?.rendered) {
      description = decodeHtmlEntities(post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""));
    }
    if (post.acf?.banner?.banner_image) {
      images = [post.acf.banner.banner_image];
    }
  }

  // Kết hợp với getGlobalMetadata nếu bạn vẫn muốn fallback về global seo config
  const generatedMetadata = await getGlobalMetadata(`${type}/${slug}`, {
    ...fallback,
    title: (title || fallback.title || undefined) as any,
    description: description || fallback.description || undefined,
    openGraph: {
      ...fallback.openGraph,
      title: (title || fallback.title || undefined) as any,
      description: description || fallback.description || undefined,
      images,
    }
  });

  // Fix canonical and og:url to remove the type prefix from WordPress
  if (generatedMetadata.alternates?.canonical) {
    const canonicalStr = generatedMetadata.alternates.canonical.toString();
    generatedMetadata.alternates.canonical = canonicalStr.replace(`/${type}/`, "/");
  }

  if (generatedMetadata.openGraph?.url) {
    const ogUrlStr = generatedMetadata.openGraph.url.toString();
    generatedMetadata.openGraph.url = ogUrlStr.replace(`/${type}/`, "/");
  }

  return generatedMetadata;
}
