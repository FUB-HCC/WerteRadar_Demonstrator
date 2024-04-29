"use client";

import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Divider,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import NavHeader from "../components/NavHeader";
import NavBar from "../components/NavBar";
import MainGrid from "../components/MainGrid";
import NavFooter from "../components/NavFooter";
import ConsentElementGroup from "../components/ConsentElementGroup";
import MainLayout from "../components/MainLayout";
import { scalePX } from "../utils/functions";
import { headingTextProps, mainTextProps } from "../utils/constants";
import NextLink from "next/link";
import Cookies from "js-cookie";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    function deleteAllCookies() {
      var cookies = Object.keys(Cookies.get());

      cookies.forEach(function (cookieName) {
        Cookies.remove(cookieName);
      });
    }

    // Call the function to delete all cookies
    deleteAllCookies();
  };

  return (
    <>
      <MainLayout
        links={["", ""]}
        rightNavButtonText={"Auswahl bestätigen"}
        navButtonBackground={"#4C3CEC"}
        navButtonColor="white"
        progressStep={4}
        progressPercent={1700 / 17}
        // showNavHeader={false}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100%"}
          padding={scalePX(60)}
        >
          <Text width={"100%"} textAlign={"center"} {...headingTextProps}>
            Vielen Dank
          </Text>

          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            // height={"100%"}
            padding={scalePX(60)}
          >
            <Text width={"100%"} textAlign={"center"} {...mainTextProps}>
              Wenn Sie darüber informiert werden möchten, welchen
              Forschungsprojekte Ihre gespendeten Daten nutzen, tragen Sie hier
              Ihre Email ein:
            </Text>
            <InputGroup
              // border="4px solid #4C3CEC"
              // height={scalePX(70)}
              // width={scalePX(1314)}
              background={"#FFF"}
              border={"7px solid #4C3CEC"}
              borderRadius={"15px"}
              marginTop={scalePX(35)}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              padding={"7px"}
            >
              <Input
                // height={"100px"}
                width={"100%"}
                // flexShrink={"0"}

                // background={"green"}
                borderRadius={"30px"}
                value={inputValue}
                border={"none"}
                focusBorderColor="white"
                onChange={handleInputChange}
                fontSize={scalePX(30)}
                fontStyle={"normal"}
                fontWeight={"600"}
                lineHeight={"normal"}
                placeholder="Tragen Sie hier Ihre E-Mail-Adresse ein."
              />
              <Link as={NextLink} href={"/page-1"}>
                <Button
                  // type="submit"
                  height={scalePX(56)}
                  width={scalePX(234)}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"normal"}
                  fontSize={scalePX(30)}
                  color={"white"}
                  background={"#4C3CEC"}
                  borderRadius={"10px"}
                  onClick={handleSubmit}
                  // isDisabled={userMessages.length >= 3}
                >
                  Eingabe
                </Button>
              </Link>
            </InputGroup>
          </Flex>
        </Flex>
        {/* <Flex
          height={"100%"}
          // width={"90%"}
          borderRadius={"30px"}
          justifyContent={"center"}
          background={"yellow"}
        >
          <iframe
            src={"einwilligung.pdf"}
            height="100%"
            width={"100%"}
            style={{ border: "1px solid #ddd" }}
            frameBorder="0"
          ></iframe>
        </Flex> */}
      </MainLayout>
    </>
  );
};

export default Page;
