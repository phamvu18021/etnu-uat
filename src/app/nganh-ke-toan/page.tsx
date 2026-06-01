import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Kt = nextDynamic<any>(() =>
  import("@/features/nganh-kt").then((mod) => mod.Kt)
);

async function getPageData() {
  const data = await fetchContentPage("nkt");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ke-toan", {
    title: "Ngành kế toán - Đại học Thái Nguyên",
    description:
      "Ngành kế toán - Đại học Thái Nguyên, thông tin ngành kế toán Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Kt initialData={data} />;
}
