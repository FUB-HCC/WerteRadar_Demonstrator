import { Box } from "@chakra-ui/react";
import React from "react";

const MainContentGray = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      background="#FFFFFF"
      borderRadius="50px"
      borderColor="#B6B6B6"
      borderWidth={"2px"}
      boxShadow="0px 0px 40px 0px rgba(0, 0, 0, 0.25)"
      padding={"20px"}
    >
      {children}
    </Box>
  );
};

export default MainContentGray;
