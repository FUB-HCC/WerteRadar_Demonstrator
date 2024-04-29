import React from "react";
import NavFooter from "./NavFooter";
import MainContentContainer from "./MainContentContainer";
import { scalePX } from "../utils/functions";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { MdOutlineQuestionMark } from "react-icons/md";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  PopoverAnchor,
  Flex,
  Icon,
  ButtonGroup,
  Box,
  IconButton,
  Button,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

const instructions = [
  ["PLACEHOLDER", ["PLACE", "HOLDER"]],
  [
    "Navigationsleiste (1/4)",
    [
      "Im oberen Teil des Bildschirms finden Sie die Navigationsleiste.",
      "Die Navigationsleiste unterteilt die Anwendung in insgesamt fünf Bereiche. Jeder der Bereiche besteht aus mehreren Unterseiten. Sobald Sie alle Unterseiten eines Bereichs erfolgreich abgeschlossen haben, ändert das Zahlensymbol seine Farbe von grau zu blau und Sie haben die Möglichkeit, einen bereits abgeschlossenen Bereich noch einmal durch Anklicken des Zahlensymbols zu besuchen.",
    ],
  ],
  [
    "“Zurück” und “Weiter” (2/4)",
    [
      "Im unteren Teil des Bildschirms finden Sie auf entsprechenden Seiten die Bedienflächen “Zurück” und “Weiter”.",
      "Diese Bedienflächen ermöglichen es Ihnen, auf die vorherige oder die nächste Unterseite zu wechseln.",
    ],
  ],
  [
    "Informationsbox (3/4)",
    [
      "An manchen Stellen erscheinen Informationsboxen oder Sie finden das Informationssymbol.",
      "Durch Anklicken des Informationssymbols erhalten Sie detailliertere Informationen zur Erklärung von fachspezifischen Begriffen.",
      <Box width="100%" align={"center"}>
        <Image
          // htmlHeight={scalePX(100)}
          // width={}
          height={scalePX(150)}
          // width="100%"
          // boxSize="200px"
          objectFit="cover"
          src="instruction_3_4.png"
          alt="instruction"
        />
      </Box>,

      "Um eine Informationsbox zu schließen, klicken Sie auf das graue Schließsymbol.",
    ],
  ],
  [
    "Hilfesymbol (4/4)",
    [
      "Im oberen rechten Teil des Bildschirms finden Sie das Hilfesymbol.",
      "Durch Anklicken dieses Symbols können Sie diese Erklärung zu den Funktionen der Anwendung noch einmal abrufen.",
      ,
    ],
  ],
];

const InstructionPopOver = ({
  arrowBackground,
  children,
  isOpen,
  handleInstructionConfirm,
  instructionPart,
  isFirstPage = false,
  width = undefined,
  height = undefined,
  offset = [0, 0],
  withArrow = true,
}) => {
  // const isFirstPage = true;

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      //   onClose={onClose}
      // placement={placement ? placement : "top"}
      closeOnBlur={false}
      // arrowPadding={10}
      arrowSize={40}
      // zIndex={3}
      zIndex={1000}
      // placement={"top"}
      offset={offset}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        borderRadius={scalePX(45)}
        width={width ? width : scalePX(903)}
        height={height ? height : scalePX(503)}
        padding={scalePX(26)}
        // zIndex={4}
        // zIndex={200}
        border={"4px solid #078921"}
      >
        <PopoverHeader
          paddingBottom={scalePX(26)}
          //  marginBottom={scalePX(26)}
          borderBottom={"2px solid #078921"}
        >
          <Text
            width={"100%"}
            color={"#070707"}
            textAlign={"center"}
            fontWeight="700"
            fontSize={scalePX(35)}
            lineHeight={scalePX(40)}
          >
            {instructions[instructionPart][0]}
          </Text>
        </PopoverHeader>
        {withArrow ? (
          <PopoverArrow
            borderWidth="4px"
            // borderColor="blue.500"
            // background={"yellow"}
            borderStyle="solid"
            borderColor={arrowBackground}
            // _before={{
            //   content: '""',
            //   position: "absolute",
            //   borderStyle: "solid",
            //   borderWidth: "10px",
            //   borderColor: "white #078921 transparent white",
            // }}
            // _after={{
            //   content: '""',
            //   position: "absolute",
            //   borderStyle: "solid",
            //   // borderWidth: "10px",
            //   borderColor: "white white #078921 transparent",
            // }}

            // borderWidth="4px"
            // borderColor="#078921"
            // borderStyle="solid"
            // border={"4px solid #078921"}
            // zIndex={3}

            // zIndex={2}
          />
        ) : (
          <></>
        )}

        {/* <PopoverCloseButton /> */}
        <PopoverBody
          color={"#292929"}
          // marginTop={scalePX(20)}
          // marginBottom={scalePX(20)}
          fontWeight="700"
          fontSize={scalePX(22)}
          lineHeight={scalePX(32)}
        >
          {instructions[instructionPart][1].map((t, index) => {
            return (
              <Text key={index} marginBottom={scalePX(30)}>
                {t}
              </Text>
            );
          })}
        </PopoverBody>
        <PopoverFooter border="0">
          {isFirstPage && instructionPart == 4 ? (
            <Link as={NextLink} href={"/page-2"}>
              {" "}
              <Button
                width={"100%"}
                height={scalePX(69)}
                variant="outline"
                color={"white"}
                bg={"#078921"}
                _hover={{ bg: "#0E611E" }}
                onClick={handleInstructionConfirm}
                padding={scalePX(30)}
                borderRadius={"30px"}
                fontWeight="700"
                fontSize={scalePX(30)}
                lineHeight={scalePX(35)}
              >
                {isFirstPage && instructionPart == 4
                  ? "Verstanden und Anwendung starten"
                  : "Verstanden und Weiter"}
              </Button>
            </Link>
          ) : (
            <Button
              width={"100%"}
              height={scalePX(69)}
              variant="outline"
              color={"white"}
              bg={"#078921"}
              _hover={{ bg: "#0E611E" }}
              onClick={handleInstructionConfirm}
              padding={scalePX(30)}
              borderRadius={"30px"}
              fontWeight="700"
              fontSize={scalePX(30)}
              lineHeight={scalePX(35)}
            >
              Verstanden und Weiter
            </Button>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default InstructionPopOver;
