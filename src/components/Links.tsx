import { Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <Flex pt="8px" width="82px" justify="space-between">
      <Link
        href="https://twitter.com/samuelrujin511"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </Link>
{/*
      <Link
        href="https://github.com/StainerHenry"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </Link>
*/}
{/*
      <Link
        href="https://www.linkedin.com/in/samuel-rujin511"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </Link>
*/}
      <Link
        href="samuelrujin511@gmail.com"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </Link>

      <Link
        href="https://t.me/roctus1990511"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faTelegram} size="lg" />
      </Link>

    </Flex>
  );
}
