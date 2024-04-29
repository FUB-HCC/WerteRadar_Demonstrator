"use client";

import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import NavHeader from "../components/NavHeader";
import NavBar from "../components/NavBar";
import MainGrid from "../components/MainGrid";
import NavFooter from "../components/NavFooter";
import ConsentElementGroup from "../components/ConsentElementGroup";
import MainLayout from "../components/MainLayout";
import Cookies from "js-cookie";
import { scalePX } from "../utils/functions";

const Page = () => {
  const [yesNoArray, setYesNoArray] = useState<Array<number | undefined>>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  useEffect(() => {
    let arr = [...yesNoArray];
    for (let i = 0; i < yesNoArray.length; i++) {
      arr[i] = parseInt(Cookies.get(`consent_${i}`));
      console.log(`consent_${i} = ${Cookies.get(`consent_${i}`)}`);
    }
    console.log(arr);

    setYesNoArray(arr);
  }, []);

  const headingText =
    "Überprüfen Sie Ihre Auswahl und überlegen Sie, ob die Entscheidungen mit Ihren persönlichen Bedürfnissen und Werten übereinstimmen";

  return (
    <>
      <MainLayout
        links={["page-13", "/page-16"]}
        rightNavButtonText={"Auswahl bestätigen"}
        progressStep={4}
        progressPercent={100}
      >
        <Box
          width={"100%"}
          height={"100%"}
          background="#EDEDED"
          // background={"green"}
          borderRadius="25px"
          // borderColor="#4C3CEC"
          // borderWidth={"4px"}
          padding={"20px"}
          onClick={() => console.log(yesNoArray)}
        >
          <Box
            // background={"green"}
            fontStyle={"normal"}
            fontSize={scalePX(35)}
            lineHeight={scalePX(40)}
            color={"#292929"}
            fontWeight={"700"}
            textAlign={"center"}
            marginBottom={scalePX(21)}
          >
            {headingText}
          </Box>
          <Divider borderWidth={"2px"} color={"#4C3CEC"} variant={"solid"} />

          <ConsentElementGroup
            consentHeader={""}
            consentElementsIndices={[0]}
            yesNoArray={yesNoArray}
            setYesNoArray={setYesNoArray}
            withBorder={false}
            fontSize={scalePX(25)}
            fontWeight={700}
          />
          <Divider borderWidth={"2px"} color={"#4C3CEC"} variant={"solid"} />
          <ConsentElementGroup
            consentHeader={
              "Übertragung und wissenschaftliche Nutzung meiner Krankenkassendaten"
            }
            consentElementsIndices={[1, 2]}
            yesNoArray={yesNoArray}
            setYesNoArray={setYesNoArray}
            withBorder={false}
          />
          <Divider borderWidth={"2px"} color={"#4C3CEC"} variant={"solid"} />
          <ConsentElementGroup
            consentHeader={"Möglichkeit einer erneuten Kontaktaufnahme"}
            consentElementsIndices={[3, 4]}
            yesNoArray={yesNoArray}
            setYesNoArray={setYesNoArray}
            withBorder={false}
          />
        </Box>
      </MainLayout>
    </>
  );
};

export default Page;
