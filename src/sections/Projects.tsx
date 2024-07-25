import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

const PERSONAL_PROJECTS = [
  {
    href: "https://raverdex.com/",
    image: "/raverdex.png",
    title: "Raverdex Project",
    description: "$$$Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://sidusheroes.com/",
    image: "/aliens.png",
    title: "Sidus Heors Project",
    description: "$$$Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://gleec.com/",
    image: "/gleec.png",
    title: "Gleec Project",
    description: "$$$Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://www.youtube.com/watch?v=af7-DFSbFZ4",
    image: "/desktop-app.png",
    title: "Session Node.js Bot (client)",
    description: "Used framework for developing bots in the Session messenger. Headless client for working with the Session messenger API.",
  },
  {
    href: "https://swnd.io/",
    image: "/cowboys.png",
    title: "Teddy Bear Project",
    description: "$$$Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://ons.sessionbots.directory/",
    image: "/ons registry.png",
    title: "ONS Registry",
    description: "Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://www.figma.com/proto/pSChVlxcATkXoBZs7Lbmy7/Bugs?page-id=0%3A1&node-id=1-2&viewport=1629%2C2980%2C0.64&t=Pwar86g30bct0NId-1&scaling=scale-down-width&content-scaling=fixed",
    image: "/bugs coin.png",
    title: "$BUGS COIN [#design]",
    description: "A meme token figma design about famous 2D cartoon character-rabbit $BUGS.",
  },
  {
    href: "https://promosoundgroup.net/",
    image: "/electron.png",
    title: "Promo Sound Project",
    description: "$$$Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://paribus.io/",
    image: "/paribus.png",
    title: "Paribus",
    description: "$$$ Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://ripple-ai-ochre.vercel.app/",
    image: "/ripple ai.png",
    title: "Ripple AI project",
    description: "Kind of meme token project and used topic as Ripple AI.",
  },
] as const;

export default function Projects() {
  return (
    <Container id="projects" pt="32px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#projects">Projects</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>Projects I've built most recently.</SubHeading>
          <Flex flexWrap="wrap" justify="center" align="center">
            {PERSONAL_PROJECTS.map(({ title, description, image, href }) => (
              <Card
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
