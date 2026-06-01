"use client";

import { CardBlog } from "@/components/CardBlog";
import { NewsSkeleton } from "@/components/NewsSkeleton";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 1rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 0.5rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 3px;
    margin-left: 3px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 24px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

import { useRouter } from "next/navigation";

export const ListPosts = ({ initialData }: { initialData?: any }) => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  const posts = initialData?.posts || [];
  const totalPosts = initialData?.totalPosts || "0";
  const len = Math.ceil(Number(totalPosts) / 10) || 1;

  return (
    <LayoutBottom sticky="120px">
      <Box sx={{ "& > .chakra-container": { px: 0 } }}>
        <Box>
          <Heading
            as={"h1"}
            size={"xl"}
            color={"#1a365d"}
            pb={"20px"}
            textAlign={{ base: "center", lg: "center" }}
          >
            Tin Tức
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"8"}>
            {posts?.map((post: any, index: number) => (
              <GridItem key={index}>
                <CardBlog
                  priority={index < 2}
                  date={post?.date ? formatDate(post.date) : ""}
                  title={post?.title?.rendered}
                  desc={clean(post.excerpt.rendered)}
                  tag="tin tức"
                  image={post?.featured_image || ""}
                  path={`/${post?.slug}`}
                />
              </GridItem>
            ))}
            {posts?.length === 0 && (
              <Grid placeItems={"center"} height={"40vh"}>
                Dữ liệu đang được chúng tôi cập nhập
              </Grid>
            )}
          </SimpleGrid>
        </Box>
        {posts?.length > 0 && len > 1 && (
          <HStack pt={"32px"} justify={"center"}>
            <StyledPaginate
              previousLabel="<"
              nextLabel=">"
              pageCount={len}
              onPageChange={handleRouter}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              activeClassName="active"
            />
          </HStack>
        )}
      </Box>
    </LayoutBottom>
  );
};
