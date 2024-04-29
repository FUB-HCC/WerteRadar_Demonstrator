"use client";
import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import {
  headingTextProps,
  mainTextProps,
  headingTextPropsBlack,
  mainTextPropsBlack,
  totalApplicationPages,
} from "../utils/constants";
import { scalePX } from "../utils/functions";
import BroadConsentAccordion from "../components/BroadConsentAccordion";

const headingText = "Häufige Fragen zur medizinischen Datenspende";

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-6", "/page-8"]}
        progressPercent={750 / totalApplicationPages}
        progressStep={1}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          padding={scalePX(32)}
          color={"#292929"}
        >
          <Text
            width={"100%"}
            marginTop={scalePX(30)}
            marginBottom={scalePX(40)}
            textAlign={"center"}
            {...headingTextPropsBlack}
          >
            {headingText}
          </Text>
          <BroadConsentAccordion></BroadConsentAccordion>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
