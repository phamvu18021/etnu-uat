"use client";

export interface HomeProps {
  initialData?: any;
  initialNews?: any[];
  initialNotifis?: any[];
}

import { FormWrapper } from "@/components/FormWrapper";
import { Loading } from "@/components/Loading";
import { Box, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Section2Skeleton,
  CategorySkeleton,
  EventSkeleton,
  BenefitSkeleton,
  QuestionSkeleton
} from "./HomeSkeleton";
import { Banner } from "./Banner";
import { Benefit } from "./Benefit";

const ScrollViews = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollViews)
);

const TextScroll = dynamic(
  () => import("./TextScroll").then((mod) => mod.TextScrollHomePage),
  {
    loading: () => <Box height="56px" bg="orange.400" />
  }
);
const Introduce = dynamic(
  () => import("./Introduce").then((mod) => mod.Introduce),
  {
    loading: () => <Section2Skeleton />
  }
);
const Category = dynamic(
  () => import("./Category").then((mod) => mod.Categorys),
  {
    loading: () => <CategorySkeleton />
  }
);
const VideoTiktok = dynamic(
  () => import("./VideoTiktok").then((mod) => mod.VideoTiktok),
  {
    loading: () => <Box height="400px" bg="gray.50" />
  }
);
const Counters = dynamic(
  () => import("./Counters").then((mod) => mod.Counters),
  {
    loading: () => <Box height="150px" bg="gray.50" />
  }
);
const Comment = dynamic(() => import("./Comment").then((mod) => mod.Comment), {
  loading: () => <Box height="300px" bg="gray.50" />
});

const Event = dynamic<any>(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <EventSkeleton />
});
const Question = dynamic(
  () => import("./Question").then((mod) => mod.Question),
  {
    loading: () => <QuestionSkeleton />
  }
);

const ModalBase = dynamic(() => import("./Modal").then((mod) => mod.ModalBase));

const Section2 = dynamic(
  () => import("./Section2").then((mod) => mod.Section2),
  {
    loading: () => <Section2Skeleton />
  }
);

export const Home = ({
  initialData,
  initialNews,
  initialNotifis
}: HomeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const [page_content, setPageContent] = useState<any>(initialData || null);

  useEffect(() => {
    // Only fetch if we don't have initialData
    if (initialData) return;

    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
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

  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-poup`);
        if (!res.ok) {
          throw new Error(`Form fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.error(error);
      }
    };
    getForm();
  }, [id, href, isOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isOpen && onOpen) onOpen();
    }, 10000);

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Banner
        bannerData={page_content?.acf?.bannerData}
        bannerData_mobile={page_content?.acf?.bannerData_mobile}
      />
      <TextScroll />
      <Benefit list_benefit={page_content?.acf?.section_1?.list_benefit} />
      <ScrollViews fallback={<Section2Skeleton />}>
        <Section2 data={page_content?.acf?.section_form} />
      </ScrollViews>
      <ScrollViews fallback={<CategorySkeleton />}>
        <Category section_3={page_content?.acf?.section_3} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="400px" bg="gray.50" />}>
        <VideoTiktok section_4={page_content?.acf?.section_4} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="150px" bg="gray.50" />}>
        <Counters section_5={page_content?.acf?.section_5} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" bg="gray.50" />}>
        <Comment section_6={page_content?.acf?.section_6} />
      </ScrollViews>
      <ScrollViews fallback={<EventSkeleton />}>
        <Event initialNews={initialNews} initialNotifis={initialNotifis} />
      </ScrollViews>
      <ScrollViews fallback={<QuestionSkeleton />}>
        <Question section_7={page_content?.acf?.section_7} />
      </ScrollViews>
      <ModalBase
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        form={isOpen ? <FormWrapper title="Để lại thông tin" /> : null}
      />
    </>
  );
};
