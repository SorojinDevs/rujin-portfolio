import * as React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Container from "../components/Container";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

export default function Contact() {
  return (
    <Container id="contact" pt="32px" pb="72px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#contact">Contact</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>Feel free to reach out! My DMs are open.</SubHeading>

          <Flex pt="8px" justify="center">

          <Box p="8px">
              <Link
                href="samuelrujin511@gmail.com"
                isExternal
                _hover={{ color: "blue.300" }}
              >
                <Flex justify="center" align="center">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <Text pl="8px">samuelrujin511@gmail.com</Text>
                </Flex>
              </Link>
            </Box>

            <Box p="8px">
              <Link
                href="https://twitter.com/samuelrujin511"
                isExternal
                _hover={{
                  color: "blue.300",
                }}
              >
                <Flex justify="center" align="center">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  <Text pl="8px">@samuelrujin511</Text>
                </Flex>
              </Link>
            </Box>

            <Box p="8px">
              <Link
                href="https://t.me/roctus1990511"
                isExternal
                _hover={{ color: "blue.300" }}
              >
                <Flex justify="center" align="center">
                  <FontAwesomeIcon icon={faTelegram} size="lg" />
                  <Text pl="8px">@roctus1990511</Text>
                </Flex>
              </Link>
            </Box>

          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
