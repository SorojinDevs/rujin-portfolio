import * as React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Container from "../components/Container";
import Header from "../components/Header";

const BLUE = "blue.300";

export default function About() {
  return (
    <Container id="about" pt="32px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="700px">
        <Header href="#about">About</Header>
        <Box p="16px" maxWidth="100%">
          <Box width="100%" pb="16px">
            <Text>
{/*              
              I'm currently a software enginesssser at{" "}
              <Link href="https://whop.com" isExternal color={BLUE}>
                Whop
              </Link>{" "}
              where we're building the future of e-commerce.
*/}
            I'm currently working as a fullstack & mobile apps Developer.
            </Text>
          </Box>
          <Box width="100%" paddingBottom="16px">
            <Text>
            Graduated computer science with a passion for developing scalable web applications and working across the full stack. I am looking to join forces with Red Technologies to continue to grow my skill set while contributing to the positive outcome of making people "richer, smarter, and happier".
            So Reliable, passionate, and talented developer, who has 7+ years of experience in Web developer, who holds a passion for exploring technologies.
            </Text>
          </Box>
          <Box width="100%">
            <Text>
              I'm from Bacău, Rumania, and looking for an opportunity to collaborate.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
