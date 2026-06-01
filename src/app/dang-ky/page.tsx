import { dangky as Dangky } from "@/features/dang-ky";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("dang-ky", {
    title: "Đăng ký học từ xa Đại học Thái Nguyên",
    description:
      "Đăng ký học từ xa Đại học Thái Nguyên, tiết kiệm chi phí và thời gian"
  });
}

async function getPageData() {
  const data = await fetchContentPage("dang-ky");
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Dangky initialData={data} />;
}
