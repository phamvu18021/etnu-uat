"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { useEffect, useState } from "react";

export const Cntt = ({ initialData }: { initialData?: any }) => {
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    if (initialData) return;
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ncntt`, {
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
      title={page_content?.acf?.top?.title || "Ngành Công nghệ thông tin"}
      path={page_content?.acf?.top?.link || "/nganh-cong-nghe-thong-tin"}
      titleNganh={page_content?.acf?.top?.breadcrumb || "Công nghệ thông tin"}
      programs={page_content?.acf?.programs}
    >
      <Branch
        name={
          page_content?.acf?.body?.main?.major_info || "Công nghệ thông tin"
        }
        src={page_content?.acf?.body?.main?.image || "/1.png"}
        overview={[
          page_content?.acf?.body?.main?.over_view_1 ||
            "Công nghệ thông tin là ngành sử dụng máy tính và phần mềm máy tính để chuyển đổi, lưu trữ, bảo vệ, xử lý, truyền và thu thập thông tin. Người làm việc trong trong ngành này thường được gọi là IT (Information Technology). Mục đích của khối khoa học tổng hợp liên ngành này là nhằm phát triển khả năng sửa chữa, tạo mới và sử dụng hệ thống các thiết bị và máy tính bao gồm phần cứng, phần mềm để cung cấp giải pháp xử lý thông tin trên nền công nghệ cá nhân, tổ chức có yêu cầu.",
          page_content?.acf?.body?.main?.over_view_2 ||
            "Học ngành Công nghệ thông tin học viên có thể nghiên cứu chuyên sâu về Khoa học máy tính, Công nghệ phần mềm, Kỹ thuật máy tính, Hệ thống thông tin, Mạng máy tính và truyền thông, An toàn thông tin mạng. Phần kiến thức chuyên ngành sẽ trang bị cho học viên  những kiến thức liên quan đến việc nghiên cứu phát triển, gia công hay ứng dụng hệ thống phần mềm; kiến thức về thiết kế, xây dựng, cài đặt, vận hành và bảo trì các thành phần phần cứng, phần mềm của hệ thống máy tính và các hệ thống thiết bị dựa trên máy tính; kiến thức về mạng máy tính và truyền thông."
        ]}
        jobs={[
          page_content?.acf?.body?.main?.job_1 ||
            "Trở thành lập trình viên phần mềm: người trực tiếp tạo ra các sản phẩm phần mềm",
          page_content?.acf?.body?.main?.job_2 ||
            "Kiểm duyệt chất lượng phần mềm: trực tiếp kiểm tra chất lượng các sản phẩm do lập trình viên tạo ra",
          page_content?.acf?.body?.main?.job_3 ||
            "Chuyên viên phân tích thiết kế hệ thống, quản lý dữ liệu, quản trị mạng, kỹ thuật phần cứng  máy tính,",
          page_content?.acf?.body?.main?.job_4 ||
            "Chuyên gia quản lý, điều phối các dự án công nghệ thông tin…"
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
