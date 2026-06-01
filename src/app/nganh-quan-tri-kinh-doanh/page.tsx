import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Qtkd = nextDynamic<any>(() =>
  import("@/features/nganh-qtkd").then((mod) => mod.Qtkd)
);

async function getPageData() {
  const data = await fetchContentPage("nqtkd");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-quan-tri-kinh-doanh", {
    title: "Ngành quản trị kinh doanh - Đại học Thái Nguyên",
    description:
      "Ngành quản trị kinh doanh - Đại học Thái Nguyên, thông tin ngành quản trị kinh doanh Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Qtkd initialData={data} />;
}
