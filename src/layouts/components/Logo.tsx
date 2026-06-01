import { Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <Image
        priority
        width={50}
        height={50}
        src={`/logo-dhthainguyen.webp`}
        alt="logo DHTN "
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <Text
        fontSize={{ base: "md", md: "xl" }}
        fontWeight="bold"
        color="gray.800"
      >
        Đại học Thái Nguyên
      </Text>
    </Link>
  );
};
