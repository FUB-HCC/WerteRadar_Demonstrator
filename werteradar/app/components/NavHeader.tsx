import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  Progress,
  StepStatus,
  Center,
  Circle,
  StepTitle,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stepper,
  useSteps,
  Box,
  Text,
  Link,
  Flex,
  forwardRef,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { scalePX } from "../utils/functions";
import InstructionPopOver from "./InstructionPopOver";
import { totalApplicationPages } from "../utils/constants";
import NextLink from "next/link";

// const sections = [
//   "Einführung",
//   "Informationen",
//   "Reflektion",
//   "Einwilligung",
//   "Bestätigung",
// ];

const steps = [
  { title: "Einführung", description: "Contact Info", page: "/page-2" },
  { title: "Informationen", description: "Date & Time", page: "/page-4" },
  { title: "Reflektion", description: "Select Rooms", page: "/page-8" },
  { title: "Einwilligung", description: "Select Rooms", page: "/page-10" },
  { title: "Bestätigung", description: "Select Rooms", page: "/page-15" },
];

const NavHeaderStep = forwardRef(({ step, index, currentActiveStep }, ref) => {
  return (
    <Flex
      ref={ref}
      key={index}
      // flexDirection={"column"}
      // alignItems={"center"}
      // justifyContent={"space-between"}
      height={"100%"}
      zIndex={2}
      // bg={"green"}
      position={"relative"}
      // marginLeft={index == 1 ? "-50%" : ""}
      // position={"absolute"}
      // left={"-10"}
      // height: "160px",
    >
      <Link as={NextLink} href={step.page}>
        <Step>
          <StepIndicator bg="white">
            <StepStatus
              complete={<StepNumber />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
        </Step>
        <Center
          position={"absolute"}
          height={"48px"}
          // bg={"green"}
          left={"50%"}
          bottom={"50%"}
          transform={"translate(-50%, 150%)"}
          // bottom={0}
          color={"#4C3CEC"}
          fontWeight={"600"}
          fontStyle={"normal"}
          fontSize={index == currentActiveStep ? scalePX(30) : scalePX(15)}
        >
          {step.title}
        </Center>
      </Link>
    </Flex>
  );
});

const NavHeader = forwardRef(({ progressPercent, progressStep }, ref) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    setActiveStep(progressStep);
    // setActiveStep(-1);
    // setActiveStep(0);
  }, []);

  return (
    <Flex
      width={scalePX(1063)}
      height={scalePX(108)}
      position={"relative"}
      // bg={"yellow"}
      alignItems={"center"}
    >
      <Stepper
        index={activeStep}
        // marginRight={scalePX(-115)}
        // width={scalePX(1163)}
        // padding={"20px"}
        width={"100%"}
        // bg={"green"}
      >
        {steps.map((step, index) => (
          <NavHeaderStep
            ref={index == 0 ? ref : undefined}
            key={index}
            step={step}
            index={index}
            currentActiveStep={activeStep}
          />
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        // value={20.45}
        position="absolute"
        height="13px"
        borderRadius={"30px"}
        // width={scalePX(1100)}
        // width={scalePX(1063)}
        // padding={"0 20px 0 20px"}
        width={"full"}
        // padding={"0 3px 0 3px"}
        // top="23px"
        // zIndex={1}
      />
    </Flex>
    // </Box>
  );
});

export default NavHeader;
