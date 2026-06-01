"use client";

import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const CardMets = ({ image, desc }: { image?: string; desc: string }) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Center
      style={{ textDecoration: "none" }}
      pos={"relative"}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-4px)" }}
      className="card-blog"
      h={"100%"}
      paddingTop={{ base: "10px", lg: "30px" }}
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        maxW={"445px"}
        w={"full"}
        bg={"white"}
        overflow={"hidden"}
        h={"100%"}
      >
        <Box>
          <Box bg={"gray.100"} pos={"relative"}>
            <Image
              width={600}
              height={350}
              src={image || `/blog.jpg`}
              priority
              alt={""}
            />
          </Box>
          <Stack>
            {isMounted && (
              <Text
                color={"#1d376c"}
                fontSize={"1.25rem"}
                fontWeight={500}
                lineHeight={"1.6"}
                mt={"15px"}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </Stack>
        </Box>
      </Flex>
    </Center>
  );
};
