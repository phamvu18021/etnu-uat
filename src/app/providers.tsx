"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "@/components/ModalContext";
import theme from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ModalProvider>{children}</ModalProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
