"use client";

import { CardBlog } from "@/components/CardBlog";
import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import { Box, Center, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const LatestPost = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?page=${1}`, {
          next: { revalidate: 300 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setPosts(posts);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  if (isLoading) return <Loading he="50vh" />;

  if (posts?.length === 0)
    return (
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <Center minH={"50vh"}>Không có bài viết nào mới xuất bản</Center>
      </Container>
    );

  return (
    <Box>
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "24px" }}
        >
          {posts?.map((post, index) => (
            <GridItem key={index}>
              <CardBlog
                date={post?.date ? formatDate(post.date) : ""}
                key={index}
                title={post?.title?.rendered}
                desc={clean(post.excerpt.rendered)}
                image={post?.featured_image || ""}
                path={`/bai-viet-moi/${post?.slug}`}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
