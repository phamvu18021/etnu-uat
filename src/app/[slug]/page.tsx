import { Post } from "@/features/post";
import { fetchAuth } from "@/ultil/fetchAuth";
import { fetchSeo } from "@/ultil/seo";
import { parseMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import ErrorBoundary from "@/components/ErrorBoundary";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const api_url = process.env.API_URL || "";
  try {
    const res = await fetchAuth({
      url: `${api_url}/posts?slug=${slug}`,
      revalidate: 300
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts ? posts[0] : null;
  } catch (error) {
    console.error("Post fetch error:", error);
    return null;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

import { getGlobalMetadata } from "@/lib/seo-helper";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Dynamic pages often don't have a pre-defined fallback title,
  // so we use a generic one or can try to fetch the post title first.
  return getGlobalMetadata(slug, {
    title: "Đại học Thái Nguyên - Hệ đào tạo từ xa",
    description:
      "Thông tin chi tiết về chương trình đào tạo từ xa Đại học Thái Nguyên."
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
      <Post post={post} />
    </ErrorBoundary>
  );
}
