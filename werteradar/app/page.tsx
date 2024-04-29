"use client";
import React from "react";
import { Flex, Link, Box, Button } from "@chakra-ui/react";

import NextLink from "next/link";
import { navButtonStyling } from "./utils/constants";
const Page = () => {
  return (
    <>
      <Flex
        height={"100vh"}
        width={"100vw"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link as={NextLink} href={"/page-1"}>
          <Button {...navButtonStyling} color={"white"} bg={"#4C3CEC"}>
            Beginnen
          </Button>
        </Link>
      </Flex>
      {/* <MainLayout
        links={["", ""]}
        showNavHeader={false}
        isStarted={false}
        progressPercent={0}
        progressStep={0}
      ></MainLayout>
      */}
    </>
  );
};

export default Page;
