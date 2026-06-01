"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useEffect, useState } from "react";

export const Ktdtvt = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ndtvt`, {
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
      title={page_content?.acf?.top?.title || "Ngành điện tử viễn thông"}
      path={page_content?.acf?.top?.link || "/nganh-dien-tu-vien-thong"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Điện tử viễn thông"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        src={page_content?.acf?.body?.main?.image || "/2.png"}
        name={page_content?.acf?.body?.main?.major_info || "Điện tử viễn thông"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Ngành điện tử viễn thông là ngành sử dụng những công nghệ tiên tiến, những công nghệ hiện đại của thời địa 4.0 những công nghệ này giúp ích rất nhiều trong hoạt động của con người, Ngành điện tử viễn thông hiện nay là một ngành được xem là khá rộng lớn, chia thành rất nhiều lĩnh vực phong phú như sáng tạo, nghiên cứu, lĩnh vực âm thanh hình ảnh, lĩnh vực điện tử, lĩnh vực mạng viễn thông… tất cả các lĩnh vực này đều nằm trong điện tử viễn thông từ đó chúng ta thấy tầm quan trọng của điện tử viễn thông.",
          page_content?.acf?.body?.main?.over_view_2 ||
            "Chương trình cử nhân trực tuyến ngành Điện tử – viễn thông sẽ cung cấp các kiến thức nền tảng về kinh tế, xã hội bên cạnh các kiến thức và kỹ năng chuyên sâu về quản trị các lĩnh vực khác nhau, đáp ứng nhu cầu đa dạng của các tổ chức và mục tiêu thăng tiến của cá nhân."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 ||
            "Kỹ sư thiết kế tối ưu mạng, quản lý mạng, vận hành hệ thống mạng viễn thông phức tạp.",
          page_content?.acf?.body?.main?.job_2 ||
            "Kỹ sư thiết kế và viết phần mềm cho máy tính, thiết kế và viết phần mềm cho các thiết bị thông minh như điện thoại di động, rô bốt, xe ô tô.",
          page_content?.acf?.body?.main?.job_3 ||
            "Kỹ sư thiết kế vi mạch kiểm thử vi mạch, kỹ sư làm việc trong lĩnh vực bán dẫn cũng như các công nghệ vật liệu điện tử tiên tiến khác.",
          page_content?.acf?.body?.main?.job_4 ||
            "Kỹ sư thiết kế, chế tạo, vận hành thiết bị y tế, hệ thống thông tin y tế, hệ thống điện tử hàng không vũ trụ, hệ thống đa phương tiện.",
          page_content?.acf?.body?.main?.job_5 ||
            "Chuyên viên tư vấn, thiết kế, vận hành, điều hành kỹ thuật tại các đài phát thanh, đài truyền hình, công ty tư vấn thiết kế mạng viễn thông, công ty thiết kế sản xuất vi mạch.",
          page_content?.acf?.body?.main?.job_6 ||
            "Chuyên viên thiết kế, quy hoạch mạng và tối ưu mạng tại các công ty viễn thông, doanh nghiệp tư nhân về điện tử – viễn thông.",
          page_content?.acf?.body?.main?.job_7 ||
            "Chuyên viên thiết kế truyền dẫn, vận hành, bảo trì tại các công ty điện tử, viễn thông, công ty sản xuất phần mềm thế giới di động"
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
