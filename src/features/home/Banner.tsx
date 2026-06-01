import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = ({
  bannerData,
  bannerData_mobile
}: {
  bannerData?: any;
  bannerData_mobile?: any;
}) => {
  return (
    <Box>
      {/* Desktop Banner */}
      <Box
        position={"relative"}
        width="100%"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src={bannerData || "/anh-bia-facebook.webp"}
          width={1920}
          height={712}
          alt="Đại học Thái Nguyên"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          style={{
            width: "100%",
            height: "auto",
            display: "block"
          }}
        />
      </Box>

      {/* Mobile Banner */}
      <Box
        position={"relative"}
        width="100%"
        display={{ base: "block", md: "none" }}
      >
        <Image
          src={bannerData_mobile || bannerData || "/banner-9-nganh-tnu_mobile.jpg"}
          width={620}
          height={228}
          alt="Đại học Thái Nguyên"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          style={{
            width: "100%",
            height: "auto",
            display: "block"
          }}
        />
      </Box>
    </Box>
  );
};
