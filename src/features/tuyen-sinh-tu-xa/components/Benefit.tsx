import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { CertificateCard } from "./CertificateCard";

type CertificateType = {
  header: string;
  title: string;
  description: string;
  headerColor?: string;
};

export const Benefit = ({ benefit }: { benefit: any }) => {
  const certificates: CertificateType[] = [
    {
      header: benefit?.card_1?.header || "100%",
      title: benefit?.card_1?.title || "Giảng Viên Sở Hữu Bằng Cấp Quốc Tế.",
      description: benefit?.card_1?.desc || "Dạy dẫn chuyên môn kinh nghiệm giảng dạy tại nhiều trường đại học nổi tiếng trên thế giới...",
    },
    {
      header: benefit?.card_2?.header || "100%",
      title: benefit?.card_2?.title || "Sinh Viên Tốt Nghiệp.",
      description: benefit?.card_2?.desc || "Tìm được việc làm hoặc học lên cao học trong vòng 3 tháng.",
    },
    {
      header: benefit?.card_3?.header || "400+",
      title: benefit?.card_3?.title || "Đối Tác Trong Nước Và Quốc Tế.",
      description: benefit?.card_3?.desc || "Cung cấp hàng trăm cơ hội thực tập ngay từ năm nhất.",
    },
    {
      header: benefit?.card_4?.header || "/icon.png",
      title: benefit?.card_4?.title || "Bằng Cấp Anh Quốc.",
      description: benefit?.card_4?.desc || "Cấp bằng bởi 4 trường đại học...",
      headerColor: "",
    },
    {
      header: benefit?.card_5?.header || "/icon.png",
      title: benefit?.card_5?.title || "Khuôn Viên Học Tập.",
      description: benefit?.card_5?.desc || "Khuôn viên học tập đạt chuẩn QS 5 sao.",
      headerColor: "",
    },
    {
      header: benefit?.card_6?.header || "/icon.png",
      title: benefit?.card_6?.title || "Chương Trình Nâng Cao Năng Lực.",
      description: benefit?.card_6?.desc || "Chương trình được thiết kế đặc biệt cho sinh viên...",
      headerColor: "",
    },
  ];

  return (
    <Container maxW="7xl" py={16}>
      <Heading as="h2" size="xl" mb={8} display="flex" alignItems="center">
        <Text as="span" color="red.600" mr={2}>★</Text>
        {benefit?.title || "TẠI SAO NÊN LỰA CHỌN CHƯƠNG TRÌNH NÀY."}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {certificates.map((item, index) => (
          <CertificateCard
            key={index}
            header={item.header}
            title={item.title}
            description={item.description}
            headerColor={item.headerColor}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
