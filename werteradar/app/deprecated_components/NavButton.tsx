import { Box, Button, Icon } from "@chakra-ui/react";
import React from "react";

const scalingFactor = 1;

const NavButton = () => {
  return (
    <Button
      bg={"#4C3CEC"}
      borderRadius={"50px"}
      width={"4.02%"}
      height={"22.77%"}
    >
      <Icon
        // as="svg"
        width={`${scalingFactor * 63}`}
        height={`${scalingFactor * 195}`}
        viewBox={`0 0 ${scalingFactor * 63} ${scalingFactor * 195}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 57L40 97.5L26 138"
          fill="none"
          stroke="white"
          stroke-width="7"
          stroke-linecap="round"
        />
      </Icon>
    </Button>
  );
};

export default NavButton;
