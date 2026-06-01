"use client";
import { Box, Container, GridItem, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { FormWrapper } from "@/components/FormWrapper";
import { keyframes } from "@emotion/react";
import { FaCheckCircle } from "react-icons/fa";
import CustomAccordion from "./CustomAccordion";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(221, 107, 32, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(221, 107, 32, 0); }
`;
const pulseIcon = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); box-shadow: 0 0 0 10px rgba(221, 107, 32, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(221, 107, 32, 0); }
`;

export const SectionCustom = ({ data, accordionData }: { data: any, accordionData: any }) => {
  return (
    <Box bgColor={"white"}>
      <Container maxW={"7xl"} py={"40px"}>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={10}
          gridTemplateColumns={{ base: "1", md: "1", xl: "5fr 3fr" }}
        >
          {/* Left Column - Accordion */}
          <GridItem>
            <CustomAccordion data={accordionData} />
          </GridItem>

          {/* Right Column - Form from Section2 */}
          <GridItem color="#235094">
            <Box border="2px solid" borderColor="orange.500" rounded="md" w="full" maxW="100%">
              <Box
                px={4}
                py={4}
                roundedTop="md"
                bgGradient="linear-gradient(to right, orange.400, orange.500)"
              >
                <Box display="flex" justifyContent="center">
                  <Text
                    w="full"
                    maxW={{ base: "100%", md: "380px" }}
                    fontSize={{ base: "18px", md: "24px" }}
                    fontWeight={600}
                    lineHeight="1.2"
                    textAlign="center"
                    mb={2}
                    color="#333333"
                    textShadow="4xl"
                    wordBreak="break-word"
                  >
                    {data?.title || "ĐĂNG KÝ NGAY ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ."}
                  </Text>
                </Box>
                <Text
                  textAlign="center"
                  fontWeight={600}
                  fontSize={{ base: "14px", md: "18px" }}
                  lineHeight="1.2"
                  color="white"
                  textShadow="xl"
                  px={2}
                >
                  {data?.desc || "Đăng ký trước thời gian kết thúc hoặc số lượng học viên đạt giới hạn."}
                </Text>
              </Box>

              <Box px={{ base: 2, md: 4 }} pt={4} w="full" maxW="100%">
                <FormWrapper />
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
