import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Lkt = nextDynamic<any>(() =>
  import("@/features/nganh-lkt").then((mod) => mod.Lkt)
);

async function getPageData() {
  const data = await fetchContentPage("nlkt");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat-kinh-te", {
    title: "Ngành luật kinh tế - Đại học Thái Nguyên",
    description:
      "Ngành luật kinh tế - Đại học Thái Nguyên, thông tin ngành luật kinh tế Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Lkt initialData={data} />;
}
