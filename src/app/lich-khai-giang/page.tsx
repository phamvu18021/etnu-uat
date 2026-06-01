import { LichKg } from "@/features/lich-khai-giang";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("lich-khai-giang", {
    title: "Lịch khai Giảng - Đại học Thái Nguyên",
    description:
      "Lịch khai giảng hệ đào tạo từ xa Đại học Thái Nguyên - hệ đại học từ xa"
  });
}

async function getLichKgData() {
  const api_url = process.env.API_URL || "";
  try {
    const res = await fetch(`${api_url}/lich-khai-giang/?id=304`, {
      next: { revalidate: 300 }
    });
    if (!res.ok) return { list: [], content: [] };
    const data = await res.json();

    const htmlString = data?.length > 0 ? data[0]?.content?.rendered : ``;
    const textContent = htmlString.replace(/(&#8211;|<[^>]*>)/g, "");
    const lines = textContent.split("\n");
    const list = lines
      ?.filter((line: string) => line.trim() !== "")
      ?.map((line: string) => line.trim());

    return {
      list: list || [],
      content: data || []
    };
  } catch (error) {
    console.error("LichKg fetch error:", error);
    return { list: [], content: [] };
  }
}

export default async function Page() {
  const { list, content } = await getLichKgData();
  const page_content = content?.length > 0 ? content[0] : null;

  return <LichKg list={list} isLoading={false} page_content={page_content} />;
}
