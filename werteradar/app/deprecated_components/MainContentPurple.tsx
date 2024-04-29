import { Box, Button, Divider, Text } from "@chakra-ui/react";
import React from "react";

const MainContentPurple = ({ children }: { children: React.ReactNode }) => {
  const headerText = "Einführung";

  const mainText = [
    "Das Ziel der folgenden Anwendung ist es, Ihnen aufzuzeigen, wie medizinische Forschung mit Patient:innen-Daten funktioniert sowie Ihnen bei der Entscheidung zu helfen, ob Sie Ihre Daten der medizinischen Forschung zur Verfügung stellen möchten.",
    "Rechnen Sie dafür mit ca. 10-15 Minuten Zeitaufwand.",
    "Bei Fragen, hilft Ihnen das Klinikpersonal gerne weiter.",
  ];

  return (
    <Box
      width={"100%"}
      height={"100%"}
      background="#EDEDED"
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

      <Box
        textAlign={"center"}
        fontStyle={"normal"}
        fontSize={"25px"}
        color={"#4C3CEC"}
        fontWeight={"600"}
        lineHeight={"32px"}
        paddingLeft={"50px"}
        paddingRight={"50px"}
      >
        {mainText.map((text, index) => (
          <Text key={index} marginTop={"30px"}>
            {text}
          </Text>
        ))}
      </Box>
      <Button></Button>

      {children}
    </Box>
  );
};

export default MainContentPurple;
