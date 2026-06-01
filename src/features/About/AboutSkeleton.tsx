"use client";

import { Box, Container, Skeleton, SkeletonText } from "@chakra-ui/react";
import { Layout } from "@/layouts/layoutNganh";

export const AboutSkeleton = () => {
  return (
    <>
      <Layout titleNganh="Đang tải..." path="#" title="Đang tải..." />
      <Box color={"blue.800"}>
        <Container maxW={"7xl"} py={20}>
          <Skeleton height="32px" width="300px" mx="auto" mb="16px" pb="16px" />
          <Skeleton
            height="24px"
            width={{ base: "100%", md: "400px" }}
            py="16px"
            mb="10px"
          />
          <SkeletonText mt="2" noOfLines={4} spacing="4" skeletonHeight="4" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            py="24px"
          >
            <Skeleton
              height={{ base: "250px", md: "436px" }}
              width="600px"
              maxW="100%"
            />
            <Skeleton height="20px" width="200px" mt={4} />
          </Box>
          <Skeleton height="24px" width="150px" py="16px" mb="10px" />
          <SkeletonText mt="2" noOfLines={3} spacing="4" skeletonHeight="4" />
          <Skeleton height="24px" width="180px" py="16px" mb="10px" mt={4} />
          <SkeletonText mt="2" noOfLines={3} spacing="4" skeletonHeight="4" />
          <Skeleton height="24px" width="160px" py="16px" mb="10px" mt={4} />
          <Skeleton height="20px" width="300px" />
          <Skeleton height="24px" width="100px" py="16px" mb="10px" mt={4} />
          <Skeleton height="20px" width="400px" maxW="100%" />
          <Skeleton height="24px" width="180px" py="16px" mb="10px" mt={4} />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="24px" width="150px" py="16px" mb="10px" mt={4} />
          <SkeletonText mt="2" noOfLines={6} spacing="4" skeletonHeight="4" />
        </Container>
      </Box>
    </>
  );
};
