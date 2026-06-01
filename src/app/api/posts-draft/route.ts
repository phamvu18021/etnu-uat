import { NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const api_url = process.env.API_URL || "";
  const len = searchParams.get("len") || "9";
  let posts: any[] = [];

  try {
    const endPoint = `${api_url}/posts?_embed&per_page=${len}&status=draft&page=1`;
    const res = await fetchAuth({ url: endPoint });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: res.status }
      );
    }

    const postsNotFeatureImage: any[] = (await res?.json()) || [];
    posts =
      postsNotFeatureImage?.length > 0
        ? postsNotFeatureImage?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image
            };
          })
        : [];

    return NextResponse.json({ posts });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
