import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaDiscord } from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="24">
      <Icon
        as={FaDiscord}
        onClick={() => {
          window.open("https://discordapp.com/users/wolfiee#5895");
        }}
        boxSize="50"
      />
    </HStack>
  );
}

export default Social;
