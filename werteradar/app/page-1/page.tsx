"use client";
import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import {
  headingTextProps,
  mainTextProps,
  totalApplicationPages,
  navButtonStylingConfirmation,
} from "../utils/constants";
import { scalePX } from "../utils/functions";

const headingText = "Digitale Entscheidungshilfe zur Datenspende";
const mainText = [
  "Bevor es losgeht, möchten wir Ihnen eine kurze Übersicht zur Bedienung dieser Anwendung geben.",
  "In vier Schritten werden Ihnen die wichtigsten Funktionen erklärt.",
];

const Page = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [instructionViewed, setInstructionViewed] = useState(false);

  return (
    <>
      <MainLayout
        links={["/page-1", "/page-2"]}
        progressPercent={0 / totalApplicationPages}
        showNavHeader={isStarted}
        showNavButtons={isStarted}
        // leftNavIsActive={false}
        // rightNavIsActive={instructionViewed}
        isStarted={isStarted}
        progressStep={0}
        setInstructionViewed={setInstructionViewed}
        isFirstPage={true}
        // showInstructions={isStarted}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          // justifyContent={"center"}
          alignItems={"center"}
          padding={scalePX(32)}
          color={"#4C3CEC"}
          position={"relative"}
          // zIndex={3}
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
                <Text key={index} {...mainTextProps} marginBottom={scalePX(30)}>
                  {t}
                </Text>
              );
            })}
          </Box>

          <Button
            {...navButtonStylingConfirmation}
            width={scalePX(1314)}
            height={scalePX(70)}
            // bg={"#4C3CEC"}
            // borderRadius={"41px"}
            onClick={() => {
              setIsStarted(true);
            }}
            // color="#FFF"
            // textAlign="center"
            fontSize={scalePX(30)}
            fontStyle="normal"
            fontWeight={700}
            lineHeight="normal"
            position={"absolute"}
            bottom={"20px"}
            // visibility={isStarted ? "hidden" : "visible"}
          >
            Einführung beginnen
          </Button>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
