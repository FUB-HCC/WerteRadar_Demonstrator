import { Box } from "@chakra-ui/react";
import React from "react";
import { scalePX } from "../utils/functions";

const MainContentContainer = ({
  // color= ""
  children,
  backgroundColor = "#EDEDED",
  enableBackground = true,
}: {
  enableBackground?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
}) => {
  const backgroundProps = {
    background: backgroundColor,
    borderRadius: "30px",
    border: "2px solid #C2C2C2",
    boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.25)",
  };

  const styleProps = enableBackground ? backgroundProps : {};

  return (
    <Box
      width={scalePX(1375)}
      height={scalePX(721)}
      flexShrink={0}
      {...styleProps}
      // background={backgroundColor}
      // borderRadius="30px"
      // borderColor="#B6B6B6"
      // borderWidth={"2px"}
      // padding={"20px"}
    >
      {children}
    </Box>
  );
};

export default MainContentContainer;
