import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Nna = nextDynamic<any>(() =>
  import("@/features/nganh-nna").then((mod) => mod.Nna)
);

async function getPageData() {
  const data = await fetchContentPage("nnna");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ngon-ngu-anh", {
    title: "Ngành ngôn ngữ Anh - Đại học Thái Nguyên",
    description:
      "Ngành ngôn ngữ Anh - Đại học Thái Nguyên, thông tin ngành ngôn ngữ Anh Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Nna initialData={data} />;
}
