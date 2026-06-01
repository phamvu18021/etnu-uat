"use client";

import { CardCat } from "@/components/CardCat";
import { HeadSection } from "@/components/HeadSection";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";

export const Categorys = ({ section_3 }: { section_3: any }) => {
  const categotys = [
    {
      image: section_3?.branch1_3?.branch_1?.image || "/1.png",
      path:
        `/${section_3?.branch1_3?.branch_1?.link}` ||
        "/nganh-cong-nghe-thong-tin",
      title:
        section_3?.branch1_3?.branch_1?.title || "Ngành Công nghệ thông tin",
      desc:
        section_3?.branch1_3?.branch_1?.desc ||
        "Học ngành Công nghệ thông tin học viên có thể nghiên cứu chuyên sâu về Khoa học máy tính, Công nghệ phần mềm, Kỹ thuật máy tính, Hệ thống thông tin, Mạng máy tính và truyền thông, An toàn thông tin mạng"
    },
    {
      image: section_3?.branch1_3?.branch_2?.image || "/2.png",
      path:
        `/${section_3?.branch1_3?.branch_2?.link}` ||
        "/nganh-dien-tu-vien-thong",
      title:
        section_3?.branch1_3?.branch_2?.title || "Ngành Điện tử viễn thông",
      desc:
        section_3?.branch1_3?.branch_2?.desc ||
        "Ngành điện tử viễn thông là ngành sử dụng những công nghệ tiên tiến, những công nghệ hiện đại của thời địa 4.0 những công nghệ này giúp ích rất nhiều trong hoạt động của con người,"
    },
    {
      image: section_3?.branch1_3?.branch_3?.image || "/3.png",
      path:
        `/${section_3?.branch1_3?.branch_3?.link}` ||
        "/nganh-quan-tri-kinh-doanh",
      title:
        section_3?.branch1_3?.branch_3?.title || "Ngành Quản trị kinh doanh",
      desc:
        section_3?.branch1_3?.branch_3?.desc ||
        "Ngành Quản trị kinh doanh chuẩn bị cho người học những năng lực cần thiết cho việc quản lý các loại hình tổ chức khác nhau, từ các doanh nghiệp cho đến các đơn vị thuộc khu vực"
    },
    {
      image: section_3?.branch4_6?.branch_4?.image || "/4.png",
      path: `/${section_3?.branch4_6?.branch_4?.link}` || "nganh-luat-kinh-te",
      title: section_3?.branch4_6?.branch_4?.title || "Ngành Luật kinh tế",
      desc:
        section_3?.branch4_6?.branch_4?.desc ||
        "Chương trình đào tạo trực tuyến ngành Luật Kinh tế cung cấp cho học viên kiến thức chuyên môn và năng lực nghề nghiệp về ngành luật"
    },
    {
      image: section_3?.branch4_6?.branch_5?.image || "/5.png",
      path:
        `/${section_3?.branch4_6?.branch_5?.link}` ||
        "nganh-thuong-mai-dien-tu",
      title:
        section_3?.branch4_6?.branch_5?.title || "Ngành Thương mại điện tử",
      desc:
        section_3?.branch1_3?.branch_5?.desc ||
        "Ngành thương mại điện tử là ngành đào tạo nhân lực có kiến thức, kỹ năng, kinh nghiệm để triển khai các mô hình kinh doanh trực tuyến trên internet"
    },
    // {
    //   image: section_3?.branch4_6?.branch_6?.image || "/6.png",
    //   path: `/${section_3?.branch4_6?.branch_6?.link}` || "nganh-ngon-ngu-anh",
    //   title: section_3?.branch4_6?.branch_6?.title || "Ngành Ngôn ngữ Anh",
    //   desc:
    //     section_3?.branch4_6?.branch_6?.desc ||
    //     "Tiếng Anh là một trong những ngôn ngữ phổ biến nhất và được sử dụng rộng rãi nhất trên thế giới. Tiếng Anh thuộc hệ thống ngôn ngữ Germanic và được viết bằng bảng chữ cái Latin"
    // },
    {
      image: section_3?.branch7_9?.branch_7?.image || "/7.png",
      path:
        `/${section_3?.branch7_9?.branch_7?.link}` || "nganh-ngon-ngu-trung",
      title: section_3?.branch7_9?.branch_7?.title || "Ngành Ngôn ngữ Trung",
      desc:
        section_3?.branch7_9?.branch_7?.desc ||
        "Ngôn ngữ Trung Quốc là ngành học nghiên cứu và sử dụng tiếng Trung trên nhiều lĩnh vực khác nhau như kinh tế, thương mại, du lịch, ngoại giao"
    },
    {
      image: section_3?.branch7_9?.branch_8?.image || "/8.png",
      path: `/${section_3?.branch7_9?.branch_8?.link}` || "nganh-ke-toan",
      title: section_3?.branch7_9?.branch_8?.title || "Ngành Kế toán",
      desc:
        section_3?.branch7_9?.branch_8?.desc ||
        "Kế toán là công việc thu thập và xử lý dữ liệu kinh doanh, tài chính của tổ chức để cung cấp thông tin cho việc ra quyết định quản lý"
    },
    {
      image: section_3?.branch7_9?.branch_9?.image || "/9.png",
      path:
        `/${section_3?.branch7_9?.branch_9?.link}` ||
        "nganh-tai-chinh-ngan-hang",
      title:
        section_3?.branch7_9?.branch_9?.title || "Ngành Tài chính ngân hàng",
      desc:
        section_3?.branch7_9?.branch_9?.desc ||
        "Tài chính ngân hàng là một ngành học khá là rộng, liên quan đến tất cả các dịch vụ giao dịch tài chính Ngân hàng, lưu thông và vận hành tiền tệ. Ngành Tài chính ngân hàng có thể chia thành nhiều lĩnh vực chuyên ngành khác nhau như ngân hàng, tài chính doanh nghiệp, tài chính thuế, tài chính bảo hiểm"
    },
    {
      image: section_3?.branch7_9?.branch_10?.image || "/9.png",
      path: `/${section_3?.branch7_9?.branch_10?.link}` || "nganh-luat",
      title: section_3?.branch7_9?.branch_10?.title || "Ngành Luật",
      desc:
        section_3?.branch7_9?.branch_10?.desc ||
        "Chương trình đào tạo trực tuyến ngành Luật  cung cấp cho học viên kiến thức chuyên môn và năng lực nghề nghiệp về ngành luật"
    }
  ];
  return (
    <Box py={4}>
      <Container maxW="7xl">
        <HeadSection
          title={section_3?.title || "Chuyên ngành đào tạo"}
          subtitle="chuyên ngành"
          desc=""
        />
        <SimpleGrid spacing={"8"} columns={{ base: 1, md: 2, lg: 3 }}>
          {categotys.map((categoty, index) => (
            <CardCat
              key={index}
              desc={categoty.desc}
              path={categoty.path}
              title={categoty.title}
              image={`${categoty.image}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
