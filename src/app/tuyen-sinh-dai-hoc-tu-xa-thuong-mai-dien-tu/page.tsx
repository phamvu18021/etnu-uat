import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getPillarCMSData, getPillarMetadata } from "@/lib/pillar-helper";

export const dynamic = "force-dynamic";

const TuyenSinhTuXa = nextDynamic<any>(() =>
  import("@/features/tuyen-sinh-tu-xa").then((mod) => mod.TuyenSinhTuXa)
);

export async function generateMetadata(): Promise<Metadata> {
  return getPillarMetadata("tsdhtxtmdt", "tuyen-sinh-dai-hoc-tu-xa-thuong-mai-dien-tu", {
    title: "Tuyển sinh Đại học từ xa Ngành Thương mại điện tử - Đại học Thái Nguyên",
    description: "Tuyển sinh Đại học từ xa Ngành Thương mại điện tử - Đại học Thái Nguyên"
  });
}

export default async function Page() {
  const data = await getPillarCMSData("tsdhtxtmdt");
  return <TuyenSinhTuXa initialData={data} />;
}
