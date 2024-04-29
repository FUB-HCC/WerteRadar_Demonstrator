"use client";
import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import {
  headingTextProps,
  mainTextProps,
  totalApplicationPages,
} from "../utils/constants";
import { scalePX } from "../utils/functions";

const headingText = "Haben Sie offene Fragen zur medizinischen Datenspende?";
const mainText = [
  "Auf der folgenden Seite finden Sie weiterführende Informationen zur medizinischen Datenspende und der Patient:innen-Einwilligung.",
  "Lesen Sie diese aufmerksam, um anschließend eine Entscheidung für Ihre Datenspende zu treffen.",
];

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-5", "/page-7"]}
        progressPercent={650 / totalApplicationPages}
        progressStep={1}
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
