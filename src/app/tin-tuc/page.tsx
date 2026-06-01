// Page.tsx
import ErrorBoundary from "@/components/ErrorBoundary";
import { ListPosts } from "@/features/posts/ListPosts";
import { Layout } from "@/layouts/layoutNganh";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { Box, Divider } from "@chakra-ui/react";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("tin-tuc", {
    title: "Tin tức và thông báo tuyển sinh - Đại học Thái Nguyên",
    description: "Đại học Thái Nguyên tuyển sinh năm 2023..."
  });
}

async function getPostsDirectly(type: string, page: string) {
  const api_url =
    process.env.API_URL || "https://etnu.aum.edu.vn/wp-json/wp/v2";
  const idNew = 4;
  const idNotifi = 5;
  const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;

  const endPoint = id
    ? `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}&categories=${id}`
    : `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}`;

  try {
    const res = await fetchAuth({ url: endPoint, revalidate: 300 });

    if (!res.ok) return null;

    const ttp = Number(res.headers?.get("X-WP-Total") || "0");
    const totalPosts = ttp > 5 ? String(ttp - 5) : String(ttp);

    const postsNotFeatureImage = (await res?.json()) || [];
    const posts = postsNotFeatureImage.map((post: any) => ({
      ...post,
      featured_image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    }));

    return { posts, totalPosts };
  } catch (error) {
    console.error("Direct fetch error:", error);
    return null;
  }
}

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const pageStr =
    typeof resolvedParams?.page === "string" ? resolvedParams.page : "1";

  const data = await getPostsDirectly("news", pageStr);

  return (
    <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
      <Layout
        title_p={true}
        titleNganh="Tin tức và Sự kiện "
        path="tin-tuc"
        title="Tin tức và Sự Kiện"
      />
      <Box mt={"32px"}></Box>
      <Divider size={"xl"} mb={"32px"} />
      <Box pb={"40px"}>
        <ListPosts initialData={data} />
      </Box>
    </ErrorBoundary>
  );
}
