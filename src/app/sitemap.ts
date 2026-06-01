import { MetadataRoute } from "next";
import { menus, TMenus } from "@/router";

const URL = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
const API_URL = process.env.API_URL;
const PER_PAGE = 100;

const getAllPaths = (menus: TMenus): string[] => {
  const paths: string[] = [];
  menus.forEach((menu) => {
    if (menu.path !== "#") paths.push(menu.path);
    if (menu?.childs) paths.push(...getAllPaths(menu.childs));
  });
  return paths;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = getAllPaths(menus);

  let posts: { slug: string }[] = [];

  try {
    const resPage1 = await fetch(
      `${API_URL}/posts?categories=4,5&per_page=${PER_PAGE}&status=publish&page=1&_fields=slug`,
      { next: { revalidate: 300 } }
    );

    if (resPage1.ok) {
      const totalPages = parseInt(
        resPage1.headers.get("X-WP-TotalPages") || "1"
      );
      const page1 = await resPage1.json();
      posts = [...page1];

      const fetches = [];
      for (let p = 2; p <= totalPages; p++) {
        fetches.push(
          fetch(
            `${API_URL}/posts?categories=4,5&per_page=${PER_PAGE}&status=publish&page=${p}&_fields=slug`,
            { next: { revalidate: 300 } }
          ).then((r) => (r.ok ? r.json() : []))
        );
      }

      const rest = await Promise.all(fetches);
      rest.forEach((list) => (posts = [...posts, ...list]));
    }
  } catch (err) {
    console.error("Sitemap generation error:", err);
  }

  const staticEntries = staticPaths.map((path) => ({
    url: `${URL}${path === "/" ? "" : (path.startsWith("/") ? path : `/${path}`)}`,
    lastModified: new Date()
  }));

  const postEntries = posts.map((post) => ({
    url: `${URL}/${post.slug}`,
    lastModified: new Date()
  }));

  return [...staticEntries, ...postEntries];
}
