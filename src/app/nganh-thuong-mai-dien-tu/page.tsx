import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Tmdt = nextDynamic<any>(() =>
  import("@/features/nganh-tmdt").then((mod) => mod.Tmdt)
);

async function getPageData() {
  const data = await fetchContentPage("ntmdtvmkts");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-thuong-mai-dien-tu", {
    title: "Ngành thương mại điện tử - Đại học Thái Nguyên",
    description:
      "Ngành thương mại điện tử - Đại học Thái Nguyên, thông tin ngành thương mại điện tử Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Tmdt initialData={data} />;
}
