"use client";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Button
} from "@chakra-ui/react";
import { cleanContent } from "@/ultil/sanitizeHtml"; // Adjusting to etnu path
import Image from "next/image";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { keyframes } from "@emotion/react";
import { useModal } from "@/components/ModalContext";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export default function CustomAccordion({ data }: { data: any }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const router = useRouter();
  const { isOpen, onOpen } = useModal();

  return (
    <Box>
      <Accordion
        mt="30px"
        index={expandedIndex ?? undefined}
        onChange={(index) => setExpandedIndex(index as number | null)}
        allowToggle
        bg={"transparent"}
      >
        {data?.map((item: any, i: number) => (
          <AccordionItem
            key={i}
            border="none"
            borderRadius="20px"
            mb="30px"
            transition="all 0.3s ease"
            boxShadow={"0 0 15px rgba(0, 0, 0, 0.1)"}
            _hover={{
              boxShadow: "0 0 30px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-5px)"
            }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    border={isExpanded ? "1px #235094 solid" : "none"}
                    bg="white"
                    p="15px 0"
                    borderRadius="20px"
                    _hover={{ bg: "white" }}
                  >
                    <Box
                      display="flex"
                      flex="1"
                      textAlign="left"
                      alignItems="center"
                      gap="30px"
                    >
                      <Box
                        w="6px"
                        h="35px"
                        borderRightRadius="5px"
                        bg="#235094"
                      ></Box>
                      <Image
                        src="/ic.svg"
                        alt="icon"
                        width={25}
                        height={25}
                        style={{ objectFit: "contain" }}
                      />
                      <Text fontSize="20px" color="#252525" fontWeight={500}>
                        {item?.title || "Quản trị Kinh doanh"}
                      </Text>
                    </Box>

                    {isExpanded ? (
                      <IoMdArrowDropup
                        size={30}
                        color="#235094"
                        style={{ marginRight: "30px", transition: "all 0.3s" }}
                      />
                    ) : (
                      <IoMdArrowDropdown
                        size={30}
                        color="#235094"
                        style={{ marginRight: "30px" }}
                      />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel px="40px" py="40px" bg="#ebf8ff">
                  {item?.contents?.map((content: any, index: number) => (
                    <Box
                      key={index}
                      display="flex"
                      gap="15px"
                      p="15px"
                      mb="10px"
                      borderBottom={
                        index === item?.contents.length - 1 ? "none" : "1px"
                      }
                      borderStyle="dashed"
                      borderColor="#235094"
                      alignItems="center"
                    >
                      <Box fontSize={22}>
                        <FaCheckCircle color="#235094" />
                      </Box>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: cleanContent(content?.content || " abc")
                        }}
                      />
                    </Box>
                  ))}

                  <Button
                    bg="orange.500"
                    color="white"
                    _hover={{ bg: "orange.600" }}
                    fontSize={{ base: "14px", lg: "20px" }}
                    w={{ base: "140px", md: "220px", lg: "260px" }}
                    size={{ base: "xs", md: "lg" }}
                    onClick={() => router.push(item?.link || `/`)}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    transition={"0.25s cubic-bezier(0.2, 1, 0.3, 1)"}
                    animation={`${pulse} 1s infinite`}
                  >
                    Xem chi tiết
                  </Button>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      
      {/* Tu van mien phi button from Section3 left col */}
      <Box m="50px auto" w={"fit-content"}>
        <Button
          bg="orange.500"
          color="white"
          _hover={{ bg: "orange.600" }}
          w={"fit-content"}
          onClick={() => !isOpen && onOpen && onOpen()}
          fontSize={{ base: "14px", lg: "20px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          p={"15px 40px"}
          transition={"0.25s cubic-bezier(0.2, 1, 0.3, 1)"}
          animation={`${pulse} 1s infinite`}
        >
          tư vấn lộ trình học miễn phí
        </Button>
      </Box>
    </Box>
  );
}
