"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useState, useEffect } from "react";

export const Lkt = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nlkt`, {
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
      title={page_content?.acf?.top?.title || "Ngành Luật kinh tế"}
      path={page_content?.acf?.top?.link || "/nganh-luat-kinh-te"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Luật kinh tế"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={page_content?.acf?.body?.main?.major_info || "Luật kinh tế"}
        src={page_content?.acf?.body?.main?.image || "/4.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Chương trình đào tạo trực tuyến ngành Luật Kinh tế cung cấp cho học viên kiến thức chuyên môn và năng lực nghề nghiệp về ngành luật, đồng thời chuyên sâu hơn trong lĩnh vực luật kinh doanh thương mại để giải quyết các vấn đề pháp lý trong công việc và cuộc sống. Học viên cũng được trang bị kiến thức bổ trợ về kinh tế, quản trị, kế toán để phục vụ cho nghề nghiệp. Bên cạnh đó, học viên được rèn luyện các kỹ năng áp dụng pháp luật, thực hành nghề nghiệp, tư duy phản biện và được bồi dưỡng hình thành thái độ văn hóa ứng xử pháp lý và tuân thủ pháp luật."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 || "Luật sư",
          page_content?.acf?.body?.main?.job_2 ||
            "Nhân viên văn phòng công chứng",
          page_content?.acf?.body?.main?.job_3 || "Chấp hành viên",
          page_content?.acf?.body?.main?.job_4 || "Thẩm tra viên",
          page_content?.acf?.body?.main?.job_5 ||
            "Chuyên viên tư vấn pháp luật tại các doanh nghiệp",
          page_content?.acf?.body?.main?.job_6 ||
            "Chuyên viên nghiên cứu hành pháp, lập pháp và tư pháp tại các cơ quan nhà nước",
          page_content?.acf?.body?.main?.job_7 || "Giảng viên Luật kinh tế"
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
