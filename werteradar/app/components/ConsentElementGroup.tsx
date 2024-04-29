import { forwardRef, Box, Text, Button, Flex, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { scalePX } from "../utils/functions";

const scalingFactor = 1;

const YesNoButton = ({ answerIndex, handleYesNoSelection, selection }) => {
  return (
    <Flex
      //   width={`${143 * scalingFactor}px`}
      //   height={`${40 * scalingFactor}px`}
      // width={scalePX(241)}
      // height={scalePX(57)}
      border={"5px solid #4C3CEC"}
      borderRadius={scalePX(15)}
      background={"white"}
      // padding={"5px"}
      // paddingTop={scalePX(15)}
      // paddingBottom={scalePX(15)}
      justifyContent={"space-around"}
      alignItems={"center"}
      // display={"none"}
    >
      <Button
        onClick={() => {
          handleYesNoSelection(1, answerIndex);
          console.log(selection);
        }}
        width={scalePX(105)}
        height={scalePX(41)}
        bg={selection === 1 ? "#4C3CEC" : "white"}
        color={selection === 1 ? "white" : "#C8C8C8"}
        _hover={{ bg: "#4C3CEC", color: "white" }}
        borderRadius={"5px"}
        fontWeight={"700"}
        fontSize={scalePX(25)}
        margin={scalePX(5)}
        // marginTop={scalePX(5)}
        // marginRight={scalePX(10)}
        // marginLeft={scalePX(20)}
      >
        Ja
      </Button>

      <Box
        visibility={Number.isNaN(selection) ? "visible" : "hidden"}
        // visibility={"visible"}
        // visibility={"hidden"}
      >
        <Divider
          orientation="vertical"
          borderColor={"C8C8C8"}
          borderWidth={"1px"}
          height={scalePX(35)}
        />
      </Box>

      <Button
        width={scalePX(105)}
        borderRadius={scalePX(5)}
        height={scalePX(41)}
        onClick={() => handleYesNoSelection(0, answerIndex)}
        // disabled={isNoSelected}
        bg={selection === 0 ? "#4C3CEC" : "white"}
        color={selection === 0 ? "white" : "#C8C8C8"}
        _hover={{ bg: "#4C3CEC", color: "white" }}
        fontWeight={"700"}
        fontSize={scalePX(25)}
        margin={scalePX(5)}
      >
        Nein
      </Button>
    </Flex>
  );
};

const ConsentElement = forwardRef(
  (
    {
      consentDescription,
      consentIndex,
      yesNoArray,
      setYesNoArray,
      fontSize,
      fontWeight,
    },
    ref
  ) => {
    // const [yesNoArray, setYesNoArray] = useState([null, null, null]);
    //   const [allYesNoSelected, setAllYesNoSelected] = useState(false);
    //   const [selectionConfirmed, setSelectionConfirmed] = useState(false);
    //   const [vcs, setVcs] = useState(null);
    //   const [congruencyText, setCongruencyText] = useState(null);
    //   const [congruencyColor, setCongruencyColor] = useState(null);

    // const [isYesSelected, setIsYesSelected] = useState(false);
    // const [isNoSelected, setIsNoSelected] = useState(false);

    const handleYesNoSelection = (value, answerIndex) => {
      let newArray = [...yesNoArray];
      newArray[answerIndex] = value;
      Cookies.set(`consent_${answerIndex}`, value, {
        sameSite: "Lax",
      });
      setYesNoArray(newArray);
    };

    return (
      <>
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={scalePX(11)}
          // background={"yellow"}
        >
          <Flex
            color={"#4C3CEC"}
            fontSize={fontSize ? fontSize : scalePX(22)}
            fontWeight={fontWeight ? fontWeight : 600}
            fontStyle="normal"
            lineHeight={scalePX(32)}
            // textAlign={"center"}
            // align={"center"}
            // background={"green"}
            // justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>{consentDescription}</Text>
          </Flex>
          <Box ref={ref}>
            <YesNoButton
              answerIndex={consentIndex}
              handleYesNoSelection={handleYesNoSelection}
              selection={yesNoArray[consentIndex]}
            />
          </Box>
        </Flex>
      </>
    );
  }
);

const ConsentElementGroup = forwardRef(
  (
    {
      consentHeader,
      consentElementsIndices,
      yesNoArray,
      setYesNoArray,
      fontWeight,
      fontSize,
      withBorder = true,
    },
    ref
  ) => {
    const consentElementsDescriptions = [
      "Erhebung, Verarbeitung, Speicherung und wissenschaftliche Nutzung meiner Patientendaten",
      "Einmalig rückwirkend für die Daten der vergangenen 5 Kalenderjahre",
      "Ab Datum meiner Unterschrift über einen Zeitraum von 5 Jahren",
      "Rückfragen zu Forschungsvorhaben und Daten-Verknüpfungen",
      "Information über medizinische Zusatzbefunde",
    ];

    return (
      <Flex
        border={withBorder ? "3px solid #ABABAB" : ""}
        borderTop={withBorder ? "" : "2px solid #C8C8C8"}
        width={"100%"}
        // border={withBorder ? "4px solid #4C3CEC" : "none"}
        // padding={"4px"}
        padding={scalePX(16)}
        borderRadius={withBorder ? "15px" : ""}
        background={withBorder ? "#FFF" : ""}
        flexDirection={"column"}
      >
        {consentHeader && (
          <Flex
            // height={"50px"}
            fontSize={scalePX(25)}
            lineHeight={scalePX(32)}
            color={"#4C3CEC"}
            // fontSize="17px"
            fontStyle="normal"
            // lineHeight="40px"
            // textAlign={"center"}
            align={"center"}
            // paddingBottom={scalePX(20)}
            // background={"green"}
            // justifyContent={"center"}
            // alignItems={"center"}
          >
            <Text fontWeight="700">{consentHeader}</Text>
          </Flex>
        )}

        {consentElementsDescriptions.map((description, index) => {
          return (
            <Box key={index}>
              {consentElementsIndices.includes(index) && (
                <ConsentElement
                  ref={ref}
                  consentDescription={description}
                  consentIndex={index}
                  yesNoArray={yesNoArray}
                  setYesNoArray={setYesNoArray}
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                />
              )}
            </Box>
          );
        })}
      </Flex>
    );
  }
);

export default ConsentElementGroup;
