"use client";

import React, { useState, useRef, useEffect } from "react";
import NavFooter from "./NavFooter";
import MainContentContainer from "./MainContentContainer";
import { scalePX } from "../utils/functions";
import { MdOutlineQuestionMark } from "react-icons/md";
import { Flex, Icon, Box, IconButton, forwardRef } from "@chakra-ui/react";
import NavHeader from "./NavHeader";
import InstructionPopOver from "./InstructionPopOver";

const InstructionIconButton = forwardRef(
  ({ instructionPart, setInstructionPart, isVisible }, ref) => {
    return (
      <IconButton
        ref={ref}
        zIndex={10}
        aria-label="instructions"
        isRound={true}
        bg={"#078921"}
        color={"white"}
        // bg={"yellow"}
        _active={"#078921"}
        filter={"drop-shadow(0px 0px 10px white)"}
        _hover={{ bg: "#0E611E" }}
        boxSize={scalePX(60)}
        icon={
          <Icon
            // bg={"rgba(255, 0, 0, 0)"}

            boxSize={scalePX(60)}
            as={MdOutlineQuestionMark}
            padding={scalePX(12)}
            // fontSize={scalePX(40)}
            // borderRadius={scalePX(30)}
          />
        }
        position={"absolute"}
        right={scalePX(30)}
        top={scalePX(22)}
        // w={scalePX(60)}
        // h={scalePX(60)}
        // borderRadius={scalePX(30)}
        onClick={() => setInstructionPart(1)}
        visibility={isVisible ? "visible" : "hidden"}
        isActive={true}
        // isDisabled={instructionPart !== 0}
      />
    );
  }
);

const opacity = 0.5;
const DarkOverlay = ({
  top,
  left,
  right,
  width,
  height,
  background,
  visible,
}: {
  top?: any;
  left?: any;
  right?: any;
  width?: any;
  height?: any;
  background?: any;
  visible?: any;
}) => {
  return (
    <Box
      zIndex={10}
      display={visible ? "block" : "none"}
      position="fixed"
      top={top}
      left={left}
      right={right ? right : ""}
      width={width}
      height={height}
      // bg="rgba(0, 0, 0, 0.6)"
      background={background}
      // background="linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)"
      // background= gradient
      // ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)'
      // : 'rgba(0, 0, 0, 0.6)',
    />
  );
};

const MainLayout = ({
  children,
  links,
  progressPercent,
  progressStep,
  showNavHeader = true,
  showNavButtons = true,
  leftNavIsActive = true,
  rightNavIsActive = true,
  rightNavButtonText = "Weiter",
  isStarted = true,
  isFirstPage = false,
  setInstructionViewed,
  enableMainContainerBackground = true,
}: // rightNavHintPopOver,
{
  isFirstPage: boolean;
  children: React.ReactNode;
  enableMainContainerBackground?: boolean;
  // rightNavHintPopOver: React.ReactNode;
  links: Array<string>;
  progressPercent: number;
  progressStep: number;
  showNavHeader?: boolean;
  showNavButtons?: boolean;
  leftNavIsActive?: boolean;
  rightNavIsActive?: boolean;
  rightNavButtonText?: string;
  navButtonBackground?: string;
  navButtonColor?: string;
  isStarted?: boolean;
  setInstructionViewed?: any;
}) => {
  const [instructionPart, setInstructionPart] = useState(0);
  const footerRef = useRef(null);
  const headerRef = useRef(null);
  const instructionIconRef = useRef(null);

  const handleInstructionConfirm = () => {
    if (instructionPart < 4) {
      setInstructionPart(instructionPart + 1);
    } else {
      setInstructionPart(0);
      if (setInstructionViewed) {
        setInstructionViewed(true);
      }
    }
  };

  useEffect(() => {
    if (setInstructionViewed && isStarted) {
      setInstructionPart(1);
    }
  }, [isStarted]);

  return (
    <>
      <Flex
        zIndex={1}
        // bg={"yellow"}
        height={"100vh"}
        width={"100vw"}
        justifyContent={"center"}
        // marginTop={scalePX(27)}
      >
        <DarkOverlay
          visible={instructionPart == 1}
          top={0}
          left={0}
          width={"100%"}
          // height={`${scalePX(167)}`}
          height={`${scalePX(200)}`}
          background={""}
          // background={
          //   "linear-gradient(to top, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0) 90%)"
          // }
        />
        <DarkOverlay
          visible={instructionPart == 1}
          top={0}
          left={0}
          width={"100%"}
          // height={scalePX(1024 - 167)}
          height={"100%"}
          // background={"rgba(0, 0, 0, 0.4)"}
          background={`linear-gradient(to top, rgba(0, 0, 0, ${opacity}) 0%, rgba(0, 0, 0, ${opacity}) 90%, rgba(0, 0, 0, 0) 100%)`}
        />
        <DarkOverlay
          visible={instructionPart == 2}
          // top={0}
          left={0}
          top={0}
          // top={`${scalePX(200)}`}
          // top={0}
          // left={0}
          width={"100%"}
          // height={`${scalePX(167)}`}
          height={`${scalePX(1024 - 200)}`}
          background={`linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}) 0%, rgba(0, 0, 0, ${opacity}) 90%, rgba(0, 0, 0, 0) 100%)`}

          // background={
          //   "linear-gradient(to top, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0) 90%)"
          // }
        />
        <DarkOverlay
          visible={instructionPart == 2}
          width={"100%"}
          height={"100%"}
          // bottom={`${scalePX(200)}`}
          left={0}
          top={`${scalePX(1024 - 200)}`}
          background={""}
          // height={scalePX(1024 - 167)}
          // background={"rgba(0, 0, 0, 0.4)"}
        />
        <DarkOverlay
          visible={instructionPart == 3}
          width={"100%"}
          height={"100%"}
          // bottom={`${scalePX(200)}`}
          left={0}
          top={0}
          // background={""}
          // height={scalePX(1024 - 167)}
          background={`rgba(0, 0, 0, ${opacity})`}
        />
        <DarkOverlay
          visible={instructionPart == 4}
          // bottom={`${scalePX(200)}`}
          top={0}
          left={0}
          // right={scalePX(30)}
          // top={0}
          width={"100%"}
          height={"100%"}
          // background={""}
          // height={scalePX(1024 - 167)}
          //  0%, rgba(0, 0, 0, 0.4) 90%, rgba(0, 0, 0, 0) 100%
          background={`rgba(0, 0, 0, ${opacity})`}
        />
        <Flex
          // zIndex={-1}
          // bg={"orange"}
          width={scalePX(1440)}
          height={scalePX(1024)}
          justifyContent={"center"}
          position={"relative"}
        >
          <InstructionPopOver
            arrowBackground={"#078921 white white #078921"}
            instructionPart={4}
            height={scalePX(400)}
            isFirstPage={isFirstPage}
            isOpen={instructionPart == 4}
            handleInstructionConfirm={handleInstructionConfirm}
            offset={[40, 40]}
          >
            <InstructionIconButton
              ref={instructionIconRef}
              instructionPart={instructionPart}
              setInstructionPart={setInstructionPart}
              isVisible={[0, 4].includes(instructionPart) && isStarted}
            />
          </InstructionPopOver>

          <Flex
            flexDirection={"column"}
            width={scalePX(1375)}
            alignItems={"center"}
            position={"relative"}
            // background={"yellow"}
          >
            <Flex
              justifyContent={"center"}
              width={"100%"}
              height={scalePX(167)}
              // marginBottom={scalePX(31)}
              visibility={showNavHeader ? "visible" : "hidden"}
            >
              <InstructionPopOver
                arrowBackground={"#078921 white white #078921"}
                instructionPart={instructionPart}
                isOpen={instructionPart == 1}
                handleInstructionConfirm={handleInstructionConfirm}
                offset={[0, 70]}
              >
                <NavHeader
                  ref={headerRef}
                  progressPercent={progressPercent}
                  progressStep={progressStep}
                />
              </InstructionPopOver>
            </Flex>

            <MainContentContainer
              enableBackground={enableMainContainerBackground}
            >
              {instructionPart == 3 && (
                <Box height={"100%"} width={"100%"} padding={"20px"}>
                  <InstructionPopOver
                    instructionPart={3}
                    isOpen={instructionPart == 3}
                    handleInstructionConfirm={handleInstructionConfirm}
                    withArrow={false}
                    width={scalePX(1303)}
                    height={scalePX(653)}
                  >
                    {/* <></> */}
                    <Box
                      // position={"fixed"}
                      top={0}
                      left={0}
                    ></Box>
                    {/* <Flex width={"100%"} height={"100%"}></Flex> */}
                    {/* <Box width={scalePX(1175)} borderRadius={"45px"}></Box> */}
                    {/* <Box width={scalePX(1175)} borderRadius={"45px"}></Box> */}
                  </InstructionPopOver>
                </Box>
              )}
              {instructionPart !== 3 && children}
            </MainContentContainer>
            <InstructionPopOver
              height={scalePX(450)}
              arrowBackground={"white #078921 #078921 white"}
              instructionPart={2}
              offset={[0, 26]}
              isOpen={instructionPart == 2}
              // isFirstPage={isFirstPage}
              handleInstructionConfirm={handleInstructionConfirm}
            >
              <NavFooter
                instructionIsOpen={instructionPart == 2}
                links={links}
                showNavButtons={showNavButtons}
                leftIsActive={leftNavIsActive}
                rightIsActive={rightNavIsActive}
                rightNavButtonText={rightNavButtonText}
                // rightNavHintPopOver={rightNavHintPopOver}
                ref={footerRef}
              ></NavFooter>
            </InstructionPopOver>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default MainLayout;
