import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getPillarCMSData, getPillarMetadata } from "@/lib/pillar-helper";

export const dynamic = "force-dynamic";

const TuyenSinhTuXa = nextDynamic<any>(() =>
  import("@/features/tuyen-sinh-tu-xa").then((mod) => mod.TuyenSinhTuXa)
);

export async function generateMetadata(): Promise<Metadata> {
  return getPillarMetadata("tsdhtxnl", "tuyen-sinh-dai-hoc-tu-xa-nganh-luat", {
    title: "Tuyển sinh Đại học từ xa Ngành Luật - Đại học Thái Nguyên",
    description: "Tuyển sinh Đại học từ xa Ngành Luật - Đại học Thái Nguyên"
  });
}

export default async function Page() {
  const data = await getPillarCMSData("tsdhtxnl");
  return <TuyenSinhTuXa initialData={data} />;
}
