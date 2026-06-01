"use client";

import { HeadSectionLight } from "@/components/HeadSection";
import styles from "@/styles/Couters.module.css";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid
} from "@chakra-ui/react";
import CountUp from "react-countup";

interface ICounter {
  start: number;
  end: number;
  subfix: string;
  prefix?: string;
}

export const Counter = (props: ICounter) => {
  const { start, end, subfix, prefix } = props;

  return (
    <CountUp
      enableScrollSpy={true}
      start={start}
      end={end}
      duration={2}
      suffix={prefix || " "}
    >
      {({ countUpRef }) => (
        <Flex justifyContent={"center"} flexDir="column" align={"center"}>
          <span
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff"
            }}
            ref={countUpRef}
          />
          <Heading fontSize="lg" color="white">
            {subfix}
          </Heading>
        </Flex>
      )}
    </CountUp>
  );
};

export const Counters = ({ section_5 }: { section_5: any }) => {
  const counters = [
    {
      start: section_5?.list_counters?.item_1?.start || 0,
      end: section_5?.list_counters?.item_1?.end || 10,
      suffix: section_5?.list_counters?.item_1?.title || "Ngành học trực tuyến",
      prefix: section_5?.list_counters?.item_1?.prefix || " "
    },
    {
      start: section_5?.list_counters?.item_2?.start || 0,
      end: section_5?.list_counters?.item_2?.end || 2001,
      suffix: section_5?.list_counters?.item_2?.title || "Khóa học",
      prefix: section_5?.list_counters?.item_2?.prefix || "+"
    },
    {
      start: section_5?.list_counters?.item_3?.start || 0,
      end: section_5?.list_counters?.item_3?.end || 10001,
      suffix:
        section_5?.list_counters?.item_3?.title || "Học viên viên theo học",
      prefix: section_5?.list_counters?.item_3?.prefix || "+"
    }
  ];
  return (
    <Box pos={"relative"} zIndex={0}>
      <Container
        maxW="7xl"
        py={"48px"}
        className={styles["context"]}
        pos={"absolute"}
        top={0}
        left={"50%"}
        transform={"translateX(-50%)"}
      >
        <HeadSectionLight
          title={section_5?.title || "Những con số ấn tượng"}
          subtitle="những con số"
          desc={
            section_5?.sub_title ||
            "Cùng xem những con số ấn tượng của chúng tôi trong suốt thời gian vừa qua"
          }
        />
        <SimpleGrid
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
          }}
          spacing={"8"}
          pt={"36px"}
        >
          {counters.map((counter, index) => (
            <Counter
              key={index}
              start={Number(counter.start)}
              end={Number(counter.end)}
              subfix={counter.suffix}
              prefix={counter.prefix}
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* Animate  */}
      <Box className={styles["area"]} bg={"blue.900"} w={"100%"}>
        <List className={styles["circles"]}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </Box>
    </Box>
  );
};
