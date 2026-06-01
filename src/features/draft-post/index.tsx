"use client";

import { CardBlog } from "@/components/CardBlog";
import { HeadSection } from "@/components/HeadSection";
import { Loading } from "@/components/Loading";
import { Layout } from "@/layouts/layoutNganh";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import { Box, Center, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const DraftPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts-draft/?len=${9}`);
        if (!res.ok) {
          throw new Error(
            `Posts draft fetch failed with status: ${res.statusText}`
          );
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
      <Layout titleNganh="Tin tức" path="tin-tuc" title="" />
      <Box color={"blue.800"}></Box>
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <HeadSection
          title="Danh sách bài viết chưa xuất bản"
          subtitle="bài viết mới"
          desc="Danh sách 09 bài viết chưa xuất bản gần đây"
        />
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "24px" }}
        >
          {posts?.map((post, index) => (
            <GridItem
              key={index}
              boxShadow={"xl"}
              border={"1px solid #1a365d"}
              p={2}
            >
              <CardBlog
                key={index}
                title={post?.title?.rendered}
                date={post?.date ? formatDate(post.date) : ""}
                desc={clean(post.excerpt.rendered)}
                image={post?.featured_image || ""}
                path={`/preview/${post?.id}`}
                preview
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
