import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

const About = nextDynamic<any>(() =>
  import("@/features/About").then((mod) => mod.About)
);

async function getPageData() {
  const data = await fetchContentPage("gioi-thieu");
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("gioi-thieu", {
    title: "Giới thiệu về Đại học Thái Nguyên",
    description:
      "Trường Đại học Thái Nguyên (Thai Nguyen University of Agriculture and Forestry – TUAF) được thành lập năm 1969, hiện nay là một đơn vị thành viên của Đại học Thái Nguyên. Trải qua 52 năm xây dựng và phát triển, Trường Đại học Thái Nguyên trở thành một trung tâm đào tạo và chuyển giao khoa học – công nghệ hàng đầu Việt Nam"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <About initialData={data} />;
}
