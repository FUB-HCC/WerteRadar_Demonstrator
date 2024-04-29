"use client";

import { Text, Flex } from "@chakra-ui/react";

import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import {
  headingTextProps,
  mainTextProps,
  headingTextPropsBlack,
  mainTextPropsBlack,
  totalApplicationPages,
} from "../utils/constants";
import { scalePX } from "../utils/functions";
import InfoPopover from "../components/InfoPopover";

const headingText =
  "Wie können Ihre Daten die medizinische Forschung unterstützen ?";
const mainText = [
  <Text>
    Wenn Sie in der <Text as="b">Charité - Universitätsmedizin Berlin</Text>{" "}
    behandelt werden, werden Daten über Ihre Behandlungen und Untersuchungen
    gesammelt.{" "}
    <InfoPopover
      placement="bottom"
      headerText="Welche Daten werden von Ihnen gesammelt?"
      bodyText={[
        "Patient:innendaten sind alle Informationen zu Ihrer Person, die anlässlich Ihrer Untersuchung und Behandlung genutzt werden. Beispiele für Patientendaten sind: Daten aus Arztbriefen, Ihre Krankengeschichte oder Befunde und Daten aus medizinischen Untersuchungen wie Blutdruckmessungen oder Röntgenbildern; ebenso zählen die Ergebnisse von Laboruntersuchungen dazu, einschließlich Untersuchungen Ihrer Erbsubstanz (z.B. auf angeborene genetisch bedingte Erkrankungen oder erworbene genetische Veränderungen, unter anderem auch von Tumoren).",
      ]}
    />{" "}
    Diese Daten sind <Text as="b">wichtig für die medizinische Forschung</Text>,
    um Krankheiten besser erkennen, behandeln und verhindern zu können.
  </Text>,
  <Text>
    Wir möchten Sie darum bitten,{" "}
    <Text as="b">Ihre Daten für die medizinische Forschung zu spenden.</Text>
  </Text>,
  "Es liegt ganz bei Ihnen, ob Sie Ihre Daten geben möchten oder nicht.",
];

const Page = () => {
  return (
    <>
      <MainLayout
        links={["page-2", "/page-4"]}
        progressPercent={280 / totalApplicationPages}
        progressStep={0}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          // justifyContent={"center"}
          alignItems={"center"}
          padding={scalePX(32)}
          color={"#292929"}
          // position={"relative"}
        >
          <Text
            width={"100%"}
            marginTop={scalePX(30)}
            marginBottom={scalePX(40)}
            textAlign={"center"}
            {...headingTextPropsBlack}
          >
            {headingText}
          </Text>
          {mainText.map((t, index) => {
            return (
              <Text
                key={index}
                width={"100%"}
                {...mainTextPropsBlack}
                marginBottom={scalePX(30)}
                textAlign={"left"}
                // sx={{ ...mainTextProps }}
              >
                {t}
              </Text>
            );
          })}
        </Flex>
      </MainLayout>
    </>
  );
};

export default Page;
