import * as React from "react";
import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import Container from "../components/Container";
import Links from "../components/Links";

export default function Intro() {
  return (
    <Container id="samuel" height="100vh">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height={["75%", "100%"]}
      >
        <Flex justify="center" align="center" flexDir={["column", "row"]}>
          <Box padding={["16px", "24px"]}>
            <Avatar src="/favicon.png" size="xl" />
          </Box>
          <Flex flexDir="column" alignItems={["center", "stretch"]}>
            <Heading as="h1" fontSize={[36, 52]}>
              Hi, I'm Samuel Rujin
            </Heading>
            <Heading fontSize={[18, 24]}>Fullstack & Mobile Apps Developer</Heading>
            <Links />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
