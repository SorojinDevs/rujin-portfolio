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
    description: "Raverdex Project is created for setting up an expansive ecosystem of transformative products and services.",
  },
  {
    href: "https://sidusheroes.com/",
    image: "/aliens.png",
    title: "Sidus Heors Project",
    description: "SIDUS HEROES is a GameFi web3 Publisher (2023 golden excellence award winner in UAE) building a unique metaverse ecosystem with multiple games of various genres that share a single recognizable lore and in game token “Sidus”.",
  },
  {
    href: "https://gleec.com/",
    image: "/gleec.png",
    title: "Gleec Project",
    description: "Gleec offers a comprehensive suite of financial solutions, including the Gleec Card for convenient payments and aims to provide a seamless and accessible ecosystem for individuals and businesses to navigate the world of digital finance.",
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
    title: " Swords of Dangeons [#Casino]",
    description: "With its unique blend of arcade-style mechanics and stunning visuals, SND promises endless hours of addictive fun for casual and hardcore gamers alike. Put yourself in a captivating world of challenges and excitement on mobile universe.",
  },
  {
    href: "https://promosoundgroup.net/",
    image: "/electron.png",
    title: "Promo Sound Project",
    description: "Joined promosound project and took part offering comprehensive promotion services to boost your online visibility and help you achieve your music marketing goals.",
  },
  {
    href: "https://www.figma.com/proto/pSChVlxcATkXoBZs7Lbmy7/Bugs?page-id=0%3A1&node-id=1-2&viewport=1629%2C2980%2C0.64&t=Pwar86g30bct0NId-1&scaling=scale-down-width&content-scaling=fixed",
    image: "/bugs coin.png",
    title: "$BUGS COIN [#design]",
    description: "A meme token figma design about famous 2D cartoon character-rabbit $BUGS.",
  },
  {
    href: "https://ons.sessionbots.directory/",
    image: "/ons registry.png",
    title: "ONS Registry [#Bot Working]",
    description: "Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
  },
  {
    href: "https://paribus.io/",
    image: "/paribus.png",
    title: "Paribus",
    description: "A revolutionary defi protocol defines investment opportunities, letting users to unlock the true potential of their digital assets across multiple chains through innovative features like NFT-backed loans and profitable staking of synthetic assets.",
  },
  {
    href: "https://ripple-ai-ochre.vercel.app/",
    image: "/ripple ai.png",
    title: "Ripple AI-1v4",
    description: "Meme token project and used topic as Ripple AI on ERC-20 foundation. Presale and Staking Contract deployed.",
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
