"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import {
  headingTextProps,
  mainTextProps,
  totalApplicationPages,
} from "../utils/constants";
import { scalePX } from "../utils/functions";
import ChatAnswers from "../components/ChatAnswers";
import Cookies from "js-cookie";

const headingText =
  "Was ist das Ziel der Digitalen Entscheidungshilfe zur Datenspende?";
const mainText = [
  "Diese Anwendung soll Ihnen dabei helfen zu entscheiden, ob und in welchem Umfang Sie Ihre Daten für die medizinische Forschung bereitstellen möchten.",
];

const Message = ({ message, isUserMessage }) => {
  return (
    <Flex
      borderRadius="60px"
      // width={"67.21%"}
      minW={scalePX(730)}
      // width={"100%"}
      p={4}
      // m={6}
      margin={"10px"}
      fontSize={"25px"}
      // color={isUserMessage ? "#FFF" : "#292929"}
      // bg={isUserMessage ? "#4C3CEC" : "#EDEDED"}
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={isUserMessage ? "flex-end" : "flex-start"}
      color={"#FFF"}
      bg={"#4C3CEC"}
    >
      {message}
    </Flex>
  );
};

const Page = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [messages, setMessages] = useState<Array<string | undefined>>([]);
  const [showMessages, setShowMessages] = useState([]);

  const showMessagesSequentially = async () => {
    // Show the first message after 1 second
    await delay(500);

    for (let i = 0; i < messages.length; i++) {
      let newShowMessages = showMessages.map((e, index) => {
        return index <= i ? true : false;
      });
      console.log(newShowMessages);
      setShowMessages(newShowMessages);
      await delay(2500);
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (messages) {
      showMessagesSequentially();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  useEffect(() => {
    let userMessagesFromCookie = [];
    let i = 1;
    while (true) {
      let m = Cookies.get(`message_${i}`);
      console.log(i, m);
      if (m === undefined) {
        break;
      } else {
        userMessagesFromCookie.push(m);
      }
      i++;
    }
    let showMessages = userMessagesFromCookie.map(() => false);
    console.log(userMessagesFromCookie);
    setShowMessages(showMessages);
    setMessages(userMessagesFromCookie);
    console.log(showMessages);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 10000); // 10 seconds in milliseconds

    const countdownInterval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000); // Update countdown every 1 second

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <>
      <MainLayout
        links={["page-13", "/page-15"]}
        progressPercent={95}
        progressStep={3}
        rightNavIsActive={isButtonEnabled}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={scalePX(32)}
          bg={"#FFF"}
          //   bg={"yellow"}
          borderRadius="30px"
        >
          <Text
            // width={"100%"}
            // background={"green"}
            color={"#4C3CEC"}
            textAlign={"center"}
            fontSize={scalePX(35)}
            lineHeight={scalePX(41)}
            // bg={"yellow"}
            fontWeight={"700"}
            fontStyle={"normal"}
          >
            {
              "Denken Sie noch einmal über ihre persönliche Bedürfnisse nach, bevor Sie Ihre Auswahl zur Bereitstellung Ihrer Daten bestätigen."
            }
          </Text>

          <Flex
            overflowY="auto"
            position={"relative"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            p={4}
          >
            {messages.map((message: string, index: number) => {
              return (
                <Flex
                  key={index}
                  borderRadius="60px"
                  // width={"67.21%"}
                  minW={scalePX(730)}
                  // width={"100%"}
                  p={4}
                  // m={6}
                  margin={"10px"}
                  display={showMessages[index] ? "visible" : "none"}
                  // color={isUserMessage ? "#FFF" : "#292929"}
                  // bg={isUserMessage ? "#4C3CEC" : "#EDEDED"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  alignSelf={index % 2 != 0 ? "flex-end" : "flex-start"}
                  color={"#FFF"}
                  // bg={"#4C3CEC"}
                  bg={
                    "linear-gradient(180deg, #4C3CEC 0%, rgba(76, 60, 236, 0.00) 220%);"
                  }
                  // bg={
                  //   isUserMessage
                  //     ? "linear-gradient(180deg, #4C3CEC 0%, rgba(76, 60, 236, 0.00) 220%);"
                  //     : "linear-gradient(180deg, #EDEDED 0%, rgba(237, 237, 237, 0.00) 155.83%);"
                  // }
                >
                  <Text
                    width={"100%"}
                    textAlign={"center"}
                    fontSize={scalePX(30)}
                    lineHeight={scalePX(40)}
                    fontWeight={700}
                  >
                    {message}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <Button
            height={scalePX(70)}
            textAlign="center"
            fontSize={scalePX(30)}
            fontStyle="normal"
            fontWeight="700"
            lineHeight={scalePX(40)}
            width={"100%"}
            borderRadius={"41px"}
            color={"#4C3CEC"}
            border={"7px solid #4C3CEC"}
            background="#FFF"
            // onClick={handleClick}
            visibility={isButtonEnabled ? "hidden" : "visible"}
            isDisabled={!isButtonEnabled}
          >
            {isButtonEnabled
              ? "Nächsten Schritt starten."
              : `Der nächste Schritt wird in ${secondsRemaining} Sekunden geladen.`}
          </Button>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
