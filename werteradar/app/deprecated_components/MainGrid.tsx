import React from "react";
import {
  VStack,
  Box,
  Text,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { maxHeight, maxWidth } from "../utils/functions";
import NavFooter from "./NavFooter";

const MainGrid = ({
  mainContent,
  navHeader,
  navBar,
  navButtonLeft,
  navButtonRight,
  navFooter,
}: {
  mainContent: React.ReactNode;
  navHeader: React.ReactNode;
  navBar: React.ReactNode;
  navButtonLeft: React.ReactNode;
  navButtonRight: React.ReactNode;
  navFooter: React.ReactNode;
}) => {
  return (
    <>
      <Grid
        templateAreas={`". emptyHeader ."
                              ". navHeader ."
                              ". navBar ."
                              ". main ."
                              // "navLeft main navRight"
                              ". footer ."`}
        // gridTemplateRows={`4.1% 5.18% 5.47% 80.17% 5.08%`}
        gridTemplateRows={`4.1% 5.18% 5.47% 77.17% 8.08%`}
        gridTemplateColumns={"8.02% 83.96% 8.02%"}
        width={maxWidth}
        height={maxHeight}
        border={"12px solid black"}
        borderRadius={"50px"}
      >
        <GridItem area={"emptyHeader"}></GridItem>
        <GridItem area={"navHeader"}>{navHeader}</GridItem>
        <GridItem area={"navBar"}>{navBar}</GridItem>
        {/* <GridItem area={"navLeft"}>
          <Flex
            height={"100%"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {navButtonLeft}
          </Flex>
        </GridItem>
        <GridItem area={"navRight"}>
          <Flex
            height={"100%"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {navButtonRight}
          </Flex>
        </GridItem> */}
        <GridItem padding={"2px"} area={"main"}>
          {mainContent}
        </GridItem>
        <GridItem area={"footer"}>{navFooter}</GridItem>
      </Grid>
    </>
  );
};

export default MainGrid;
