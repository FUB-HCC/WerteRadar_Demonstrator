import React from "react";
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Text,
  Icon,
  PopoverCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { MdInfo } from "react-icons/md";
import { InfoIcon } from "@chakra-ui/icons";
import { scalePX } from "../utils/functions";

const InfoPopover = ({
  headerText,
  bodyText,
  placement = "bottom",
}: {
  headerText: string;
  bodyText: Array<string>;
  placement?: string;
}) => {
  return (
    <Popover
      returnFocusOnClose={false}
      minW={scalePX(900)}
      placement={placement}
      closeOnBlur={false}
      arrowSize={40}
    >
      <PopoverTrigger>
        <IconButton
          aria-label="instructions"
          isRound={true}
          bg={"rgba(255,0,0,0)"}
          color={"#078921"}
          _hover={{ color: "#0E611E" }}
          border={0}
          icon={<Icon boxSize={scalePX(60)} as={MdInfo} />}
        />
      </PopoverTrigger>
      <PopoverContent
        borderRadius={scalePX(45)}
        width={scalePX(903)}
        padding={scalePX(12)}
        border={"4px solid #078921"}
      >
        {headerText !== "" && (
          <PopoverHeader
            paddingBottom={scalePX(26)}
            borderBottom={"2px solid #078921"}
          >
            <Text
              width={"100%"}
              color={"#078921"}
              textAlign={"center"}
              fontWeight="700"
              fontSize={scalePX(30)}
              lineHeight={scalePX(60)}
            >
              {headerText}
            </Text>
          </PopoverHeader>
        )}

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
        <PopoverBody
          marginTop={"20px"}
          color={"#292929"}
          fontWeight="600"
          fontSize={scalePX(22)}
          lineHeight={scalePX(32)}
          overflow={"auto"}
          height={scalePX(272)}
        >
          <Box
            bg={`linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))`}
            overflowY="scroll"
            // background={
            //   "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));"
            // }
            // bg={"yellow"}
            // zIndex={100}
          >
            {bodyText.map((t, index) => {
              console.log(typeof t);
              return (
                <Text key={index} marginBottom={scalePX(30)}>
                  {t}
                </Text>
              );
            })}
          </Box>
        </PopoverBody>
        {/* <PopoverFooter border="0">
          <Button
            width={"100%"}
            height={scalePX(69)}
            variant="outline"
            color={"white"}
            bg={"#078921"}
            _hover={{ bg: "#0E611E" }}
            // onClick={handleInstructionConfirm}
            padding={scalePX(30)}
            borderRadius={"30px"}
            fontWeight="700"
            fontSize={scalePX(30)}
            lineHeight={scalePX(35)}
          >
            Verstanden und Weiter
          </Button>
        </PopoverFooter> */}
      </PopoverContent>
    </Popover>
  );
};

export default InfoPopover;
