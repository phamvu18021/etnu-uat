import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Nnt = nextDynamic<any>(() =>
  import("@/features/nganh-nnt").then((mod) => mod.Nnt)
);

async function getPageData() {
  const data = await fetchContentPage("nnnt");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ngon-ngu-trung", {
    title: "Ngành ngôn ngữ Trung - Đại học Thái Nguyên",
    description:
      "Ngành ngôn ngữ Trung - Đại học Thái Nguyên, thông tin ngành ngôn ngữ Trung Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Nnt initialData={data} />;
}
