"use client";
import {
  Box,
  Divider,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { scalePX } from "../utils/functions";
import InfoPopover from "./InfoPopover";

const accordionButtonItems = [
  {
    title: "Was bedeutet eine “medizinische Datenspende”?",
    content: [
      "Wenn Sie Ihre Daten für die Forschung zur Verfügung stellen, sollen diese für verschiedene medizinische Forschungszwecke verwendet werden, damit sie einen breiten Nutzen für die Allgemeinheit haben.",
      "Bevor Ihre Daten für die Forschung verwendet werden dürfen, muss diese Forschung von einem Fachgremium und einer unabhängigen Ethikkommission genehmigt werden. Ihre Daten dürfen nur für die beantragten wissenschaftlichen Zwecke genutzt werden und dürfen nicht weitergegeben oder verkauft werden.",
      <Text>
        Sie können auf der Website{" "}
        <Text as="b">www.medizininformatik-initiative.de/datennutzung</Text>{" "}
        alle Forschungsprojekte einsehen, die mit Ihren Daten durchgeführt
        werden. Sie können sich auch per E-Mail über neue Projekte informieren
        lassen.
      </Text>,
    ],
  },
  // {
  //   title: "Für welche Forschung könnten Ihre Daten verwendet werden?",
  //   content: [
  //     "Alle Informationen in den Daten, aus denen direkt erkennbar ist, wer Sie sind oder wo Sie wohnen, werden durch eine Zeichenkombination ersetzt.",
  //     "Dies nennt sich Codierung.",
  //     "Dadurch ist kein einfacher Rückschluss aus Ihren Daten auf Sie als Person möglich.  ",
  //     "Nur die codierten Daten werden gespeichert und an Universitäten, Forschungsinstitute und forschende Unternehmen (Datenempfänger) weitergegeben. Für diese gilt das europäische (oder ein als vergleichbar anerkanntes) Datenschutzrecht, welches Bürger:innen schützt.",
  //     "Wenn Datenempfänger ihre medizinischen Forschungsergebnisse in wissenschaftlichen Artikeln oder anderen Formaten veröffentlichen, müssen sie alle Ergebnisse anonymisieren. Das heißt, dass die Ergebnisse nur in einer Form veröffentlicht werden dürfen, die keine Rückschlüsse auf Ihre Person zulässt.",
  //   ],
  // },
  {
    title: "Wie werden meine Daten verwendet und geschützt?",
    content: [
      <Text>
        Alle Informationen in Ihren Daten, die Rückschlüsse auf Ihre Identität
        oder Ihren Wohnort zulassen, werden durch eine Zeichenkombination
        ersetzt, die als Codierung bezeichnet wird.
        <InfoPopover
          placement="top"
          headerText="Was ist Codierung?"
          bodyText={[
            "Bei der Erfassung von Patientendaten werden auch Informationen wie Ihr Name und Ihr Geburtsdatum erfasst.",
            "Mit solchen Informationen kann leicht auf Sie persönlich geschlossen werden. Diese Informationen werden durch eine Kombination von Zeichen ersetzt. Auf diese Weise wird eine einfache Rückverfolgung zu Ihrer Person ausgeschlossen. Eine Rückverfolgung zu Ihrer Person erfolgt nur, wenn Ihre Patientendaten durch zusätzliche Informationen über Sie ergänzt werden sollen oder um erneut mit Ihnen in Kontakt zu treten.",
            <Text as="b">
              Daten, die Ihre Person identifizieren, werden außer in von Ihnen
              erlaubten oder gesetzlich geregelten Fällen niemals an Forscher
              oder sonstige Dritte weitergegeben, insbesondere nicht an
              Versicherungsunternehmen oder Arbeitgeber.{" "}
            </Text>,
          ]}
        />
      </Text>,
      "Dadurch ist es nicht möglich, Sie als Person anhand Ihrer Daten zu identifizieren. Nur die codierten Daten werden gespeichert und an Universitäten, Forschungsinstitute und forschende Unternehmen (Datenempfänger) weitergegeben. Diese Datenempfänger müssen sich an das europäische Datenschutzrecht halten, das die Privatsphäre der Bürgerinnen und Bürger schützt. ",
      "Wenn die Datenempfänger ihre Forschungsergebnisse in wissenschaftlichen Artikeln oder anderen Formaten veröffentlichen, müssen sie alle Ergebnisse anonymisieren. Das bedeutet, dass die Ergebnisse so veröffentlicht werden müssen, dass keine Rückschlüsse auf Ihre Person möglich sind.",
    ],
  },
  {
    title: "Welche Risiken sind mit der Nutzung meiner Daten verbunden?",
    content: [
      "Bei der Erhebung, Übermittlung oder Speicherung von Patientendaten in Forschungsprojekten besteht ein Restrisiko, dass Sie als Person anhand der Daten identifiziert werden könnten. Dieses Risiko besteht vor allem dann, wenn Sie Ihre eigenen Gendaten oder andere Gesundheitsdaten (z. B. zur Ahnenforschung im Internet) veröffentlichen.",
      "Wenn trotz umfangreicher Schutzmaßnahmen Ihre Daten in unbefugte Hände gelangen, könnte eine Verbindung zu Ihrer Person hergestellt werden, obwohl Ihr Name nicht mehr in den Daten enthalten ist. In einem solchen Fall könnten Ihre Daten diskriminierend oder anderweitig schädlich genutzt werden, wodurch Sie oder auch nahe Verwandte betroffen sein könnten.",
    ],
  },
];

const BroadConsentAccordion = () => {
  return (
    <>
      <Box maxH={"100%"} width={"100%"} overflow={"auto"}>
        <Accordion allowToggle>
          {accordionButtonItems.map((item, index) => (
            <AccordionItem key={index}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    width={"100%"}
                    borderTop={"2px solid #C8C8C8"}
                    justifyContent={"space-between"}
                    height={scalePX(104)}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"#292929"}
                      fontSize={scalePX(25)}
                      fontStyle={"normal"}
                      fontWeight={700}
                      lineHeight={scalePX(35)}
                    >
                      {item.title}
                    </Box>
                    <Button
                      width={scalePX(234)}
                      height={scalePX(56)}
                      background={"#4C3CEC"}
                      color={"white"}
                      fontStyle={"bold"}
                      fontSize={scalePX(20)}
                      _hover={{ background: "#130786" }}
                    >
                      <Flex
                        justifyContent={"space-between"}
                        width={"100%"}
                        alignItems={"center"}
                      >
                        {isExpanded ? "Weniger" : "Mehr"}
                        <AccordionIcon
                          boxSize={scalePX(37)}
                          fontSize={scalePX(7)}
                        />
                      </Flex>
                    </Button>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {item.content.map((c, index) => (
                      <Text key={index} marginTop={"10px"} color={"black"}>
                        {c}
                      </Text>
                    ))}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default BroadConsentAccordion;
