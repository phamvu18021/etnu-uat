import { NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchtext = searchParams.get("search") || "";
  const page = searchParams.get("page") || "";
  const per_page = searchParams.get("per_page") || "12";
  const api_url = process.env.API_URL || "";

  let posts: any[] = [];
  let totalPosts: string = "0";

  try {
    const endPoint = `${api_url}/posts?search=${searchtext}&_embed&per_page=${per_page}&status=publish&page=${page}`;
    const res = await fetchAuth({ url: endPoint, revalidate: 300 });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: res.status }
      );
    }

    totalPosts = String(res.headers?.get("X-WP-Total") || "0");
    const postsNotFeatureImage: any[] = (await res?.json()) || [];

    const excludedSlugs = [
      "lich-khai-giang",
      "form-main",
      "form-poup",
      "gioi-thieu",
      "cta"
    ];

    const filteredPosts = postsNotFeatureImage.filter((post) => {
      const slug = post.slug || "";
      return !excludedSlugs.includes(slug);
    });

    posts =
      filteredPosts?.length > 0
        ? filteredPosts?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image
            };
          })
        : [];

    return NextResponse.json({ posts, totalPosts });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
