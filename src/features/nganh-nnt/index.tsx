"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useEffect, useState } from "react";

export const Nnt = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nnnt`, {
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
  }, [initialData]);
  return (
    <LayoutNganh
      title={page_content?.acf?.top?.title || "Ngành Ngôn ngữ Trung"}
      path={page_content?.acf?.top?.link || "/nganh-ngon-ngu-trung"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Ngôn ngữ Trung"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={page_content?.acf?.body?.main?.major_info || "Ngôn ngữ Trung"}
        src={page_content?.acf?.body?.main?.image || "/7.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Ngôn ngữ Trung Quốc là ngành học nghiên cứu và sử dụng tiếng Trung trên nhiều lĩnh vực khác nhau như kinh tế, thương mại, du lịch, ngoại giao. Trung Quốc hiện là quốc gia có nền kinh tế và tốc độ tăng trưởng nhanh chóng hàng đầu tại Châu Á trên thế giới, từ đó mà ngôn ngữ Trung trở thành một trong các ngôn ngữ phổ biến được sử dụng rộng rãi.",
          page_content?.acf?.body?.main?.over_view_2 ||
            "Trung Quốc là một cường quốc có nền kinh tế đứng thứ 2 thế giới, sau Mỹ. Tốc độ tăng trưởng về kinh tế trung bình 10%/ năm. Các doanh nghiệp Trung Quốc đầu tư vào Việt Nam ngày càng nhiều và chóng mặt."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 ||
            "Đào tạo, giảng dạy ngôn ngữ Trung Quốc tại các trường học, trường nghề, Đại học, các nơi đào tạo chuyên môn về ngôn ngữ.",
          page_content?.acf?.body?.main?.job_2 ||
            "Phiên dịch, biên dịch các tài liệu, sách báo, tài liệu tiếng Trung",
          page_content?.acf?.body?.main?.job_3 ||
            "Chuyên viên Marketing, giao dịch thương mại trong các doanh nghiệp Trung Quốc tại Việt Nam",
          page_content?.acf?.body?.main?.job_4 ||
            "Hướng dẫn viên du lịch, làm lễ tân trong nhà hàng, khách sạn",
          page_content?.acf?.body?.main?.job_5 ||
            "Tiếp viên hàng không, nhân viên an ninh tại cảng hàng không"
        ]}
        program={{
          credits: page_content?.acf?.body?.side_bar?.credits || "124.",
          subjects: page_content?.acf?.body?.side_bar?.subjects || "42.",
          list: [
            {
              title:
                page_content?.acf?.body?.side_bar?.list_items?.item_1?.title ||
                "Đã có bằng cao đẳng khác khối ngành",
              content:
                page_content?.acf?.body?.side_bar?.list_items?.item_1
                  ?.content || "2,5 năm"
            },
            {
              title:
                page_content?.acf?.body?.side_bar?.list_items?.item_2?.title ||
                "Đã có bằng cao đẳng cùng khối ngành",
              content:
                page_content?.acf?.body?.side_bar?.list_items?.item_1
                  ?.content || "2 năm"
            },
            {
              title:
                page_content?.acf?.body?.side_bar?.list_items?.item_3?.title ||
                "Đã có bằng Đại học cùng, khác khối ngành",
              content:
                page_content?.acf?.body?.side_bar?.list_items?.item_1
                  ?.content || "2 năm"
            }
          ]
        }}
      />
    </LayoutNganh>
  );
};
