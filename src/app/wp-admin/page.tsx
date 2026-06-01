"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://etnu.aum.edu.vn/wp-admin");
  }, [router]);

  return null;
}
