"use client";

import dynamic from "next/dynamic";
const FormWrapper = dynamic(
  () => import("@/components/FormWrapper").then((m) => m.FormWrapper),
  { ssr: false }
);
const ModalBase = dynamic(
  () => import("@/components/Modal").then((m) => m.ModalBase),
  { ssr: false }
);
import { useModal } from "@/components/ModalContext";

import { keyframes } from "@emotion/react";
import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  VisuallyHidden,
  chakra,
  useColorModeValue
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { InputRes } from "../../components/InputRes";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");

  const { onOpen, onClose, isOpen, onToggle } = useModal();
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const getPageContent = async () => {
        try {
          const res = await fetch(`/api/content-page/?type=trang-chu`, {
            next: { revalidate: 300 }
          });
          if (!res.ok) {
            throw new Error(
              `Posts fetch failed with status: ${res.statusText}`
            );
          }
          const data = await res.json();
          setPageContent(data?.posts[0]);
        } catch (error) {
          console.error(error);
        }
      };

      const getForm = async () => {
        try {
          const res = await fetch(`/api/data-form/?type=form-poup`);
          if (!res.ok) {
            throw new Error(
              `Posts fetch failed with status: ${res.statusText}`
            );
          }
          const data = await res.json();
          const id = data?.id || "";
          id && setId(id);
          const href = data?.href || "";
          href && setHref(href);
        } catch (error) {
          console.error(error);
        }
      };

      getPageContent();
      getForm();
    }, 3500);

    return () => clearTimeout(timer);
  }, [id, href, isOpen]);
  return (
    <>
      <Box bg={"blue.900"} color={"white"} mt={"135px"}>
        <Container as={Stack} maxW={"7xl"} mb={"20px"}>
          <Flex
            justify="center"
            align="center"
            direction="column"
            pos="relative"
            padding="40px"
            top={{ lg: "-79px", base: "-117px", md: "-105px" }}
            boxShadow="dark-lg"
            rounded="md"
            bg="white"
            textAlign="center"
          >
            <Box>
              <Heading size="md" mb={4} color="#030d47">
                {page_content?.acf?.section_8?.top?.title ||
                  "Đăng ký nhận tư vấn lộ trình học và học phí"}
              </Heading>
              <Text size="md" mb={4} color="#565872">
                {page_content?.acf?.section_8?.top?.sub_title ||
                  "Để lại số điện thoại/zalo để được tư vấn miễn phí chương trình học tại Đại Học Thái Nguyên"}
              </Text>
              <InputRes
                label="Đăng ký ngay"
                onClick={() => onToggle && onToggle()}
              />
            </Box>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 5 }}
            spacing={8}
            mt={{ lg: "-25px", base: "-90px" }}
          >
            <GridItem colSpan={{ base: 1, sm: 2 }}>
              <Stack align={"flex-start"}>
                <ListHeader>
                  {page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.title || "Thông tin liên hệ"}
                </ListHeader>
                <Box as={Link} href={"#"}>
                  {page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.head_1 || "Văn phòng tuyển sinh:"}
                </Box>
                <UnorderedList>
                  <ListItem>
                    {page_content?.acf?.section_8?.main?.block_12?.block_1
                      ?.list_1 ||
                      "Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Thành Phố Hà Nội"}
                  </ListItem>
                  <ListItem>
                    {page_content?.acf?.section_8?.main?.block_12?.block_1
                      ?.list_2 ||
                      "Hồ Chí Minh: Số 91 Ký Con, phường Nguyễn Thái Bình, Quận 1, TP Hồ Chí Minh"}
                  </ListItem>
                </UnorderedList>
                <Box
                  as={Link}
                  href={`tel:${page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.hotline || "0914709118"
                    }`}
                >
                  {`Hotline: ${page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.hotline || "0914709118"
                    }`}
                </Box>
                <Box
                  as={Link}
                  href={`mailto:${page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.email || "daihoctructuyen@tnu.edu.vn"
                    }`}
                >
                  {`Email: ${page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.email || "daihoctructuyen@tnu.edu.vn"
                    }`}
                </Box>
                <Box
                  as={Link}
                  href={
                    page_content?.acf?.section_8?.main?.block_12?.block_1
                      ?.link_1 ||
                    "https://www.facebook.com/groups/800071498531146?locale=vi_VN"
                  }
                  textDecor={"underline"}
                  target="_blank"
                >
                  {page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.contact_1 ||
                    "Group Facebook: daihocthainguyen - elearning"}
                </Box>
                <Box
                  as={Link}
                  href={
                    page_content?.acf?.section_8?.main?.block_12?.block_1
                      ?.link_2 ||
                    "https://www.facebook.com/TNUElearning?locale=vi_VN"
                  }
                  textDecor={"underline"}
                  target="_blank"
                >
                  {page_content?.acf?.section_8?.main?.block_12?.block_1
                    ?.contact_2 || "Fanpage: daihocthainguyen - elearning"}
                </Box>
              </Stack>
            </GridItem>

            <Stack align={"flex-start"}>
              <ListHeader>
                {page_content?.acf?.section_8?.main?.block_12?.block_2?.title ||
                  "Hỗ trợ"}
              </ListHeader>
              <Box
                as={Link}
                href={
                  page_content?.acf?.section_8?.main?.block_12?.block_2
                    ?.link_1 || "/gioi-thieu"
                }
                target="_blank"
              >
                {page_content?.acf?.section_8?.main?.block_12?.block_2
                  ?.list_1 || "Về chúng tôi"}
              </Box>
              <Box
                as={Link}
                href={
                  page_content?.acf?.section_8?.main?.block_12?.block_2
                    ?.link_2 || "/lich-khai-giang"
                }
                target="_blank"
              >
                {page_content?.acf?.section_8?.main?.block_12?.block_2
                  ?.list_2 || "Lịch khai giảng"}
              </Box>
              <Box
                as={Link}
                href={
                  page_content?.acf?.section_8?.main?.block_12?.block_2
                    ?.link_3 || "/dang-ky"
                }
                target="_blank"
              >
                {page_content?.acf?.section_8?.main?.block_12?.block_2
                  ?.list_3 || "Đăng ký"}
              </Box>
              <Box
                as={Link}
                href={
                  page_content?.acf?.section_8?.main?.block_12?.block_2
                    ?.link_4 || "/tin-tuc"
                }
                target="_blank"
              >
                {page_content?.acf?.section_8?.main?.block_12?.block_2
                  ?.list_4 || "Tin tức"}
              </Box>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>
                {page_content?.acf?.section_8?.main?.block_34?.block_3?.title ||
                  "Hợp tác tuyển sinh"}
              </ListHeader>
              <Link href={"https://timdoitac.aum.edu.vn/"} target="_blank">
                <Image
                  src={
                    page_content?.acf?.section_8?.main?.block_34?.block_3
                      ?.image || "/timdoitac.jpg"
                  }
                  width={150}
                  height={100}
                  alt="Tìm đối tác"
                  style={{
                    borderRadius: "6px",
                    width: "150px",
                    height: "auto"
                  }}
                />
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>
                {page_content?.acf?.section_8?.main?.block_34?.block_4?.title ||
                  "Mạng xã hội"}
              </ListHeader>
              <Stack direction={"row"} spacing={6}>
                <Link
                  href={
                    page_content?.acf?.section_8?.main?.block_34?.block_4
                      ?.link_facebook || "https://www.facebook.com/TNUElearning"
                  }
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook color="white" fontSize="30px" />
                </Link>
                <Link
                  href={
                    page_content?.acf?.section_8?.main?.block_34?.block_4
                      ?.link_zalo || "https://zalo.me/0914709118"
                  }
                  target="_blank"
                  aria-label="Zalo"
                >
                  <SiZalo color="white" fontSize="30px" />
                </Link>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        {isOpen && <FormWrapper title="Để lại thông tin" />}
      </ModalBase>
    </>
  );
};
