"use client";

import { Frame } from "@/components/Frame";
import { Loading } from "@/components/Loading";
import { LayoutLkg } from "@/layouts/layoutNganh";

export const LichKg = ({
  list,
  page_content,
  isLoading
}: {
  list: string[];
  page_content: any;
  isLoading: boolean;
}) => {
  return (
    <LayoutLkg
      title={
        page_content?.acf?.title ||
        "Lịch khai giảng Đại học Thái Nguyên - E learning"
      }
      titleNganh="Lịch Khai Giảng"
    >
      {!isLoading && (
        <Frame
          title1={page_content?.acf?.head || "Cập nhật lịch khai giảng dự kiến"}
          list1={list}
          label="Đăng ký tư vấn"
        />
      )}

      {isLoading && <Loading he="10vh" />}
    </LayoutLkg>
  );
};
