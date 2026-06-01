import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Tcnh = nextDynamic<any>(() =>
  import("@/features/nganh-tcnh").then((mod) => mod.Tcnh)
);

async function getPageData() {
  const data = await fetchContentPage("ntcnh");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-tai-chinh-ngan-hang", {
    title: "Ngành tài chính ngân hàng - Đại học Thái Nguyên",
    description:
      "Ngành tài chính ngân hàng - Đại học Thái Nguyên, thông tin ngành tài chính ngân hàng Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Tcnh initialData={data} />;
}
