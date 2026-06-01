import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "";
  const api_url = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";

  if (hasSSL === "false") {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  }

  try {
    const endPoint = `${api_url}/${type}`;
    const res = await fetch(endPoint, {
      next: { revalidate: 300 }
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: res.status }
      );
    }

    const posts = await res.json();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
