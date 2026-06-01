import { HeadSection } from "@/components/HeadSection";
import { useSize } from "@/hooks/useSizeWindow";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color:;
  }
  .swiper-pagination-bullet-active {
    background-color: #030d47;
  }
  .swiper-pagination {
    position: relative;
    top: 6px;
    bottom: 0;
  }
`;
export interface CardProps {
  heading: string;
  description: string;
  image: string;
  author: string;
  profession: string;
}
export const Comment = ({ section_6 }: { section_6: any }) => {
  const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(3, 13, 71, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 820px) {
      top: -400px;
    }
    @media (max-width: 420px) {
      top: -210px;
    }
  `;

  const { size } = useSize();

  const cardsData = [
    {
      heading: "",
      image: section_6?.list_reviews?.item_1?.image || "/plinh.jpg",
      description:
        section_6?.list_reviews?.item_1?.review ||
        "“.Học tập trực tuyến mang nhiều ưu điểm vượt trội đã làm thay đổi mạnh mẽ khả năng tự học nhằm đáp ứng chương trình học tập. Nhà trường luôn tạo điều kiện cho học viên có thể sử dụng kho tài liệu phong phú nhằm nâng cao hiệu quả học tập”",
      author: section_6?.list_reviews?.item_1?.name || "Nguyễn Phương Linh",
      profession:
        section_6?.list_reviews?.item_1?.major || "Nhân viên kinh doanh"
    },
    {
      heading: "",
      image: section_6?.list_reviews?.item_2?.image || "/ha.jpg",
      description:
        section_6?.list_reviews?.item_2?.review ||
        "“.Chương trình đào tạo giúp tôi có thêm nhiều kiến thức hay. Tôi có thể nghiên cứu lại kiến thức bất kỳ lúc nào nhờ nguồn giáo trình, tài liệu phong phú và thời gian học linh động”",
      author: section_6?.list_reviews?.item_2?.name || "Đinh Thu Hà",
      profession: section_6?.list_reviews?.item_2?.major || "Nhân viên Markting"
    },
    {
      heading: "",
      image: section_6?.list_reviews?.item_3?.image || "/ctrang.jpg",
      description:
        section_6?.list_reviews?.item_3?.review ||
        "“.Hệ đào tạo đại học từ xa của trường giúp tôi tiết kiệm được rất nhiều thời gian và chi phí bởi vì tôi không cần phải đến tận trường để học. Tôi có thể theo dõi video bài giảng để tự học mọi lúc mọi nơi mà tôi muốn”",
      author: section_6?.list_reviews?.item_3?.name || "Nguyễn Thị Trang",
      profession: section_6?.list_reviews?.item_3?.major || "Trưởng phòng "
    }
  ];

  return (
    <Box bgSize="cover" bgRepeat={"no-repeat"} position="relative">
      <Image
        alt=""
        src={"/bg.webp"}
        quality={80}
        fill
        sizes="100vw"
        loading="lazy"
        style={{
          objectFit: "cover",
          zIndex: "-1"
        }}
      />
      <ImageOverlay />

      <Container maxW={"7xl"} pb={"10px"} py={{ lg: "10", base: "0" }}>
        <HeadSection
          title={
            section_6?.title ||
            "Mọi người nói gì về Đại học Thái Nguyên hệ đại học từ xa"
          }
          subtitle=""
          desc=""
        />
        <SwiperContainer>
          <Swiper
            slidesPerView={size.width > 768 ? 2 : 1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            pagination={{
              el: ".swiper-pagination",
              clickable: true
            }}
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index}>
                <Card
                  key={index}
                  heading={card.heading}
                  image={card.image}
                  description={card.description}
                  author={card.author}
                  profession={card.profession}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </SwiperContainer>
      </Container>
    </Box>
  );
};
export const Card = ({
  heading,
  description,
  image,
  author,
  profession
}: CardProps) => (
  <Box
    overflow="hidden"
    p={{ base: "20px 30px 15px", md: "20px 30px 15px", lg: "28px 30px 25px" }}
    bg="white"
    w="100%"
    h={{ base: "auto", md: "auto", lg: "300px" }}
    borderRadius={"7px"}
  >
    <Flex
      alignItems="center"
      flexDir={{ base: "column", md: "column", lg: "row" }}
    >
      <Stack spacing={{ lg: 2, base: 5 }} p="20px" color="#565872">
        <Box>
          <Heading size="18px">{heading}</Heading>
          <Text
            mt={1}
            fontSize="18px"
            h={{ lg: "140px", base: "auto" }}
            textAlign={"justify"}
          >
            {description}
          </Text>
        </Box>
        <Flex alignItems="center">
          <Box w="70px" h="70px" borderRadius="50%" overflow="hidden">
            <Image src={image} alt={heading} width={250} height={300} />
          </Box>
          <Flex flexDirection={"column"}>
            <Text
              ml={{ base: "3", md: "3" }}
              fontSize="18px"
              color="blue.900"
              fontWeight={700}
            >
              {author}
            </Text>
            <Text ml={{ base: "3", md: "3" }} fontSize="16px" color="#565872">
              {profession}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
    <Stack
      pos="relative"
      left={{ base: "0", md: "433px" }}
      top={{ base: "0", md: "-59px" }}
      display={{ lg: "block", md: "block", base: "none" }}
    >
      <Image src="/bak.webp" width={146} height={104} alt="" />
    </Stack>
  </Box>
);
