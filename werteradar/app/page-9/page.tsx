"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { Button, AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import {
  headingTextProps,
  mainTextProps,
  totalApplicationPages,
} from "../utils/constants";
import { scalePX } from "../utils/functions";
import ChatWindow from "../components/ChatWindow";

const Page = () => {
  const [userMessages, setUserMessages] = useState([]);
  return (
    <>
      <MainLayout
        links={["page-8", "/page-10"]}
        progressPercent={1100 / totalApplicationPages}
        // progressPercent={500 / totalApplicationPages}
        progressStep={2}
        rightNavIsActive={userMessages.length >= 3}
        // rightNavHintPopOver={<HintPopover />}
      >
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          // onClick={() => console.log(messagePointer, messages, answers)}
        >
          <ChatWindow
            userMessages={userMessages}
            setUserMessages={setUserMessages}
            // messages={messages}
            // messagePointer={messagePointer}
            // setMessagePointer={setMessagePointer}
            // handleNewMessage={handleNewMessage}
          ></ChatWindow>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
