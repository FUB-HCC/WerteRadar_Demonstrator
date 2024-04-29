"use client";
import { Text, Flex, Button, forwardRef } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import React from "react";
import { scalePX } from "../utils/functions";
import {
  navButtonStyling,
  navButtonStylingConfirmation,
} from "../utils/constants";

const NavFooter = forwardRef(
  (
    {
      links,
      showNavButtons,
      rightNavButtonText,
      leftIsActive = true,
      rightIsActive = true,
    },
    ref
  ) =>
    // : ({
    //   instructionIsOpen: boolean;
    //   links: Array<string>;
    //   showNavButtons: boolean;
    //   rightNavButtonText: string;
    //   leftIsActive?: boolean;
    //   rightIsActive?: boolean;
    //   navButtonBackground?: string;
    //   navButtonColor?: string;
    // }, React.forwardRef)
    {
      const navButtonText = ["Zurück", rightNavButtonText];

      // const rightNavButtonStyling =
      //   rightNavButtonText === "Weiter"
      //     ? navButtonStyling
      //     : navButtonStylingConfirmation;

      const rightNavButtonStyling = navButtonStylingConfirmation;

      return (
        <>
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            marginTop={scalePX(38)}
          >
            {navButtonText.map((buttonText, index) => {
              return (
                <Link
                  key={index}
                  as={NextLink}
                  href={links[index]}
                  visibility={
                    !showNavButtons
                      ? "hidden"
                      : links[index] !== ""
                      ? "visible"
                      : "hidden"
                  }
                >
                  {index == 0 ? (
                    <>
                      <Button
                        {...navButtonStyling}
                        // color={navButtonColor}
                        // background={navButtonBackground}
                        // _hover={{ bg: "#C9C4FF" }}
                        _disabled={{ bg: "#E1E1E1", color: "#B3B3B3" }}
                        isDisabled={!leftIsActive}
                      >
                        <Flex
                          width={"100%"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <ChevronLeftIcon boxSize={scalePX(60)} />
                          <Text>{buttonText}</Text>
                          <ChevronLeftIcon
                            boxSize={scalePX(60)}
                            visibility={"hidden"}
                          />
                        </Flex>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        ref={ref}
                        {...rightNavButtonStyling}
                        isDisabled={!rightIsActive}
                        _disabled={{
                          bg: "rgba(225, 225, 225, 0.4)",
                          color: "#B3B3B3",
                        }}
                      >
                        <Flex
                          width={"100%"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          // background={"yellow"}
                        >
                          <ChevronRightIcon
                            // boxSize={scalePX(60)}
                            visibility={"hidden"}
                          />
                          <Text>{buttonText}</Text>
                          <ChevronRightIcon boxSize={scalePX(60)} />
                        </Flex>
                      </Button>
                    </>
                  )}
                </Link>
              );
            })}
          </Flex>
        </>
      );
    }
);

export default NavFooter;
