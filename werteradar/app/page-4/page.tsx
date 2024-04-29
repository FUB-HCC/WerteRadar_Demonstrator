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

const headingText = "Wie funktioniert die Forschung mit Patient:innen-Daten?";
const mainText = [
  <Text>
    Das <Text as="b">folgende Video</Text> erklärt Ihnen den Ablauf von
    medizinischer Forschung mit Patient:innen-Daten sowie den Prozess der
    Datenspende.
  </Text>,
];

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-3", "/page-5"]}
        progressPercent={450 / totalApplicationPages}
        progressStep={1}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
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
