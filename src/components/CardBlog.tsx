"use client";

import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiTwotoneCalendar } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

export const CardBlog = ({
  image,
  title,
  desc,
  path,
  date,
  imageH,
  preview,
  priority
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  date?: string;
  imageH?: string;
  tag?: string;
  bgTag?: string;
  preview?: boolean;
  priority?: boolean;
}) => {
  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      boxShadow="lg"
      borderRadius={"7px"}
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        bg={"white"}
        rounded={"sm"}
        overflow={"hidden"}
      >
        <Box>
          {!preview && (
            <Box
              bg={"white"}
              mx={-6}
              mb={4}
              pos={"relative"}
              aspectRatio={290 / 173}
              overflow={"hidden"}
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
              <Box>
                <Image
                  width={450}
                  height={350}
                  priority={priority}
                  fetchPriority={priority ? "high" : "auto"}
                  quality={75}
                  sizes="(max-width: 768px) 95vw, (max-width: 1280px) 450px, 400px"
                  src={image || `/blog.jpeg`}
                  style={{
                    maxHeight: imageH,
                    transition: "0.3s ease-in-out",
                    width: "100%"
                  }}
                  alt={title}
                  className="blog-image"
                />
              </Box>
            </Box>
          )}
          <Stack px={3}>
            <Box fontSize={"12px"} color={"#1a365d"}>
              <Flex>
                {" "}
                <Flex pr={3} alignItems={"center"}>
                  {" "}
                  Admin{" "}
                  <FaCircle
                    fontSize="8px"
                    color="green"
                    style={{ marginLeft: "4px" }}
                  />
                </Flex>{" "}
                <AiTwotoneCalendar color="#1a365d" fontSize="15px" />{" "}
                {date?.slice(5)}{" "}
              </Flex>
            </Box>
            <Heading
              color={"facebook.800"}
              as={"h3"}
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight={"600"}
              mt={2}
              _hover={{ color: "#0d6efd" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <Text
              color={"gray.500"}
              fontSize={".8rem"}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </Stack>
          <Button
            variant="link"
            colorScheme="#030D47"
            px={0}
            paddingX={3}
            fontWeight={600}
            _hover={{ textDecoration: "none", color: "#6f42c1" }}
            fontSize={"12px"}
          >
            Xem thêm{" "}
            <AiOutlineArrowRight
              color="#1a365d"
              fontSize="12px"
              style={{ marginLeft: "4px" }}
            />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export const CardBlogS = ({
  image,
  title,
  desc,
  path,
  date,
  imageH
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  tag?: string;
  bgTag?: string;
  date?: string;
  imageH?: string;
}) => {
  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <SimpleGrid columns={2} spacing={4} bg={"white"}>
        <GridItem colSpan={1}>
          <Box bg={"gray.100"} overflow={"hidden"}>
            <Image
              width={350}
              height={450}
              quality={75}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 300px"
              src={image || `/blog.jpeg`}
              style={{ maxHeight: imageH }}
              alt={title}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Stack>
            <Heading
              className="event-heading"
              color={"facebook.700"}
              fontSize={{ base: "sm", lg: "xl" }}
              fontFamily={"body"}
              fontWeight={"600"}
              _hover={{ color: "red.400" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <Text fontSize={"md"} pb={1} color={"gray.400"}>
              {date?.slice(5)}
            </Text>
            <Text
              color={"gray.500"}
              fontSize={".9rem"}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
