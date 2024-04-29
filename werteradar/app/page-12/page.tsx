"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import { headingTextPropsBlack, mainTextPropsBlack } from "../utils/constants";
import { scalePX } from "../utils/functions";
import ConsentElementGroup from "../components/ConsentElementGroup";
import InfoPopover from "../components/InfoPopover";

const headingText = "Nutzung Ihrer Krankenkassendaten (2/3)";
const mainText = [
  <Text>
    Sie haben die Möglichkeit, den Forscher:innen zusätzlich zu erlauben, Daten
    von Ihrer Krankenkasse anzufordern und für wissenschaftliche Zwecke
    verwenden zu dürfen. Diese Daten könnten Informationen über Ihre Besuche bei
    Hausärzt:innen, Fachärzt:innen, Krankenhausaufenthalten und verschriebenen
    Medikamenten umfassen.{" "}
    <InfoPopover
      headerText="Was sind Krankenkassendaten?"
      bodyText={[
        "Bei Ihrer Behandlung der Charité - Universitätsmedizin Berlin werden nur Daten erhoben, die im unmittel-baren Behandlungszusammenhang benötigt werden. Für viele wissenschaftliche Fragestellungen reichen diese „Momentaufnahmen“ aber meist nicht aus. Um ein umfassenderes Bild von Ihrem Gesundheitszustand zu erhalten, würden wir z.B. gerne auch Ihre Patientendaten aus der ambulanten Versorgung nutzen. Über diese Informationen verfügt Ihre Krankenkasse.",
      ]}
    />
  </Text>,
  "Bitte beachten Sie, dass wir keine Forschungsergebnisse, die auf Sie persönlich zurückzuführen sind, an die Krankenkassen weitergeben. Ihr persönlicher Datenschutz wird gewährleistet.",
  "Es entstehen Ihnen also keine Nachteile, wenn wir Ihre Krankenkassendaten für Forschungszwecke nutzen.",
];

const Page = () => {
  useEffect(() => {
    let arr = [...yesNoArray];
    for (let i = 0; i < yesNoArray.length; i++) {
      arr[i] = parseInt(Cookies.get(`consent_${i}`));
      console.log(`consent_${i} = ${Cookies.get(`consent_${i}`)}`);
    }
    console.log(arr);

    setYesNoArray(arr);
  }, []);

  const consentElementsIndices = [1, 2];

  const [yesNoArray, setYesNoArray] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  return (
    <>
      <MainLayout
        links={["page-11", "/page-13"]}
        progressPercent={85}
        progressStep={3}
        rightNavIsActive={
          [0, 1].includes(yesNoArray[1]) && [0, 1].includes(yesNoArray[2])
        }
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          // justifyContent={"center"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={scalePX(30)}
        >
          <Box
            // width={scalePX(1086)}
            width={"100%"}
            // bg={"yellow"}
          >
            <Text
              // marginTop={scalePX(86)}
              marginBottom={scalePX(60)}
              {...headingTextPropsBlack}
              textAlign={"center"}
            >
              {headingText}
            </Text>
            {mainText.map((t, index) => {
              return (
                <Text
                  // bg={"green"}
                  key={index}
                  {...mainTextPropsBlack}
                  marginBottom={scalePX(30)}
                  // sx={{ ...mainTextProps }}
                >
                  {t}
                </Text>
              );
            })}
          </Box>
          <ConsentElementGroup
            consentHeader={
              "Übertragung und wissenschaftliche Nutzung meiner Krankenkassendaten"
            }
            consentElementsIndices={consentElementsIndices}
            yesNoArray={yesNoArray}
            setYesNoArray={setYesNoArray}
          />
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
