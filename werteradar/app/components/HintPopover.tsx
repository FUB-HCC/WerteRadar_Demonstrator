"use client";
import {
  Box,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  VStack,
  Text,
  IconButton,
  Divider,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Flex,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";
import Cookies from "js-cookie";
import { scalePX } from "../utils/functions";

const HintPopover = forwardRef(
  ({
    isOpen,
    onClose,
    bodyText,
    children,
    paddingRight,
    width = scalePX(903),
    offset = [0, 0],
    placement = "bottom",
    defaultIsOpen = true,
  }: {
    paddingRight?: string;
    isOpen: boolean;
    onClose: any;
    bodyText: Array<string>;
    children: any;
    offset?: Array<Number>;
    placement?: string;
    width?: string;
    defaultIsOpen?: boolean;
  }) => {
    return (
      <>
        <Popover
          isOpen={isOpen}
          onClose={onClose}
          defaultIsOpen={defaultIsOpen}
          offset={offset}
          // returnFocusOnClose={false}
          // minW={scalePX(900)}
          //   onClose={onClose}
          placement={placement}
          // closeOnBlur={false}
          // arrowPadding={10}
          arrowSize={40}
          // zIndex={1000}
        >
          <PopoverTrigger>{children}</PopoverTrigger>

          <PopoverContent
            fontWeight={600}
            borderRadius={scalePX(45)}
            width={width}
            padding={scalePX(26)}
            // zIndex={4}
            border={"4px solid #078921"}
          >
            <PopoverArrow
              borderWidth="4px"
              borderStyle="solid"
              borderColor={
                placement == "bottom"
                  ? "#078921 white white #078921"
                  : "white #078921 #078921 white"
              }
            />

            <PopoverCloseButton
              margin={scalePX(10)}
              height={scalePX(60)}
              width={scalePX(60)}
              fontSize={scalePX(30)}
              borderRadius={scalePX(30)}
              background={"#C2C2C2"}
              color="white"
            />

            <PopoverBody paddingRight={paddingRight}>
              {bodyText.map((t, index) => (
                <Text key={index} marginTop={"10px"} color={"black"}>
                  {t}
                </Text>
              ))}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  }
);

export default HintPopover;
