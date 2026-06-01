"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  GridItem,
  HStack,
  Heading,
  Icon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { BsBook, BsCheck2Circle } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { PiExam } from "react-icons/pi";

interface IBranch {
  name: string;
  overview: string[];
  jobs: string[];
  program: {
    credits: string;
    subjects: string;
    list: {
      title: string;
      content: string;
    }[];
  };
  src: string;
}

export const Accs = ({
  accs
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accs.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"12px"} rounded={"sm"}>
          <AccordionButton bg={"gray.50"} py="16px" rounded={"sm"}>
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <Icon as={BiPlus} />
          </AccordionButton>
          <AccordionPanel pb={4} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h4"} size={"sm"}>
                  {item?.title}
                </Heading>
                <UnorderedList>
                  {item?.list?.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
            <UnorderedList></UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Branch = (props: IBranch) => {
  const { name, overview, jobs, program, src } = props;
  return (
    <Box color={"blue.800"}>
      {src && (
        <Image
          src={src}
          alt={`Hình ảnh ngành ${name}`}
          width={770}
          height={440}
          priority={true}
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 800px"
          style={{
            width: "100%",
            height: "auto",
            paddingBottom: "16px"
          }}
        />
      )}
      <Heading as={"h2"} size={"md"} pt={"16px"}>
        {`Thông tin về ngành ${name}`}
      </Heading>
      <Box pt={"32px"}>
        <HStack pb={"16px"}>
          <Icon as={GrOverview} />
          <Heading as={"h2"} size={"md"}>
            Tổng quan
          </Heading>
        </HStack>
        <UnorderedList textAlign="justify" pl={4}>
          {overview?.flatMap((item, index) =>
            item.split("\n").map((line, subIndex) => (
              <ListItem key={`${index}-${subIndex}`} fontWeight={500} pb="12px">
                {line}
              </ListItem>
            ))
          )}
        </UnorderedList>
      </Box>

      <Box pt={"32px"}>
        <HStack pb={"16px"}>
          <Icon as={GrOverview} />
          <Heading as={"h2"} size={"md"}>
            Nghề nghiệp
          </Heading>
        </HStack>

        <UnorderedList>
          {jobs?.flatMap((item, index) =>
            item.split("\n").map((item, subIndex) => (
              <ListItem key={`${index}-${subIndex}`} fontWeight={500} pb="12px">
                {item}
              </ListItem>
            ))
          )}
        </UnorderedList>
      </Box>
    </Box>
  );
};

interface IBranch {
  name: string;
  overview: string[];
  jobs: string[];
  program: {
    credits: string;
    subjects: string;
    list: {
      title: string;
      content: string;
    }[];
  };
  src: string;
}

export const AccsNganh = ({
  accs
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accs.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"12px"} rounded={"sm"}>
          <AccordionButton bg={"gray.50"} py="16px" rounded={"sm"}>
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <Icon as={BiPlus} />
          </AccordionButton>
          <AccordionPanel pb={4} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h4"} size={"sm"}>
                  {item?.title}
                </Heading>
                <UnorderedList>
                  {item?.list?.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
            <UnorderedList></UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const BranchNganh = (props: IBranch) => {
  const { name, overview, jobs, program, src } = props;
  return (
    <Box color={"blue.800"} py={10}>
      <Box pt={"32px"} boxShadow={"0px 3px 20px rgba(0, 33, 71, 0.06)"} p={"5"}>
        <HStack pb={"16px"}>
          <Icon as={GrOverview} />
          <Heading as={"h2"} size={"md"}>
            Chương trình và thời gian đào tạo
          </Heading>
        </HStack>

        <SimpleGrid>
          <GridItem flexDirection={"column"}>
            <HStack
              border={"1px solid"}
              borderColor={"gray.200"}
              px={{ base: "12px", lg: "16px" }}
              py={{ base: "10px", lg: "14px" }}
              rounded={"sm"}
              flexDirection={"column"}
            >
              <Circle bg={"blue.600"} p={{ base: "12px", lg: "16px" }}>
                <Icon as={PiExam} w={"25px"} h={"25px"} color={"white"} />
              </Circle>
              <VStack align={"center"}>
                <Text fontWeight={"700"} fontSize={{ base: "md", lg: "md" }}>
                  Tổng số tín chỉ
                </Text>
                <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={600}>
                  {program?.credits}
                </Text>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack
              border={"1px solid"}
              borderColor={"gray.200"}
              px={{ base: "12px", lg: "16px" }}
              py={{ base: "10px", lg: "14px" }}
              rounded={"sm"}
              flexDirection={"column"}
            >
              <Circle bg={"blue.600"} p={{ base: "12px", lg: "16px" }}>
                <Icon as={BsBook} w={"25px"} h={"25px"} color={"white"} />
              </Circle>
              <VStack align={"center"} direction={"column"}>
                <Text fontWeight={"700"} fontSize={{ base: "md", lg: "md" }}>
                  Tổng số môn học
                </Text>
                <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={600}>
                  {program?.subjects}
                </Text>
              </VStack>
            </HStack>
          </GridItem>
          {program?.list?.map((item, index) => (
            <GridItem colSpan={{ base: 1, md: 1, lg: 2 }} key={index}>
              <HStack
                border={"1px solid"}
                borderColor={"gray.200"}
                px={{ base: "12px", lg: "16px" }}
                py={{ base: "10px", lg: "14px" }}
                rounded={"sm"}
                justify={"space-between"}
              >
                <VStack align={"start"}>
                  <Text fontWeight={"700"} fontSize={{ base: "md", lg: "lg" }}>
                    {item?.title || "Đã có bằng Đại học cùng, khác khối ngành"}
                  </Text>
                  <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={600}>
                    {item?.content || "2 năm"}
                  </Text>
                </VStack>
                <Circle bg={"blue.600"} p={{ base: "12px", lg: "16px" }}>
                  <Icon
                    as={BsCheck2Circle}
                    w={"25px"}
                    h={"25px"}
                    color={"white"}
                  />
                </Circle>
              </HStack>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
