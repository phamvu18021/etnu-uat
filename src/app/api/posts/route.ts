import { NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "";
  const page = searchParams.get("page") || "";

  const api_url =
    process.env.API_URL || "https://etnu.aum.edu.vn/wp-json/wp/v2";
  let posts: any[] = [];
  let totalPosts: string = "0";

  try {
    const idNew = 4;
    const idNotifi = 5;
    const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;

    const endPoint = id
      ? `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}&categories=${id}`
      : `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}`;

    const res = await fetchAuth({ url: endPoint, revalidate: 300 });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: res.status }
      );
    }

    let ttp = Number(res.headers?.get("X-WP-Total") || "0");
    if (ttp > 5) {
      totalPosts = String(ttp - 5);
    } else {
      totalPosts = String(ttp);
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

    return NextResponse.json({ posts, totalPosts });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
