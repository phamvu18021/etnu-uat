"use client";

import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CardCat = ({
  image,
  title,
  desc,
  path
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Center
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      pos={"relative"}
      className="card-blog"
      h={"100%"}
      border={"1px solid #F1F1F1"}
      borderRadius={"7px"}
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        maxW={"527px"}
        w={"full"}
        rounded={"sm"}
        p={6}
        overflow={"hidden"}
        h={"100%"}
      >
        <Box>
          <Box
            bg={"gray.100"}
            mt={{ lg: -6 }}
            mx={-6}
            mb={6}
            pos={"relative"}
            height={{ lg: "auto", md: "auto", base: "auto" }}
            onMouseEnter={(e) => {
              const element = e.currentTarget as HTMLElement;
              const imageElement = element.querySelector(
                ".blog-image"
              ) as HTMLImageElement | null;
              if (imageElement) {
                imageElement.style.transform = "scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              const element = e.currentTarget as HTMLElement;
              const imageElement = element.querySelector(
                ".blog-image"
              ) as HTMLImageElement | null;
              if (imageElement) {
                imageElement.style.transform = "scale(1.0)";
              }
            }}
          >
            <Image
              width={326}
              height={450}
              quality={75}
              src={image || `/blog.jpg`}
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                transition: "0.3s ease-in-out"
              }}
              className="blog-image"
            />
          </Box>
          <Stack>
            <Heading
              className="event-heading"
              color={"#030d47"}
              fontSize={{ base: "sm", lg: "20px" }}
              fontFamily={"body"}
              _hover={{ color: "#0d6efd" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "center"
              }}
            >
              {title}
            </Heading>
            {isMounted && (
              <Text
                color={"#565872"}
                fontSize={"16px"}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "4",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "justify"
                }}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </Stack>
        </Box>
      </Flex>
    </Center>
  );
};
