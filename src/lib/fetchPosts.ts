import { fetchAuth } from "@/ultil/fetchAuth";

export async function fetchPosts(type: string, page: string | number = 1): Promise<any | null> {
  const api_url = process.env.API_URL || "https://etnu.aum.edu.vn/wp-json/wp/v2";
  const idNew = 4;
  const idNotifi = 5;
  const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;

  const endPoint = id
    ? `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}&categories=${id}`
    : `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}`;

  try {
    const res = await fetchAuth({ url: endPoint, revalidate: 300 });

    if (!res.ok) {
      console.warn(`fetchPosts failed for type "${type}": ${res.statusText}`);
      return null;
    }

    const ttp = Number(res.headers?.get("X-WP-Total") || "0");
    const totalPosts = ttp > 5 ? String(ttp - 5) : String(ttp);

    const postsNotFeatureImage = (await res?.json()) || [];
    const posts = postsNotFeatureImage.map((post: any) => ({
      ...post,
      featured_image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    }));

    return { posts, totalPosts };
  } catch (error) {
    console.error(`Error in fetchPosts for type "${type}":`, error);
    return null;
  }
}
