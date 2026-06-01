import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const Cntt = nextDynamic(() =>
  import("@/features/nganh-cntt").then((mod) => mod.Cntt)
);

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-cong-nghe-thong-tin", {
    title: "Ngành công nghệ thông tin - Đại học Thái Nguyên",
    description:
      "Ngành công nghệ thông tin - Đại học Thái Nguyên, thông tin ngành công nghệ thông tin Đại học Thái nguyên"
  });
}

async function getPageData() {
  const data = await fetchContentPage("ncntt");
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Cntt initialData={data} />;
}
