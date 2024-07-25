import * as React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import isMobile from "is-mobile";

interface Props {
  description: string;
  title: string;
  image: string;
  href: string;
}

export default function Card({ title, description, image, href }: Props) {
  const hover = isMobile()
    ? {}
    : { cursor: "pointer", borderColor: "blue.300" };

  const active = isMobile() ? { borderColor: "blue.300" } : {};

  return (
    <Box p="16px">
        <Box
          p="20px"
          width="320px"
          height="550px"
          borderWidth="1px"
          borderColor="whiteAlpha.300"
          _hover={hover}
          _active={active}
        >
          <Image
            borderRadius="md"
            width="100%"
            height="200px"
            objectFit="contain"
            alt={title}
            src={image}
          />
          <Text mt={2} fontSize="18px" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          <Text mt={2}>{description}</Text>
        </Box>
    </Box>
  );
}
