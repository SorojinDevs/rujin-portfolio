import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

const PERSONAL_PROJECTS = [
  {
    href: "https://sidusheroes.com/",
    image: "/aliens.png",
    title: "Sidus Heors Project",
    description: "SIDUS HEROES is a GameFi web3 Publisher (2023 golden excellence award winner in UAE) building a unique metaverse ecosystem with multiple games of various genres that share a single recognizable lore and in game token “Sidus”.",
  },
  {
    href: "https://projectlarix.com/",
    image: "/Solana Gate.PNG",
    title: "The Lending gateway of Solana",
    description: "Larix is the ultimate lending gateway on Solana, adopted a dynamic interest rate model and created more capital-efficient risk management pools.",
  },
  {
    href: "http://patriciofigueroa.com/",
    image: "/Digital Ecommerce.PNG",
    title: "Marketing Digital Ecommerce",
    description: "This project is a digital academy and consultancy service by Patricio Figueroa, offering expertise in digital marketing and ecommerce to help individuals and businesses succeed in the online world.",
  },
  {
    href: "https://mymasterwar.com/",
    image: "/Mymaster.PNG",
    title: "Mymaster [NFT marketplace]",
    description: "A revolutionary DeFI x NFT gaming ecosystem that integrates blockchain technology, Free Play to Earn, and a Staking model, allowing players to engage in immersive gameplay experiences without spending money, spanning from History to Fiction.",
  },
  {
    href: "https://apps.apple.com/us/app/vip-billionaires-social-chat/id1076103571",
    image: "/Social Chat.PNG",
    title: "Social Chat [Mobile]",
    description: "A project that I am proud of after over 7 years of development. If you click on the title, you can go to the corresponding website and view it in detail. You can also see the specific source code by visiting my GitHub.",
  },
  {
    href: "https://lasatlantisbonuses.com/",
    image: "/Lasatlan.PNG",
    title: "Lasatlantisbonuses [Casino Game]",
    description: "It was a little hard for building and I need to be mastered about PHP8, Laravel, Bootstrap5, TailwindCSS, JQuery and Typescript.",
  },
  {
    href: "https://www.figma.com/proto/pSChVlxcATkXoBZs7Lbmy7/Bugs?page-id=0%3A1&node-id=1-2&viewport=1629%2C2980%2C0.64&t=Pwar86g30bct0NId-1&scaling=scale-down-width&content-scaling=fixed",
    image: "/bugs coin.png",
    title: "$BUGS COIN [design]",
    description: "A meme token figma design about famous 2D cartoon character-rabbit $BUGS.",
  },
  {
    href: "https://www.youtube.com/watch?v=af7-DFSbFZ4",
    image: "/desktop-app.png",
    title: "Session Node.js Bot (client)",
    description: "Used framework for developing bots in the Session messenger. Headless client for working with the Session messenger API.",
  },
  {
    href: "https://promosoundgroup.net/",
    image: "/electron.png",
    title: "Promo Sound Project",
    description: "Joined promosound project and took part offering comprehensive promotion services to boost your online visibility and help you achieve your music marketing goals.",
  },
  {
    href: "https://rebase.gg/",
    image: "/Rebase.PNG",
    title: "Rebase Blockchain",
    description: "Rebase envisions leading the market for geo-location based marketing by allowing digital assets to finally have a home in the real world. Any type of digital assets (Cryptocurrency, NFT, or on-chain game assets).",
  },
  {
    href: "https://ons.sessionbots.directory/",
    image: "/ons registry.png",
    title: "ONS Registry [Bot Working]",
    description: "Open and free ONS record registry, automatically analyzing OXEN blockchain. The backend parses new ONS records using JSON RPC and decrypts values using Blake2b and argon2.",
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
      <Flex flexDir="column" justify="center" align="center" maxWidth="1200px">
        <Header href="#projects">Projects</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>I've posted my past projects by types.</SubHeading>
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
