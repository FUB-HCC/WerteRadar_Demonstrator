"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import { headingTextPropsBlack, mainTextPropsBlack } from "../utils/constants";
import { scalePX } from "../utils/functions";
import ConsentElementGroup from "../components/ConsentElementGroup";

const headingText = "Nutzung Ihrer Daten zur Kontaktaufnahme (3/3)";
const mainText = [
  "Sie haben die Möglichkeit zu entscheiden, ob Sie kontaktiert werden möchten, wenn die Forscher:innen weitere Informationen benötigen oder wenn in Ihren Daten Hinweise auf zusätzliche Krankheiten entdeckt werden. Bitte beachten Sie bei Ihrer Entscheidung, dass die Gesundheitsinformationen, die Sie bei einer solchen Kontaktaufnahme erhalten würden, möglicherweise von anderen Stellen (z. B. bei Abschluss einer Kranken- oder Lebensversicherung) preisgeben müssten und Ihnen dadurch Nachteile entstehen könnten.",
  "Es kann in Einzelfällen vorkommen, dass ein Ergebnis aus der Auswertung Ihrer Daten für Ihre Gesundheit von so großer Bedeutung ist, dass Ärzt:innen oder Forscher:innen eine dringende Kontaktaufnahme für notwendig erachten (z. B. bei einem dringenden Verdacht auf eine schwerwiegende Krankheit). In einem solchen schwerwiegenden Fall werden Sie auch ohne Ihre explizite Zustimmung kontaktiert.",
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

  const consentElementsIndices = [3, 4];

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
        links={["page-12", "/page-14"]}
        progressStep={3}
        progressPercent={90}
        rightNavIsActive={
          [0, 1].includes(yesNoArray[3]) && [0, 1].includes(yesNoArray[4])
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
            consentHeader={"Möglichkeit einer erneuten Kontaktaufnahme"}
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
