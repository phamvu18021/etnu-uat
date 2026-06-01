import { Heading, Text, VStack } from "@chakra-ui/react";

export const HeadSection = ({
  subtitle,
  title,
  desc
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <VStack justify={"center"} py={{ lg: 10, base: 5 }}>
      {/* <Text color={"#FA692E"}>{subtitle}</Text> */}
      <Heading
        as={"h2"}
        size={{ base: "sm", md: "lg" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"#030d47"}
      >
        {title}
      </Heading>
      <Text color={"#030d47"} fontWeight={"thin"}>
        {desc}
      </Text>
    </VStack>
  );
};

export const HeadSectionLight = ({
  subtitle,
  title,
  desc
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <VStack justify={"center"}>
      {/* <Text color={"#FA692E"}>{subtitle}</Text> */}
      <Heading
        as={"h2"}
        size={{ base: "sm", md: "lg" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"whiteAlpha.900"}
      >
        {title}
      </Heading>
      <Text color={"whiteAlpha.900"} fontWeight={"sm"}>
        {desc}
      </Text>
    </VStack>
  );
};
