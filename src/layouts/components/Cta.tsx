"use client";

import { BtnEmail, BtnMes, BtnPhone, BtnZalo } from "@/components/BtnCTA";
import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

export const CTA = () => {
  const [page_content, setPageContent] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false }) ?? false;

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=cta`, {
          next: { revalidate: 300 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
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
      {/* Nút toggle mobile */}
      {isMobile && (
        <IconButton
          icon={isOpen ? <FiX /> : <FiMessageSquare />}
          aria-label={isOpen ? "Đóng liên hệ" : "Mở liên hệ"}
          onClick={() => setIsOpen(!isOpen)}
          bg="blue.600"
          color="white"
          size="lg"
          pos="fixed"
          bottom="100px"
          right="0"
          zIndex={99}
          borderRadius="50% 0 0 50%"
          _hover={{ bg: "blue.700" }}
        />
      )}
      <Box
        pos="fixed"
        top={{ lg: "50%", base: "55%" }}
        right="0"
        zIndex={5}
        className="CTA"
      >
        {/* Form luôn hiện */}
        <Flex
          height="160px"
          width="200px"
          alignItems="center"
          position="absolute"
          top="-108%"
          left="-105%"
        >
          <BtnEmail label={page_content?.acf?.form_title || "Tư vấn ngay"} />
        </Flex>

        {/* Các nút CTA */}
        {(!isMobile || isOpen) && (
          <VStack gap={0.5} alignItems="flex-end">
            <BtnZalo
              label={page_content?.acf?.email_title || "Tư vấn ngay"}
              link={
                page_content?.acf?.link_mail || "https://zalo.me/0914709118"
              }
            />
            <BtnPhone
              label={page_content?.acf?.phone || "0914709118"}
              link={page_content?.acf?.link_phone || "0914709118"}
            />
            <BtnMes
              label={page_content?.acf?.messenger || "Messenger"}
              link={
                page_content?.acf?.link_messenger ||
                "https://www.facebook.com/TNUElearning"
              }
            />
          </VStack>
        )}
      </Box>
    </>
  );
};
