import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getPillarCMSData, getPillarMetadata } from "@/lib/pillar-helper";

export const dynamic = "force-dynamic";

const TuyenSinhTuXa = nextDynamic<any>(() =>
  import("@/features/tuyen-sinh-tu-xa").then((mod) => mod.TuyenSinhTuXa)
);

export async function generateMetadata(): Promise<Metadata> {
  return getPillarMetadata("tsdhtxlkt", "tuyen-sinh-dai-hoc-tu-xa-luat-kinh-te", {
    title: "Tuyển sinh Đại học từ xa Ngành Luật kinh tế - Đại học Thái Nguyên",
    description: "Tuyển sinh Đại học từ xa Ngành Luật kinh tế - Đại học Thái Nguyên"
  });
}

export default async function Page() {
  const data = await getPillarCMSData("tsdhtxlkt");
  return <TuyenSinhTuXa initialData={data} />;
}
