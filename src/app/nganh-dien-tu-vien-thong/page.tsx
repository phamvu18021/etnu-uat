import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Ktdtvt = nextDynamic(() =>
  import("@/features/nganh-ktdtvt").then((mod) => mod.Ktdtvt)
);

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-dien-tu-vien-thong", {
    title: "Ngành điện tử viễn thông - Đại học Thái Nguyên",
    description:
      "Ngành điện tử viễn thông - Đại học Thái Nguyên, thông tin ngành điện tử viễn thông Đại học Thái nguyên"
  });
}

async function getPageData() {
  const data = await fetchContentPage("ndtvt");
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Ktdtvt initialData={data} />;
}
