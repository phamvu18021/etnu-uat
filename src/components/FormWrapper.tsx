/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Loading } from "./Loading";

const FormGetFly = dynamic(() =>
  import("./FormGetFly").then((mod) => mod.FormGetFly)
);
const FormSam = dynamic(() =>
  import("./FormSam").then((mod) => mod.FormSam)
);
const FormGoogle = dynamic(() =>
  import("./FormGoogle").then((mod) => mod.FormGoogle)
);

interface FormData {
  type: "form-getfly" | "form-sam" | "form-google" | "unknown";
  url: string;
  uuid: string;
  divId: string;
  divClass: string;
}

export const FormWrapper = ({
  title,
  color = "#030d47",
  type = "form-main"
}: {
  title?: string;
  color?: string;
  type?: "form-main" | "form-poup";
}) => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFormData = async () => {
      const key = `form-data-form-main`;
      const cacheExpireMs = 1000 * 60 * 60 * 6; // 6 tiếng

      try {
        const cached = localStorage.getItem(key);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.expires > Date.now()) {
            setFormData(parsed.data);
            setIsLoading(false);
            return;
          } else {
            localStorage.removeItem(key); // Xoá cache hết hạn
          }
        }

        // Gọi API nếu không có cache
        const res = await fetch(`/api/gen-form/?type=form-main`);
        if (!res.ok) {
          throw new Error(`Form fetch failed: ${res.statusText}`);
        }
        const data = await res.json();
        setFormData(data);

        // Lưu vào localStorage
        localStorage.setItem(
          key,
          JSON.stringify({
            data,
            expires: Date.now() + cacheExpireMs
          })
        );
      } catch (error) {
        console.error("Error fetching form data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFormData();
  }, []);

  if (isLoading) {
    return (
      <Skeleton height="38vh">
        <Box height="38vh"></Box>
      </Skeleton>
    );
  }

  if (!formData) {
    return <Heading color="red.500">Unable to load form</Heading>;
  }

  return (
    <>
      <Box rounded={"xl"} bg={"white"} p="10px">
        {title && (
          <Heading
            as="h2"
            fontSize={"26px"}
            textAlign="center"
            color={color}
            pb="10px"
          >
            {title}
          </Heading>
        )}
        {formData.type === "form-getfly" && <FormGetFly {...formData} />}
        {formData.type === "form-sam" && <FormSam {...formData} />}
        {formData.type === "form-google" && (
          <FormGoogle url={formData.url} divId={formData.divId} />
        )}
      </Box>
    </>
  );
};
