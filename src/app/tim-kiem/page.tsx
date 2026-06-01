import ErrorBoundary from "@/components/ErrorBoundary";
import { Search } from "@/features/search";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("tim-kiem", {
    title: "Tìm kiếm - Đại học Thái Nguyên",
    description: "Tìm kiếm thông tin tuyển sinh Đại học Thái Nguyên"
  });
}

import { Suspense } from "react";
import { Loading } from "@/components/Loading";

export default function Page() {
  return (
    <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
    </ErrorBoundary>
  );
}
