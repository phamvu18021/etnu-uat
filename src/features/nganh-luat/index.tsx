"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useEffect, useState } from "react";

export const Luat = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nganh-luat`, {
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
      title={page_content?.acf?.top?.title || "Ngành Luật"}
      path={page_content?.acf?.top?.link || "/nganh-luat"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Luật"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={page_content?.acf?.body?.main?.major_info || "Luật"}
        src={page_content?.acf?.body?.main?.image || "/1.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            `Ngành Luật là ngành đào tạo nguồn nhân lực có kiến thức, kỹ năng và kinh nghiệm trong việc hiểu và áp dụng pháp luật vào thực tiễn cuộc sống và công việc. Trong bối cảnh xã hội ngày càng phát triển và ý thức pháp lý của người dân ngày càng cao, nhu cầu tuyển dụng nhân sự ngành Luật cũng không ngừng gia tăng, biến đây trở thành một trong những ngành học có triển vọng nghề nghiệp hấp dẫn.`
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 ||
            ` Chuyên viên pháp lý, tư vấn luật tại doanh nghiệp hoặc văn phòng luật
            Giảng viên, nghiên cứu viên ngành Luật
            Cán bộ pháp chế tại cơ quan nhà nước, tổ chức xã hội
            Nhân viên pháp lý, chuyên viên tuân thủ trong doanh nghiệp
            Chuyên viên xử lý hồ sơ, hợp đồng và văn bản pháp luật
`
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
