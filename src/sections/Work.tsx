import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import Service from "../components/Service";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

const WORK_PROJECTS = [
  {
    href: "#",
    image: "/landing page.png",
    title: "Website Projects",
    description: "A great way to convey information about your product or service, attract attention and start sales. I can integrate any APIs, payment gateways, impressive graphics and animation, as well as make the site responsive and optimized for search engines.",
  },
  {
    href: "#",
    image: "/fullstack site.png",
    title: "Building fullstack website",
    description: "Blog with NoSQL (like MongoDB) or SQL (like PostgreSQL) database, online store with payment processing and admin panel, data management system. Site layout, backend and microservices development, API, authorization, CI/CD setup, server and database setup — all this is included in a single service.",
  },
  {
    href: "#",
    image: "/mobile app.png",
    title: "Mobile App Development",
    description: "Developed hybrid mobile platform for music concerts, reducing development time.Analyzed mobile features, utilized AWS servies, developed mobile apps, and enhanced efficiency.",
  },
  {
    href: "#",
    image: "/bot game.jpg",
    title: "Building Bots",
    description: "Increase conversions, provide user feedback, and promote communities and channels by checking for subscription with a Telegram (via Bot API or on behalf of the user with MTProto Core API), WhatsApp or Twitter bot, promote your product with a Discord bot, Yandex. Alice skill, Reddit app or bot working with any other API. Scenario build, testing and integration with product.",
  },

] as const;

export default function Work() {
  return (
    <Container id="work" pt="32px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#work">Services</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>Features I can work for you.</SubHeading>
          <Flex flexWrap="wrap" justify="center" align="center">
            {WORK_PROJECTS.map(({ title, description, image, href }) => (
              <Service
                key={title}
                title={title}
                description={description}
                image={image}
                href={href}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
