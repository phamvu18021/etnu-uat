"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useEffect, useState } from "react";

export const Kt = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nkt`, {
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
      title={page_content?.acf?.top?.title || "Ngành Kế toán"}
      path={page_content?.acf?.top?.link || "/nganh-ke-toan"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Kế toán"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={page_content?.acf?.body?.main?.major_info || "Kế toán"}
        src={page_content?.acf?.body?.main?.image || "/8.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Kế toán là công việc thu thập và xử lý dữ liệu kinh doanh, tài chính của tổ chức để cung cấp thông tin cho việc ra quyết định quản lý. Nghề nghiệp kế toán không chỉ giới hạn trong các doanh nghiệp, ngân hàng hay cơ quan, trường học, bệnh viện mà còn mở rộng dưới dạng các dịch vụ kế toán, kiểm toán, thuế.",
          page_content?.acf?.body?.main?.over_view_2 ||
            "Chương trình đào tạo được thiết kế theo hướng ứng dụng, chú ý khả năng tiếp cận nhanh chóng với nghề nghiệp của học viên ngay trong quá trình học và khả năng phát triển lên những vị trí cao hơn sau khi ra trường."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 ||
            "Chuyên viên phụ trách kế toán, kiểm toán, giao dịch ngân hàng",
          page_content?.acf?.body?.main?.job_2 ||
            "Kế toán trưởng, quản lý tài chính",
          page_content?.acf?.body?.main?.job_3 || "Giảng viên",
          page_content?.acf?.body?.main?.job_4 ||
            "Nhân viên môi giới chứng khoán"
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
