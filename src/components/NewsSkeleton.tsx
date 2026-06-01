import {
  Box,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack
} from "@chakra-ui/react";

export const NewsSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"8"}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Box
          key={i}
          borderWidth="1px"
          borderRadius="xl"
          overflow="hidden"
          bg="white"
          shadow="sm"
          display="flex"
          flexDirection="column"
        >
          {/* Thumbnail Skeleton */}
          <Skeleton height="240px" width="100%" />

          {/* Content Wrapper */}
          <Box p={5}>
            <Stack spacing={4}>
              {/* Date/Tag line */}
              <Skeleton height="16px" width="30%" />

              {/* Title lines */}
              <Box>
                <Skeleton height="24px" width="95%" mb={2} />
                <Skeleton height="24px" width="70%" />
              </Box>

              {/* Excerpt lines */}
              <SkeletonText
                mt="2"
                noOfLines={3}
                spacing="3"
                skeletonHeight="3"
              />
            </Stack>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};
