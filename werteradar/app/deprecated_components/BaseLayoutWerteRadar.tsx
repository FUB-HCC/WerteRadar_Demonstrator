import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { scalePX, maxHeight, maxWidth } from "../utils/functions";

const BaseLayoutWerteRadar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      background={"gray.700"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        // width={maxWidth}
        // height={maxHeight}
        // flexDirection={"column"}
        // justifyContent={"center"}
        // alignItems={"center"}
        border={"15px solid black"}
        background={"#FFFFFF"}
        borderRadius={"20px"}
        // position={"relative"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default BaseLayoutWerteRadar;
