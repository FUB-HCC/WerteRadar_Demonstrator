"use client";
import React, { useRef, useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import { Button, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { headingTextPropsBlack, mainTextPropsBlack } from "../utils/constants";
import { scalePX } from "../utils/functions";
import ConsentElementGroup from "../components/ConsentElementGroup";
import HintPopover from "../components/HintPopover";
import Cookies from "js-cookie";

const headingText = "Nutzung Ihrer Patient:innen-Daten (1/3)";
const mainText = [
  "Wenn Sie zustimmen, erlauben Sie der Charité - Universitätsmedizin Berlin, Ihre  Behandlungsdaten für die nächsten fünf Jahre für Forschungszwecke zu verarbeiten und verwenden. Die in dem Zeitraum erhobenen Daten werden für 30 Jahre gespeichert. In dieser Zeit können Forscher:innen immer wieder neue Erkenntnisse aus Ihren Daten gewinnen. Nach fünf Jahren werden Sie erneut um Ihre Zustimmung gebeten.",
  "Sie entscheiden freiwillig, ob Sie Ihre Daten spenden möchten. Es hat keinen Einfluss auf Ihre Behandlung, ob Sie zustimmen oder nicht. Die Forscher:innen dürfen Ihre Daten nur verwenden, wenn Sie damit einverstanden sind.",
  "Sie können Ihre Zustimmung jederzeit widerrufen. Ihnen entstehen dadurch keine Nachteile. Wenn Sie Ihre Zustimmung widerrufen, werden Ihre Daten gelöscht und nicht mehr für zukünftige Forschungsprojekte verwendet.",
];

const Page = () => {
  const consentElementsIndices = [0];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [yesNoArray, setYesNoArray] = useState([
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

  const navRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      onOpen();
    }, 500); // 10 seconds in milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <MainLayout
        links={["page-10", "/page-12"]}
        progressStep={3}
        progressPercent={80}
        rightNavIsActive={[0, 1].includes(yesNoArray[0])}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={scalePX(30)}
          // background={"yellow"}
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
          <HintPopover
            isOpen={isOpen}
            onClose={onClose}
            placement={"top"}
            offset={[0, 20]}
            paddingRight={"30px"}
            bodyText={[
              "Bitte geben Sie für diese und die folgenden Auswahl-Optionen eine Entscheidung ab, um fortfahren zu können.",
              "Sie haben bis zur Unterzeichnung des Broad Consent jederzeit die Möglichkeit Ihre Entscheidungen zu ändern.",
            ]}
          >
            <ConsentElementGroup
              ref={navRef}
              consentHeader={""}
              consentElementsIndices={consentElementsIndices}
              yesNoArray={yesNoArray}
              setYesNoArray={setYesNoArray}
              fontSize={scalePX(25)}
              fontWeight={700}
            />
          </HintPopover>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
