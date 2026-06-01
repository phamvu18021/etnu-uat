"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useEffect, useState } from "react";

export const Qtkd = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nqtkd`, {
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
      title={page_content?.acf?.top?.title || "Ngành quản trị kinh doanh"}
      path={page_content?.acf?.top?.link || "/nganh-quan-tri-kinh-doanh"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Quản trị kinh doanh"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={
          page_content?.acf?.body?.main?.major_info || "Quản trị kinh doanh"
        }
        src={page_content?.acf?.body?.main?.image || "/3.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Ngành Quản trị kinh doanh chuẩn bị cho người học những năng lực cần thiết cho việc quản lý các loại hình tổ chức khác nhau, từ các doanh nghiệp cho đến các đơn vị thuộc khu vực công nhằm đạt được mục tiêu với hiệu quả cao nhất. Trong các tổ chức nói trên, người học quản trị kinh doanh có thể đáp ứng yêu cầu của những vị trí quản lý khác nhau: nhân sự, marketing, sản xuất hay điều hành chung tùy theo kinh nghiệm, sở thích và nhu cầu của đơn vị"
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 || "Quản trị kinh doanh quốc tế",
          page_content?.acf?.body?.main?.job_2 || "Quản trị Marketing",
          page_content?.acf?.body?.main?.job_3 ||
            "Quản trị kinh doanh tổng hợp",
          page_content?.acf?.body?.main?.job_4 || "Quản trị doanh nghiệp",
          page_content?.acf?.body?.main?.job_5 || "Quản trị Khởi nghiệp",
          page_content?.acf?.body?.main?.job_6 || "Quản trị Logistic"
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
