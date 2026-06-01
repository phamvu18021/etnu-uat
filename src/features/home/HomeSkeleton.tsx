import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Flex
} from "@chakra-ui/react";

export const BannerSkeleton = () => (
  <Skeleton height={{ base: "300px", lg: "500px" }} width="100%" />
);

export const Section2Skeleton = () => (
  <Container maxW={"7xl"} py={"40px"}>
    <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={10}>
      <Stack spacing={4}>
        <Skeleton height="40px" width="70%" />
        <Skeleton height="30px" width="50%" />
        <Stack spacing={2}>
          {[1, 2, 3, 4].map((i) => (
            <Flex key={i} align="center" gap={4}>
              <SkeletonCircle size="6" />
              <Skeleton height="20px" flex={1} />
            </Flex>
          ))}
        </Stack>
      </Stack>
      <Skeleton height="300px" rounded="md" />
    </SimpleGrid>
  </Container>
);

export const CategorySkeleton = () => (
  <Container maxW="7xl" py={10}>
    <Skeleton height="40px" width="300px" mb={10} mx="auto" />
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Box key={i} p={5} shadow="md" borderWidth="1px" rounded="md">
          <Skeleton height="200px" mb={4} />
          <SkeletonText noOfLines={3} spacing={4} />
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

export const EventSkeleton = () => (
  <Container maxW="7xl" py={10}>
    <Skeleton height="40px" width="200px" mb={6} />
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {[1, 2].map((i) => (
        <Stack key={i} spacing={4}>
          <Skeleton height="30px" width="150px" />
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
            {[1, 2].map((j) => (
              <Box key={j} border="1px" borderColor="gray.100" p={2}>
                <Skeleton height="150px" mb={2} />
                <SkeletonText noOfLines={2} />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      ))}
    </SimpleGrid>
  </Container>
);

export const BenefitSkeleton = () => (
  <Box bgColor="#1E4688" py={10}>
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {[1, 2, 3, 4].map((i) => (
          <Flex key={i} align="center" gap={4}>
            <SkeletonCircle size="20" />
            <Stack flex={1}>
              <Skeleton height="20px" width="80%" />
              <Skeleton height="15px" width="60%" />
            </Stack>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export const QuestionSkeleton = () => (
  <Container maxW="7xl" py={10}>
    <Skeleton height="40px" width="300px" mb={6} />
    <Stack spacing={4}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton key={i} height="50px" />
      ))}
    </Stack>
  </Container>
);
