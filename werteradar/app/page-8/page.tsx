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

const headingText =
  "Welche Aspekte sind Ihnen wichtig, wenn es um die Spende Ihrer medizinischen Daten geht?";
const mainText = [
  <Text>
    Wir möchten, dass Sie eine Entscheidung treffen, die Ihren{" "}
    <Text as="b">persönlichen Bedürfnissen und Werten</Text> am besten
    entspricht!
  </Text>,
  "Die Fragen auf der folgenden Seite sollen Ihnen daher helfen zu reflektieren, was Ihnen wichtig ist, wenn es darum geht, Ihre Daten für die medizinische Forschung zur Verfügung zu stellen.",
];

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-7", "/page-9"]}
        progressPercent={850 / totalApplicationPages}
        progressStep={2}
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
