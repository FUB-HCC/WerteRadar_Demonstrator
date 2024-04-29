"use client";
import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { Button, AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import {
  headingTextProps,
  mainTextProps,
  totalApplicationPages,
} from "../utils/constants";
import { scalePX } from "../utils/functions";

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-4", "/page-6"]}
        progressPercent={580 / totalApplicationPages}
        progressStep={1}
      >
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AspectRatio
            // maxW={"100%"}
            height={"100%"}
            // maxHeight={"100%"}
            width={"95%"}
            // height={"100%"}
            ratio={16 / 9}
            // border={"3px solid pink"}
            
          >
            <iframe title="video" src="https://www.youtube.com/embed/uIDTmo_iImg?si=wbFhkAz2rMh45kte&autoplay=1" allowFullScreen autoplay/>
          </AspectRatio>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
