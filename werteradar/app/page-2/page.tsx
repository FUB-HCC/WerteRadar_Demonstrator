"use client";
import React from "react";
import MainLayout from "../components/MainLayout";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  headingTextProps,
  mainTextProps,
  totalApplicationPages,
} from "../utils/constants";
import { scalePX } from "../utils/functions";

const headingText =
  "Was ist das Ziel der Digitalen Entscheidungshilfe zur Datenspende?";
const mainText = [
  <Text>
    Diese Anwendung soll Ihnen dabei helfen zu entscheiden, ob und in welchem
    Umfang Sie <Text as="b">Ihre Daten</Text> für die{" "}
    <Text as="b"> medizinische Forschung</Text>
    bereitstellen möchten.
  </Text>,
];

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-1", "/page-3"]}
        progressPercent={0 / totalApplicationPages}
        progressStep={0}
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
