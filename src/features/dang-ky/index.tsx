/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FormWrapper } from "@/components/FormWrapper";
import { ScrollView } from "@/components/ScrollView";
import { Layout } from "@/layouts/layoutNganh";
import {
  Box,
  Container,
  GridItem,
  HStack,
  Heading,
  ListItem,
  SimpleGrid,
  UnorderedList,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const dangky = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=dang-ky`, {
          next: { revalidate: 300 }
        });
        if (!res.ok) {
          throw new Error(
            `content fetch failed with status: ${res.statusText}`
          );
        }
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getPageContent();
  }, []);
  return (
    <>
      <Layout
        titleNganh={page_content?.acf?.title || "Đăng ký"}
        path="dang-ky"
        title={page_content?.acf?.title || "Đăng ký"}
      />
      <Box>
        <Container maxW={"7xl"} py="60px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"16px"}>
            <GridItem
              border={"1px solid"}
              borderColor={"gray.400"}
              p={"16px"}
              py={20}
            >
              <Heading
                as={"h2"}
                size={{ base: "md", lg: "lg" }}
                textAlign={"center"}
                pb={"40px"}
              >
                {page_content?.acf?.head ||
                  "Đăng ký nhận tư vấn và nhận lộ trình học nhanh chóng"}
              </Heading>
              <VStack align={"start"} fontWeight={500} spacing={"16px"}>
                <HStack>
                  <VStack align={"start"}>
                    <UnorderedList spacing={5} textAlign={"justify"}>
                      <ListItem ml={"38px"}>
                        {page_content?.acf?.text_1 ||
                          "Chương trình do Đại học Thái Nguyên đào tạo và cấp bằng, được Bộ GD&ĐT công nhận"}
                      </ListItem>
                      <ListItem ml={"38px"}>
                        {page_content?.acf?.text_2 ||
                          "Thời gian học nhanh, tiết kiệm chi phí. Học 100% Online mọi lúc mọi nơi"}
                      </ListItem>
                      <ListItem ml={"38px"}>
                        {page_content?.acf?.text_3 ||
                          "Chỉ xét tuyển hồ sơ đầu vào. Không phải thi tuyển"}
                      </ListItem>
                      <ListItem ml={"38px"}>
                        {page_content?.acf?.text_4 ||
                          "Đối tượng xét tuyển: Người đã có bằng tốt nghiệp Cao đẳng, Đại học"}
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </HStack>
              </VStack>
            </GridItem>
            <GridItem border={"1px solid"} borderColor={"gray.400"} p={"16px"}>
              <ScrollView>
                <FormWrapper type="form-main" title="Để lại thông tin" />
              </ScrollView>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}></GridItem>
          </SimpleGrid>
        </Container>
        <ScrollView>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7609480745314!2d105.77113527669943!3d21.04224898731216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1695417775713!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: "none" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </ScrollView>
      </Box>
    </>
  );
};
