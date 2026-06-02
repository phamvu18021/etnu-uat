import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

export const CertificateCard = ({ header, title, description, headerColor }: any) => {
  const renderHeader = (headerStr: string) => {
    const imageRegex = /\.(png|jpe?g|webp|svg)$/i;
    if (imageRegex.test(headerStr)) {
      return <Image src={headerStr} alt="image" width={45} height={45} />;
    }
    return <Text color={headerColor || "red.600"} fontSize="3xl" fontWeight="bold">{headerStr}</Text>;
  };

  return (
    <Box p={6} border="1px solid" borderColor="gray.200" _hover={{ shadow: "md" }} transition="all 0.3s">
      <Box mb={4}>{renderHeader(header)}</Box>
      <Heading as="h3" size="md" mb={3} color="blue.800">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};
