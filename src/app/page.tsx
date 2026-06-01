import { Home } from "@/features/home";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";
import { fetchPosts } from "@/lib/fetchPosts";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata(undefined, {
    title: "Đại học Thái Nguyên - Hệ đào tạo từ xa",
    description:
      "Trang tuyển sinh chính thức hệ đào tạo từ xa Đại học Thái Nguyên. Đăng ký ngay để nhận tư vấn miễn phí."
  });
}

async function getPageData() {
  const [contentData, newsData, notifisData] = await Promise.all([
    fetchContentPage("trang-chu"),
    fetchPosts("news", 1),
    fetchPosts("notifis", 1)
  ]);

  return {
    content: contentData?.posts?.[0] || null,
    news: newsData?.posts?.slice(0, 4) || [],
    notifis: notifisData?.posts?.slice(0, 4) || []
  };
}

export default async function Page() {
  const data = await getPageData();
  return (
    <Home
      initialData={data.content}
      initialNews={data.news}
      initialNotifis={data.notifis}
    />
  );
}
