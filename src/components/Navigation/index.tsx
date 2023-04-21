import React, { FC } from "react";
import { Container, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const Navigation: FC = () => {
  return (
    <Container mb={8}>
      <HStack spacing={2}>
        <Heading size="sm">Fos Redux-Saga teszt</Heading>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </HStack>
    </Container>
  )
};
