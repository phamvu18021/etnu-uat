"use client";

import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

export const LayoutBottom = ({
  children,
  sticky
}: {
  children: ReactNode;
  sticky?: string;
}) => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={"8"}>
        <GridItem colSpan={{ base: 1, lg: 3 }}>{children}</GridItem>
        <GridItem className="sidebar-posts" colSpan={{ base: 1, lg: 1 }}>
          <Sidebar sticky={sticky} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
