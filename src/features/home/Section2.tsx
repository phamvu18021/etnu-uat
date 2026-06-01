import { keyframes } from "@emotion/react";
import { FaCheckCircle } from "react-icons/fa";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(254, 140, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(254, 140, 0, 0);
  }
`;
const pulseIcon = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 0 10px rgba(254, 140, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(254, 140, 0, 0);
  }
`;

import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Text,
  Heading
} from "@chakra-ui/react";
import { FormWrapper } from "@/components/FormWrapper";
import dynamic from "next/dynamic";
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

export const Section2 = ({ data }: any) => {
  return (
    <Box bgColor={"white"}>
      <Container maxW={"7xl"} py={"40px"}>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={10}
          gridTemplateColumns={{ base: "1", md: "1", xl: "5fr 3fr" }}
        >
          <GridItem color={"white"}>
            <Text
              as="h1"
              fontSize={{ lg: "40px", md: "36px", base: "20px" }}
              fontWeight={700}
              color="#00529e"
              textAlign="center"
            >
              <Box as="span" display="block">
                {data?.title_1 || "TNU – Elearning: Hệ Đại học từ xa"}
              </Box>

              <Box as="span" display="block">
                {data?.title_2 || "Tuyển sinh 2026"}
              </Box>
            </Text>

            <Box m={"0 auto"} w={"fit-content"}>
              {data?.list_sub?.map((item: any, index: number) => (
                <Box
                  key={index}
                  display="flex"
                  gap="15px"
                  p="15px"
                  mt={"10px"}
                  borderBottom={
                    index === data?.list_sub?.length - 1 ? "none" : "2px"
                  }
                  borderStyle="dashed"
                  borderColor="gray.300"
                  alignContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    fontSize={{ base: "22px", md: "26px" }}
                    animation={`${pulseIcon} 1s infinite`}
                  >
                    <FaCheckCircle color="#00529e" />
                  </Box>
                  <Text
                    textAlign={"left"}
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="semibold"
                    color="black"
                  >
                    {item?.text ||
                      "Hơn 16 năm kinh nghiệm, đào tạo thành công 800.000+"}
                  </Text>
                </Box>
              ))}
            </Box>
          </GridItem>
          <GridItem color="#00529e">
            <Box
              padding={"4"}
              border="2px solid #1E4688"
              rounded="md"
              w="full"
              maxW="100%"
            >
              <ScrollView>
                <FormWrapper title="ĐĂNG KÝ NHẬN TƯ VẤN" type="form-main" />
              </ScrollView>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
