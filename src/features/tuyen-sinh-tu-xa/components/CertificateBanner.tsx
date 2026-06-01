import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const CertificateBanner = ({
  CertificateBanner
}: {
  CertificateBanner: any;
}) => {
  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "300px", md: "500px", xl: "760px" }}
      overflow="hidden"
    >
      <Image
        src={CertificateBanner?.banner_image || "/anh-bia-facebook.webp"}
        alt="Banner"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
    </Box>
  );
};
