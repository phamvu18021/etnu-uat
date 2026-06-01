"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useState, useEffect } from "react";

export const Tcnh = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ntcnh`, {
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
      title={page_content?.acf?.top?.title || "Ngành Tài chính ngân hàng "}
      path={page_content?.acf?.top?.link || "/nganh-tai-chinh-ngan-hang"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Tài chính ngân hàng"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        src={page_content?.acf?.body?.main?.image || "/9.png"}
        name={
          page_content?.acf?.body?.main?.major_info || "Tài chính ngân hàng"
        }
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Tài chính ngân hàng là một ngành học khá là rộng, liên quan đến tất cả các dịch vụ giao dịch tài chính Ngân hàng, lưu thông và vận hành tiền tệ. Ngành Tài chính ngân hàng có thể chia thành nhiều lĩnh vực chuyên ngành khác nhau như ngân hàng, tài chính doanh nghiệp, tài chính thuế, tài chính bảo hiểm Cụ thể hơn, tài chính ngân hàng là hình thức kinh doanh liên quan đến vấn đề tiền tệ thông qua ngân hàng và các công cụ tài chính của ngân hàng phát hành nhằm thanh toán và chi trả trong nội địa và quốc tế.",
          page_content?.acf?.body?.main?.over_view_2 ||
            "Học viên khi theo học ngành Tài chính ngân hàng sẽ dược cung cấp kiến thức về lĩnh vực tài chính, phát hành cổ phiếu, trái phiếu, huy động vốn tư vấn cho các doanh nghiệp về các hoạt động trên thị trường vốn như mua bán, sáp nhập doanh nghiệp."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 ||
            "Sau khi tốt nghiệp ngành Tài chính Ngân hàng tại Đại học trực tuyến TNU-Elearning, học viên sẽ có những cơ hội việc làm hấp dẫn như: nhân viên tín dụng, nhân viên thu hồi vốn, chuyên viên kế toán, kiểm toán, chuyên viên kinh doanh tiền tệ, chuyên viên quản trị tài sản và nguồn vốn, chuyên viên tư vấn đầu tư, chuyên viên phân tích tài chính, chuyên viên thanh toán quốc tế, giao dịch viên chứng khoán… và những ngành kinh doanh khác."
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
