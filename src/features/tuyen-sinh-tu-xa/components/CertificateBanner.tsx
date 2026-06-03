import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const CertificateBanner = ({
  CertificateBanner
}: {
  CertificateBanner: any;
}) => {
  const imgSrc = typeof CertificateBanner === 'string'
    ? CertificateBanner
    : (CertificateBanner?.banner_image || CertificateBanner?.banner || "/anh-bia-facebook.webp");

  return (
    <Box
      position="relative"
      w="100%"
      overflow="hidden"
    >
      <Image
        src={imgSrc}
        alt="Banner"
        width={1920}
        height={825}
        sizes="100vw"
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
      />
    </Box>
  );
};
