import { Luat } from "@/features/nganh-luat";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat", {
    title: "Ngành luật - Đại học Thái Nguyên",
    description:
      "Ngành luật - Đại học Thái Nguyên, thông tin ngành tế Đại học Thái nguyên"
  });
}

async function getPageData() {
  const data = await fetchContentPage("nganh-luat");
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Luat initialData={data} />;
}
