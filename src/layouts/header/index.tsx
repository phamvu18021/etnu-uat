"use client";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";
import { useModal } from "@/components/ModalContext";

const navtransDown = keyframes`
  from {
    transform: translate(0, -90px);
  }
  to {
    transform: translate(0, 0);
  }
`;

const NavContainer = styled.nav`
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background: white;
  border-bottom: 1px solid #e2e8f0;

  &.sticky {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background: white !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    animation: ${navtransDown} 0.7s 1 linear;
  }
`;

const HiddenBox = styled(Box)`
  display: none;
  height: 60px;

  &.sticky {
    display: block;
  }
`;

export const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { onOpen, onClose, isOpen, onToggle } = useModal();

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavContainer className={isSticky ? "sticky" : ""}>
        <Container maxW={"7xl"}>
          <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
            {/* Mobile Navigation Toggle */}
            <Flex display={{ base: "flex", lg: "none" }}>
              <MobileNav />
            </Flex>

            {/* Desktop Navigation */}
            <Flex
              display={{ base: "none", lg: "flex" }}
              flex={1}
              justify="center"
            >
              <DesktopNav />
            </Flex>

            {/* Registration Button */}
            <Button
              bg="#235094"
              color="white"
              borderRadius="full"
              _hover={{
                bg: "#ffb800",
                transform: "translateY(-2px)",
                shadow: "lg"
              }}
              transition="all 0.3s"
              display={{ base: "flex", md: "flex" }}
              onClick={() => onToggle && onToggle()}
            >
              Đăng ký
            </Button>
          </Flex>
        </Container>
      </NavContainer>
      <HiddenBox className={isSticky ? "sticky" : ""} />
    </>
  );
};

export const Header = () => {
  return (
    <Box>
      <Box display={{ base: "none", sm: "block" }}>
        <HeaderTop />
      </Box>
      <Navigation />
    </Box>
  );
};
