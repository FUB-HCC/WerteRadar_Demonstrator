import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <>
      <Flex // 56px
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box // 13 / 56 = 23.21%
          height={"23.21%"}
          width={"100%"}
          borderRadius={"30px"}
          border={"1.5px solid #B6B6B6"}
          boxShadow={"0px 0px 15px 0px rgba(255, 255, 255, 0.55) inset"}
        >
          <Box
            height={"100%"}
            width={"20%"}
            bg={"rgba(76, 60, 236, 0.50)"}
            borderRadius={"30px"}
            boxShadow={"0px 0px 5px 0px rgba(255, 255, 255, 0.25) inset;"}
          ></Box>
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
