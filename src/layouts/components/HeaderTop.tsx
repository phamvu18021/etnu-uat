import {
  Box,
  Container,
  Flex,
  Icon,
  Link,
  Text,
  chakra,
  VisuallyHidden
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { Logo } from "./Logo";

export const SocialButton = ({
  children,
  label,
  href,
  bagr
}: {
  children: ReactNode;
  label: string;
  href: string;
  bagr: string;
}) => {
  return (
    <chakra.button
      bg={bagr}
      rounded={"md"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={"1.8px solid #cbd5e1"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const HeaderTop = () => {
  return (
    <Box borderBottom="1px solid" borderColor="gray.200" bg="white">
      <Container maxW="7xl">
        <Flex h="16" alignItems="center" justifyContent="space-between" gap={4}>
          {/* Logo and Title */}
          <Flex alignItems="center" gap={2}>
            <Logo />
          </Flex>

          {/* Contact info */}
          <Flex alignItems="center" gap={6}>
            <Link
              href="tel:0914709118"
              aria-label="Gọi hotline: 0914709118"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
              color="gray.700"
              _hover={{ textDecoration: "none", color: "blue.500" }}
            >
              <Icon as={LuPhone} boxSize={4} />
              <Text display={{ base: "none", sm: "inline" }}>0914709118</Text>
            </Link>
            <Link
              href="mailto:daihoctructuyen@tnu.edu.vn"
              aria-label="Gửi email: daihoctructuyen@tnu.edu.vn"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
              color="gray.700"
              _hover={{ textDecoration: "none", color: "blue.500" }}
            >
              <Icon as={MdOutlineMail} boxSize={4} />
              <Text display={{ base: "none", sm: "inline" }}>
                daihoctructuyen@tnu.edu.vn
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
