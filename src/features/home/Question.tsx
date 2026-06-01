import { HeadSection } from "@/components/HeadSection";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import { GiSpookyHouse } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export const AccSupport = ({ accSupport }: { accSupport: any }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accSupport.map((acc: any, index: number) => (
        <AccordionItem
          border={"none"}
          key={index}
          py={"12px"}
          color={"#030d47"}
        >
          <AccordionButton
            bg={"rgba(174, 187, 255, 0.2)"}
            py="16px"
            rounded={"md"}
            _hover={{ background: "#030d47", color: "white" }}
          >
            <Box flex="1" textAlign="left">
              <HStack>
                {acc.icon}
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} color={"#565872"}>
            {acc.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Question = ({ section_7 }: { section_7: any }) => {
  const accSupport = [
    {
      icon: <GiSpookyHouse />,
      title:
        section_7?.main?.list_questions?.item_1?.questions ||
        "Chương trình cử nhân trực tuyến phù hợp với những đối tượng nào? ",
      content:
        section_7?.main?.list_questions?.item_1?.answer ||
        "Chương trình cử nhân trực tuyến mang đến cơ hội học tập cho tất cả mọi người. Bạn là người bận rộn, đang đi học, đã đi làm, hay đi công tác… mong muốn bổ sung, nâng cao kiến thức đều có thể tham gia học trực tuyến."
    },

    {
      icon: <SlCalender />,
      title:
        section_7?.main?.list_questions?.item_2?.questions ||
        "Đối tượng tuyển sinh là gì? ",
      content:
        section_7?.main?.list_questions?.item_2?.answer ||
        "Người đã có bằng tốt nghiệp Cao đẳng, Đại học"
    },

    {
      icon: <MdOutlineLocalShipping />,
      title:
        section_7?.main?.list_questions?.item_3?.questions ||
        "Chương trình học có phải thi tuyển đầu vào không/",
      content:
        section_7?.main?.list_questions?.item_3?.answer ||
        "Chương trình chỉ Xét tuyển, không thi tuyển"
    }
  ];
  return (
    <Box pb={"48px"} pt={"24px"} mb={"100px"}>
      <Container maxW={"7xl"}>
        <HeadSection
          title={
            section_7?.title ||
            "Những câu hỏi thường gặp về Đại học Thái Nguyên hệ đại học từ xa"
          }
          subtitle="hỗ trợ"
          desc={
            section_7?.sub_title ||
            "Đại học Thái Nguyên hỗ trợ bạn nhiều lợi ích"
          }
        />
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"36px"} pt={"24px"}>
          <GridItem>
            <Image
              src={section_7?.main?.image || `/faq-2.webp`}
              alt="Kết hợp online và oflinet"
              width={600}
              height={400}
              style={{ borderRadius: "12px" }}
            />
            {/* <Text fontWeight={"bold"} textAlign={"center"} py={5}>
              Câu hỏi - Đại học Thái Nguyên
            </Text> */}
          </GridItem>
          <GridItem>
            <AccSupport accSupport={accSupport} />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
