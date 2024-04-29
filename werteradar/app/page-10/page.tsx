"use client";
import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import { headingTextProps, mainTextProps } from "../utils/constants";
import { scalePX } from "../utils/functions";

const headingText =
  "Möchten Sie Ihre Daten der medizinischen Forschung zur Verfügung stellen?";
const mainText = [
  <Text>
    Auf Basis der Informationen und Ihrer Reflektionen, können Sie nun im
    folgenden Abschnitt darüber <Text as="b">entscheiden</Text>, ob Sie Ihre
    Daten für medizinische Forschungszwecke spenden möchten und in welchem
    Umfang dies geschehen soll.
  </Text>,
];

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-9", "/page-11"]}
        progressStep={3}
        progressPercent={75}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          // justifyContent={"center"}
          alignItems={"center"}
          padding={scalePX(32)}
          color={"#4C3CEC"}
          position={"relative"}
        >
          <Box width={scalePX(1086)} textAlign={"center"}>
            <Text
              width={"100%"}
              // width={"700px"}
              marginTop={scalePX(86)}
              marginBottom={scalePX(60)}
              {...headingTextProps}
            >
              {headingText}
            </Text>
            {mainText.map((t, index) => {
              return (
                <Text
                  key={index}
                  {...mainTextProps}
                  marginBottom={scalePX(30)}
                  // sx={{ ...mainTextProps }}
                >
                  {t}
                </Text>
              );
            })}
          </Box>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
