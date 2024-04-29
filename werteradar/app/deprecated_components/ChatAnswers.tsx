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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { InfoOutlineIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

const QuestionPopover = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Popover
        //
        isOpen={isOpen}
        onClose={onClose}
      >
        <PopoverTrigger>
          {/* <InfoOutlineIcon /> */}
          <IconButton
            // position={"absolute"}
            // top={"5"}
            // right={"1"}
            // visibility={"hidden"}
            // display={"none"}
            onClick={onOpen}
            aria-label="Search database"
            // borderRadius={"34px"}
            // background={"black"}
            boxSize={"40px"}
            icon={
              <QuestionOutlineIcon
                color={"#00DA2A"}
                fontSize={"50px"}
                background={"white"}
                borderRadius={"34px"}
              />
            }
            // boxSize={"34px"}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent border={"4px solid #00DA2A"}>
            <PopoverArrow />
            <PopoverHeader>
              <Text>Patient:innen-Daten</Text>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Text>{"Test"}</Text>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

const Message = ({ message, isUserMessage }) => {
  return (
    <Flex
      borderRadius="60px"
      // width={"67.21%"}
      minW={"500px"}
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

const ChatAnswers = ({
  messages,
  showMessages,
}: {
  messages: Array<string | undefined>;
  showMessages?: Array<boolean>;
  // messagePointer: number;
  // setMessagePointer: React.Dispatch<React.SetStateAction<number>>;
  // handleNewMessage: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState("");

  // const handleEnterKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     // Call your function here
  //     // For example, you can call a function to handle form submission
  //     setMessagePointer(messagePointer + 2);
  //   }
  // };

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = () => {
  //   if (messagePointer <= 5) {
  //     Cookies.set(`message_${messagePointer}`, messages[messagePointer], {
  //       sameSite: "Lax",
  //     });
  //     Cookies.set(`message_${messagePointer + 1}`, inputValue, {
  //       sameSite: "Lax",
  //     });
  //     handleNewMessage(messagePointer + 1, inputValue);
  //     setMessagePointer(messagePointer + 2);
  //     setInputValue("");
  //   }
  // };

  // const messageContainerRef = useRef(null);
  // useEffect(() => {
  //   if (messageContainerRef.current) {
  //     messageContainerRef.current.scrollTop =
  //       messageContainerRef.current.scrollHeight;
  //   }
  // }, [messages]);

  return (
    <Flex
      overflowY="auto"
      position={"relative"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      p={4}
    >
      {messages.map((message: string, index: number) => {
        return (
          <Box
            key={index}
            width={"100%"}
            display={showMessages[index] ? "visible" : "hidden"}
          >
            <Message message={message} isUserMessage={index % 2 != 0} />
          </Box>
          // <Box>

          // <Message
          //   key={index}
          //   message={message}
          //   isUserMessage={index % 2 != 0}
          // />
          // </Box>
        );
      })}
    </Flex>
  );
};

export default ChatAnswers;
