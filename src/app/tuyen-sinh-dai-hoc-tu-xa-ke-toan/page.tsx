import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getPillarCMSData, getPillarMetadata } from "@/lib/pillar-helper";

export const dynamic = "force-dynamic";

const TuyenSinhTuXa = nextDynamic<any>(() =>
  import("@/features/tuyen-sinh-tu-xa").then((mod) => mod.TuyenSinhTuXa)
);

export async function generateMetadata(): Promise<Metadata> {
  return getPillarMetadata("tsdhtxkt", "tuyen-sinh-dai-hoc-tu-xa-ke-toan", {
    title: "Tuyển sinh Đại học từ xa Ngành Kế toán - Đại học Thái Nguyên",
    description: "Tuyển sinh Đại học từ xa Ngành Kế toán - Đại học Thái Nguyên"
  });
}

export default async function Page() {
  const data = await getPillarCMSData("tsdhtxkt");
  return <TuyenSinhTuXa initialData={data} />;
}
