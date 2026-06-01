"use client";
import { FormMain } from "@/components/FormContact";
import { FormWrapper } from "@/components/FormWrapper";
import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export const Introduce = ({ section_2 }: { section_2: any }) => {
  return (
    <Box pt={{ base: "4", lg: "20" }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} maxW={"7xl"} margin={"0 auto"}>
        <Stack bg="White" height="full" padding={"22px"}>
          <Heading
            fontSize={{ base: "18px", md: "20px", lg: "34px" }}
            color={"#030d47"}
            fontWeight={700}
            as={"h1"}
          >
            {section_2?.title || "TNU – Elearning: Hệ Đại học từ xa "}
          </Heading>

          <Text
            fontSize={{ base: "16px", md: "md", lg: "16px" }}
            pb={{ lg: "5px" }}
            mt={"17px"}
            dangerouslySetInnerHTML={{
              __html: clean(
                section_2?.desc ||
                  "Cùng với sự phát triển mạnh mẽ của Công nghệ thông tin, việc ứng dụng công nghệ số vào lĩnh vực giáo dục là một xu hướng tất yếu. Vậy đại học trực tuyến mang lại cho bạn những lợi ích gì?"
              )
            }}
          />

          <List spacing={4} mt={"17px"}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#565872" />
              {section_2?.text_1 || "Tiết kiệm thời gian và chi phí"}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#565872" />
              {section_2?.text_2 ||
                "Bằng Đại học do Đại học Thái Nguyên cấp, không ghi hình thức đào tạo và được Bộ GD&DDT công nhận"}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#565872" />
              {section_2?.text_3 || "Đại học phù hợp với những người đi làm"}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#565872" />
              {section_2?.text_4 || "Mở ra cơ hội việc làm cho bạn"}
            </ListItem>
          </List>
        </Stack>
        <Stack paddingX={{ lg: "106px" }}>
          <FormWrapper title="Để lại thông tin" type="form-main" />
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
