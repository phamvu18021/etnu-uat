import { NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const catId = searchParams.get("catId") || "";
  const id = searchParams.get("id") || "";
  const api_url = process.env.API_URL || "";

  let samePosts: any[] = [];

  if (catId) {
    try {
      const resRelatedPosts = await fetchAuth({
        url: `${api_url}/posts/?categories=${catId}&exclude=${id}&per_page=3&_embed`,
        revalidate: 300
      });

      if (!resRelatedPosts.ok) {
        return NextResponse.json(
          { error: "Fetch failed" },
          { status: resRelatedPosts.status }
        );
      }

      const relatedPosts: any[] = await resRelatedPosts.json();
      samePosts =
        relatedPosts?.length > 0
          ? relatedPosts?.map((post: any) => {
              const featured_image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

              return {
                ...post,
                featured_image
              };
            })
          : [];
    } catch (error) {
      console.error(error);
    }
  }

  return NextResponse.json({ samePosts });
}
