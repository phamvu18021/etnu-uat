import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import Image from "next/image";

export const Benefit = ({ list_benefit }: { list_benefit: any }) => {
  interface CardProps {
    heading: string;
    description: string;
    image: string;
  }

  const Card = ({ heading, description, image }: CardProps) => (
    <Box>
      <Flex align={"start"} py={"20px"}>
        <Box w={"60px"} h={"60px"} flexShrink={0}>
          <Image src={image} alt={heading} width={60} height={60} />
        </Box>

        <Stack align={"start"} spacing={2} px={"20px"} color={"white"}>
          <Box h={"100px"}>
            <Heading fontWeight={600} size="md">
              {heading}
            </Heading>
            <Text mt={1} fontWeight={500} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );

  const cardsData = [
    {
      heading: list_benefit?.item_1?.title || "Học online 100%",
      image: list_benefit?.item_1?.iamge || "/02.webp",
      description:
        list_benefit?.item_1?.desc ||
        "Học mọi lúc, mọi nơi; tiết kiệm thời gian và chi phí"
    },
    {
      heading: list_benefit?.item_2?.title || "Thời gian đào tạo",
      image: list_benefit?.item_2?.iamge || "/001.webp",
      description:
        list_benefit?.item_2?.desc ||
        "Thời gian đào tạo từ 2-2,5 năm tùy đối tượng đầu vào"
    },
    {
      heading: list_benefit?.item_3?.title || "Phương thức tuyển sinh",
      image: list_benefit?.item_3?.iamge || "/mu.webp",
      description:
        list_benefit?.item_3?.desc ||
        "Xét tuyển hồ sơ đăng ký (không thi tuyển)"
    },
    {
      heading: list_benefit?.item_4?.title || "Bằng tốt nghiệp Đại học",
      image: list_benefit?.item_4?.iamge || "/05.webp",
      description:
        list_benefit?.item_4?.desc || "Bằng có giá trị tương đương hệ chính quy"
    }
  ];

  return (
    <Box as="section" w="100%" bgColor={"#1E4688"} py={10}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              heading={card.heading}
              image={card.image}
              description={card.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
