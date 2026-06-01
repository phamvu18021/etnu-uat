"use client";

import { Box, GridItem, HStack, Img, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clean } from "@/lib/sanitizeHtml";

export const CardBlogVert = ({
  title,
  date,
  tag,
  image,
  path
}: {
  date?: string;
  title: string;
  desc: string;
  tag: string;
  image?: string;
  path?: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Box py={4} as={Link} href={path ?? "#"} border={"none"}>
      <SimpleGrid columns={3} spacing={2}>
        <GridItem
          colSpan={1}
          display={"flex"}
          justifyContent={"center"}
          objectFit={"cover"}
        >
          <Box pos={"relative"}>
            <Image
              width={130}
              height={110}
              src={image || `/blog.jpeg`}
              alt={title}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            _hover={{ color: "#0d6efd " }}
            transition={"all ease .3s"}
            css={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            dangerouslySetInnerHTML={{ __html: clean(title) }}
          />
          <HStack>
            <Text
              p={1}
              align={"center"}
              fontSize={"10px"}
              w={"-webkit-fit-content"}
              bg={"black"}
              color={"white"}
              gap={0.1}
            >
              {tag}
            </Text>
            <Text p={1} align={"center"} fontSize={"xs"} color={"gray.500"}>
              {date?.slice(5)}
            </Text>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
