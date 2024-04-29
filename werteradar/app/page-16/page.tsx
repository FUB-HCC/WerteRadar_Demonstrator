"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import Cookies from "js-cookie";
import { scalePX } from "../utils/functions";

const Page = () => {
  const [pdfPath, setPdfPath] = useState(undefined);
  const [pdfApiCalled, setPdfApiCalled] = useState(false);

  useEffect(() => {
    async function modifyPdf() {
      let userConsents = [];
      let i = 0;
      while (true) {
        let m = Cookies.get(`consent_${i}`);
        console.log(i, m);
        if (m === undefined) {
          break;
        } else {
          userConsents.push(m);
        }
        i++;
      }

      try {
        const response = await fetch("writepdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ consents: userConsents }),
        });
        const json_data = await response.json();
        const newPdfPath = json_data["pdfPath"].replace("public/", "");
        setPdfPath(newPdfPath);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (!pdfApiCalled) {
      modifyPdf();
      setPdfApiCalled(true);
    }
  }, []);

  return (
    <>
      {pdfPath !== undefined && (
        <>
          <MainLayout
            links={["/page-15", "/page-17"]}
            rightNavButtonText={"Unterschrift bestätigen"}
            navButtonBackground={"#4C3CEC"}
            navButtonColor="white"
            progressStep={4}
            progressPercent={100}
            enableMainContainerBackground={false}
          >
            <Flex
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              background={"white"}
            >
              <Flex
                width={"100%"}
                height={scalePX(169)}
                justifyContent={"center"}
                alignItems={"center"}
                // textAlign="center"
                // align={"center"}
                border={"2px solid #C2C2C2"}
                borderRadius={scalePX(30)}
                background={"#EDEDED"}
              >
                <Text
                  padding={"20px"}
                  fontSize={scalePX(25)}
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight={scalePX(32)}
                  color="#4C3CEC"
                >
                  Damit Ihre Entscheidung rechtskräftig wird, ist Ihre
                  Unterschrift auf dem Formular zur Patient:innen-Einwilligung
                  notwendig. Diese Anwendung ist eine vereinfachte Aufbereitung
                  dieses Formulars. Wir haben Ihre Auswahl bereits in das
                  Formular übertragen. Bitte überprüfen Sie Ihre Auswahl noch
                  einmal, bevor Sie abschließend mit Ihrer Unterschrift der
                  Datenspende zustimmen.
                </Text>
              </Flex>
              <Box
                height={scalePX(516)}
                width={"100%"}
                align={"center"}
                borderRadius={scalePX(30)}
                border={"2px solid #C2C2C2"}
                background={"white"}
                padding={"5px"}
              >
                <iframe
                  // borderRadius={scalePX(30)}
                  src={pdfPath}
                  // src={pdfPath}
                  height="98%"
                  width={"98%"}
                  // style={{ border: "1px solid #ddd" }}
                  frameBorder="0"
                ></iframe>
              </Box>
            </Flex>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default Page;
