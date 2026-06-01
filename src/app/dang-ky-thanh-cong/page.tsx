import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

const DangkyTc = nextDynamic(() =>
  import("@/features/dang-ky-thanh-cong").then((mod) => mod.DangkyTc)
);

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("dang-ky-thanh-cong", {
    title: "Đăng ký học từ xa Đại học Thái Nguyên",
    description:
      "Đăng ký học Đại học từ xa Đại học Thái Nguyên, tiết kiệm chi phí và thời gian"
  });
}

export default function Page() {
  return <DangkyTc />;
}
