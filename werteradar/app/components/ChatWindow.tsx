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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { scalePX, mergeArrays } from "../utils/functions";
import { systemQuestions } from "../utils/constants";
import HintPopover from "./HintPopover";

const Message = ({ message, isUserMessage }) => {
  return (
    <Flex
      borderRadius={scalePX(60)}
      width={scalePX(771)}
      // height={scalePX(153)}
      p={scalePX(25)}
      // flexShrink={0}
      // zIndex={1}
      mt={scalePX(20)}
      // margin={"10px"}
      fontSize={scalePX(30)}
      fontWeight={700}
      lineHeight={scalePX(40)}
      color={isUserMessage ? "#FFF" : "#292929"}
      alignSelf={isUserMessage ? "flex-end" : "flex-start"}
      bg={
        isUserMessage
          ? "linear-gradient(180deg, #4C3CEC 0%, rgba(76, 60, 236, 0.00) 220%);"
          : "linear-gradient(180deg, #EDEDED 0%, rgba(237, 237, 237, 0.00) 155.83%);"
      }
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}

      // background={"#EDEDED"}
      // background={
      //   "linear-gradient(180deg, #EDEDED 0%, rgba(237, 237, 237, 0.00) 155.83%);"
      // }
    >
      {message}
    </Flex>
  );
};

const ChatWindow = ({ userMessages, setUserMessages }) => {
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: nextIsOpen,
    onOpen: nextOnOpen,
    onClose: nextOnClose,
  } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const [cookiesPresentOnInitialRender, setCookiesPresentOnInitialRender] =
    useState(true);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addMessage(inputValue, "user");
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    addMessage(inputValue, "user");
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onOpen();
    }, 200); // 10 seconds in milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const addMessage = (message, type) => {
    const newMessages = [...messages, [message, type]];

    setMessages(newMessages);

    if (type == "user") {
      const newUserMessages = [...userMessages, message];
      setUserMessages(newUserMessages);
      setInputValue("");

      Cookies.set(`message_${newUserMessages.length}`, message, {
        sameSite: "Lax",
      });

      if (newUserMessages.length == 3) {
        nextOnOpen();
      }
    }
  };

  useEffect(() => {
    if (cookiesPresentOnInitialRender) {
      return;
    } else if (userMessages.length <= 3) {
      const systemMessageTimeout = setTimeout(() => {
        addMessage(systemQuestions[userMessages.length][0], "system");
      }, 800); // Adjust the delay time for the system message as needed

      return () => {
        clearTimeout(systemMessageTimeout);
      };
    }
  }, [userMessages, cookiesPresentOnInitialRender]);

  useEffect(() => {
    // nextOnClose();

    let m = Cookies.get(`message_1`);
    if (m !== undefined) {
      let userMessagesFromCookie = [];
      let i = 1;
      while (true) {
        let m = Cookies.get(`message_${i}`);
        if (m === undefined) {
          break;
        } else {
          userMessagesFromCookie.push(m);
        }
        // console.log(m);

        i++;
      }
      const messageArr = mergeArrays(
        systemQuestions,
        userMessagesFromCookie.map((e) => [e, "user"])
      );
      // console.log(messageArr);
      setMessages(messageArr);
      setUserMessages(userMessagesFromCookie);
    } else {
      setCookiesPresentOnInitialRender(false);
    }
  }, []);

  return (
    <Flex
      height={"100%"}
      width={"100%"}
      bg={"#FFF"}
      padding={scalePX(18)}
      borderRadius={"30px"}
      flexDirection={"column"}
      // position={"relative"}
    >
      {/* <QuestionPopover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      ></QuestionPopover> */}

      <Flex
        maxH="90%"
        height={"80%"}
        // bg={"linear-gradient(to top, #FFF 2.33%, rgba(255, 255, 0, 0) 84.9%);"}
        // bg={"linear-gradient(to bottom, rgba(255,255,255, 0), white);"}
        overflow="auto"
        // overflow="auto"
        // position={"relative"}
        // background={"yellow"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        p={4}
        // zIndex={20}
      >
        {messages &&
          messages.map((m: any, index: number) => {
            const isUserMessage = m[1] == "user";
            return (
              <Flex
                key={index}
                borderRadius={scalePX(60)}
                width={scalePX(771)}
                height={scalePX(153)}
                p={scalePX(25)}
                // flexShrink={0}
                // zIndex={1}
                mt={scalePX(20)}
                // margin={"10px"}
                fontSize={scalePX(30)}
                fontWeight={700}
                lineHeight={scalePX(40)}
                color={isUserMessage ? "#FFF" : "#292929"}
                alignSelf={isUserMessage ? "flex-end" : "flex-start"}
                // background={"yellow"}
                bg={
                  isUserMessage
                    ? "linear-gradient(180deg, #4C3CEC 0%, rgba(76, 60, 236, 0.00) 220%);"
                    : "linear-gradient(180deg, #EDEDED 0%, rgba(237, 237, 237, 0.00) 155.83%);"
                }
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
              >
                {m[0]}
              </Flex>

              // <Message
              //   key={index}
              //   message={m[0]}
              //   isUserMessage={m[1] == "user"}
              // />
            );
          })}
      </Flex>
      <InputGroup
        // border="4px solid #4C3CEC"
        // height={scalePX(70)}
        width={scalePX(1314)}
        border={"7px solid #4C3CEC"}
        borderRadius={"15px"}
        marginTop={scalePX(15)}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"7px"}
      >
        <HintPopover
          placement={"top"}
          defaultIsOpen={true}
          isOpen={isOpen}
          onClose={onClose}
          paddingRight={scalePX(60)}
          offset={[0, 35]}
          bodyText={[
            "Tippen Sie auf das Eingabefeld, um die Fragen zu beantworten. Tragen Sie pro Frage eine Antwort ein, um fortzufahren.",
            "Ihre Angaben dienen allein der Unterstützung Ihrer Entscheidungsfindung und werden nach Abschluss der Anwendung gelöscht.",
          ]}
        >
          <Input
            // height={"100px"}
            width={"100%"}
            // flexShrink={"0"}
            // background={"#FFF"}
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
            placeholder="Machen Sie in dieses Feld Ihre Eingabe"
            onKeyDown={handleKeyPress}
          />
        </HintPopover>
        {/* <HintPopover
          isOpen={nextIsOpen}
          defaultIsOpen={false}
          onClose={nextOnClose}
          placement={"top"}
          offset={[0, -70]}
          width={scalePX(743)}
          bodyText={[
            'Sie können nun fortfahren indem Sie auf "Weiter" klicken.',
          ]}
        > */}
        <Button
          // type="submit"
          height={scalePX(56)}
          width={scalePX(234)}
          fontStyle={"normal"}
          fontWeight={"600"}
          marginLeft={scalePX(10)}
          lineHeight={"normal"}
          fontSize={scalePX(30)}
          color={"white"}
          background={"#4C3CEC"}
          borderRadius={"10px"}
          onClick={handleSubmit}
          _hover={{ background: "#130786" }}
          // isDisabled={userMessages.length >= 3}
        >
          Eingabe
        </Button>
        {/* </HintPopover> */}
      </InputGroup>
    </Flex>
  );
};

export default ChatWindow;
