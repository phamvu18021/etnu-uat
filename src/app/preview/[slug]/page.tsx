import { Post } from "@/features/post";
import { fetchAuth } from "@/ultil/fetchAuth";
import ErrorBoundary from "@/components/ErrorBoundary";
import { notFound } from "next/navigation";

async function getPreviewPost(id: string) {
  const api_url = process.env.API_URL || "";
  try {
    const res = await fetchAuth({
      url: `${api_url}/posts/${id}?_embed`
    });
    if (!res.ok) return null;
    const post = await res.json();
    return post || null;
  } catch (error) {
    console.error("Preview Post fetch error:", error);
    return null;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPreviewPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
      <Post post={post} />
    </ErrorBoundary>
  );
}
