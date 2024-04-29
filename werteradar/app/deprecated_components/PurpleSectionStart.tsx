import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PurpleSectionStart = ({
  headerText,
  mainTextSections,
  nextButtonText,
}: {
  headerText: string;
  mainTextSections: Array<string>;
  nextButtonText: string;
}) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      background="#EDEDED"
      // background={"green"}
      borderRadius="50px"
      borderColor="#4C3CEC"
      borderWidth={"4px"}
      boxShadow="0px 0px 40px 0px rgba(0, 0, 0, 0.25)"
      padding={"20px"}
    >
      <Box
        // background={"green"}
        fontStyle={"normal"}
        fontSize={"35px"}
        color={"#4C3CEC"}
        fontWeight={"700"}
        lineHeight={"40px"}
        textAlign={"center"}
      >
        {headerText}
      </Box>
      <Divider borderWidth={"2px"} color={"#4C3CEC"} variant={"solid"} />

      <Flex
        height={"80%"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        // background={"green"}
      >
        <Box
          // background={"green"}
          textAlign={"center"}
          fontStyle={"normal"}
          fontSize={"25px"}
          color={"#4C3CEC"}
          fontWeight={"600"}
          lineHeight={"32px"}
          paddingLeft={"50px"}
          paddingRight={"50px"}
        >
          {mainTextSections.map((text, index) => (
            <Text key={index} marginTop={"30px"}>
              {text}
            </Text>
          ))}
        </Box>
        <Button borderRadius={"30px"} background={"#4C3CEC"} color={"white"}>
          {nextButtonText}
        </Button>
      </Flex>

      {/* {children} */}
    </Box>
  );
};

export default PurpleSectionStart;
