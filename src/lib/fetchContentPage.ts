export async function fetchContentPage(type: string): Promise<any | null> {
  const api_url =
    process.env.API_URL || "https://etnu.aum.edu.vn/wp-json/wp/v2";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";

  if (hasSSL === "false") {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  }

  try {
    const endPoint = `${api_url}/${type}`;
    const res = await fetch(endPoint, {
      next: { revalidate: 10 }
    });

    if (!res.ok) {
      console.warn(
        `fetchContentPage failed for type "${type}": ${res.statusText}`
      );
      return null;
    }

    const posts = await res.json();
    return { posts };
  } catch (error) {
    console.error(`Error in fetchContentPage for type "${type}":`, error);
    return null;
  }
}
