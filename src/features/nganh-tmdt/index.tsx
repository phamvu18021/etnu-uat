"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useState, useEffect } from "react";

export const Tmdt = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ntmdtvmkts`, {
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
      title={
        page_content?.acf?.top?.title ||
        "Ngành Thương mại điện tử và Marketing số "
      }
      path={page_content?.acf?.top?.link || "/nganh-thuong-mai-dien-tu"}
      titleNganh={
        page_content?.acf?.top?.breadcrumb ||
        "Thương mại điện tử và Marketing số "
      }
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={
          page_content?.acf?.body?.main?.major_info ||
          "Thương mại điện tử và Marketing số "
        }
        src={page_content?.acf?.body?.main?.image || "/5.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Ngành thương mại điện tử là ngành đào tạo nhân lực có kiến thức, kỹ năng, kinh nghiệm để triển khai các mô hình kinh doanh trực tuyến trên internet. Khi xu hướng mua sắm online tăng thì nhu cầu tuyển dụng nhân sự ngành thương mại điện tử cũng tăng theo và đang ngày càng trở nên “hot” hơn bao giờ hết.",
          page_content?.acf?.body?.main?.over_view_2 ||
            "Tuy là một lĩnh vực còn khá mới tại Việt Nam nhưng thương mại điện tử đang phát triển với tốc độc nhanh và hoà nhập cùng thị trường thương mại điện tử toàn cầu. Vì vậy, trong những năm tới đây, cơ hội việc làm cho những lao động có chuyên môn về thương mại điện tử thật sự rộng mở và nhiều khả năng thăng tiến trong nghề nghiệp.",
          page_content?.acf?.body?.main?.over_view_3 ||
            "Chương trình cử nhân trực tuyến Thương mại điện tử sẽ cung cấp các kiến thức nền tảng về kinh tế, xã hội bên cạnh các kiến thức và kỹ năng chuyên sâu về quản trị các lĩnh vực khác nhau, đáp ứng nhu cầu đa dạng của các tổ chức và mục tiêu thăng tiến của cá nhân."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 ||
            "Chuyên viên phát triển và quản trị thương hiệu",
          page_content?.acf?.body?.main?.job_2 ||
            "Giảng dạy, nghiên cứu về Quản trị Marketing, Marketing",
          page_content?.acf?.body?.main?.job_3 ||
            "Nhân viên chăm sóc khách hàng, quan hệ công chúng",
          page_content?.acf?.body?.main?.job_4 ||
            "Chuyên viên tại các công ty hoạt động trong lĩnh vực Marketing",
          page_content?.acf?.body?.main?.job_5 ||
            "Nhân viên nghiên cứu thị trường"
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
