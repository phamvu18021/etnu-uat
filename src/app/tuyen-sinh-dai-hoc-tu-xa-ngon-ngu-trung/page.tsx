import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getPillarCMSData, getPillarMetadata } from "@/lib/pillar-helper";

export const dynamic = "force-dynamic";

const TuyenSinhTuXa = nextDynamic<any>(() =>
  import("@/features/tuyen-sinh-tu-xa").then((mod) => mod.TuyenSinhTuXa)
);

export async function generateMetadata(): Promise<Metadata> {
  return getPillarMetadata("tsdhtxnnt", "tuyen-sinh-dai-hoc-tu-xa-ngon-ngu-trung", {
    title: "Tuyển sinh Đại học từ xa Ngành Ngôn ngữ Trung - Đại học Thái Nguyên",
    description: "Tuyển sinh Đại học từ xa Ngành Ngôn ngữ Trung - Đại học Thái Nguyên"
  });
}

export default async function Page() {
  const data = await getPillarCMSData("tsdhtxnnt");
  return <TuyenSinhTuXa initialData={data} />;
}
