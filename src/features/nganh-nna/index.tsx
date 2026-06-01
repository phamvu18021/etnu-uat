"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useState, useEffect } from "react";

export const Nna = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nnna`, {
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
      title={page_content?.acf?.top?.title || "Ngành Ngôn ngữ Anh"}
      path={page_content?.acf?.top?.link || "/nganh-ngon-ngu-anh"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Ngôn ngữ Anh"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={page_content?.acf?.body?.main?.major_info || "Ngôn ngữ Anh"}
        src={page_content?.acf?.body?.main?.image || "/6.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Tiếng Anh là ngôn ngữ chính thức của Vương quốc Anh, Hoa Kỳ, Canada, Úc, và nhiều quốc gia và vùng lãnh thổ khác trên khắp thế giới. Nó là một trong những ngôn ngữ phổ biến nhất và được sử dụng rộng rãi nhất trên thế giới. Tiếng Anh thuộc hệ thống ngôn ngữ Germanic và được viết bằng bảng chữ cái Latin",
          page_content?.acf?.body?.main?.over_view_2 ||
            "Tiếng Anh được sử dụng rộng rãi trong nhiều lĩnh vực, bao gồm kinh doanh, khoa học, công nghệ, giáo dục, truyền thông, và văn hóa đại chúng. Nó là ngôn ngữ chính thức của nhiều tổ chức quốc tế như Liên Hợp Quốc và NATO."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 || "Giảng viên tiếng anh",
          page_content?.acf?.body?.main?.job_2 || "Dịch thuật và phiên dịch",
          page_content?.acf?.body?.main?.job_3 || "Kinh doanh quốc tế",
          page_content?.acf?.body?.main?.job_4 || "Nghiên cứu và phát triển",
          page_content?.acf?.body?.main?.job_5 ||
            "Hướng dẫn viên, chuyên viên tư vấn tại các công ty du lịch, lữ hành, nhà hàng khách sạn"
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
