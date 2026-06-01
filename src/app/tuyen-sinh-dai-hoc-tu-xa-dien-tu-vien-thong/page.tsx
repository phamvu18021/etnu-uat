import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getPillarCMSData, getPillarMetadata } from "@/lib/pillar-helper";

export const dynamic = "force-dynamic";

const TuyenSinhTuXa = nextDynamic<any>(() =>
  import("@/features/tuyen-sinh-tu-xa").then((mod) => mod.TuyenSinhTuXa)
);

export async function generateMetadata(): Promise<Metadata> {
  return getPillarMetadata("tsdhtxdtvt", "tuyen-sinh-dai-hoc-tu-xa-dien-tu-vien-thong", {
    title: "Tuyển sinh Đại học từ xa Ngành Điện tử viễn thông - Đại học Thái Nguyên",
    description: "Tuyển sinh Đại học từ xa Ngành Điện tử viễn thông - Đại học Thái Nguyên"
  });
}

export default async function Page() {
  const data = await getPillarCMSData("tsdhtxdtvt");
  return <TuyenSinhTuXa initialData={data} />;
}
