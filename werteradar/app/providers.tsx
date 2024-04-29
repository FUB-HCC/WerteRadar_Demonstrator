// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { scalePX } from "./utils/functions";

import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/500.css"; // Specify weight
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/700.css"; // Specify weight

const stepperTheme = {
  baseStyle: {
    stepper: {
      justifyContent: "space-between",
    },
    number: {
      "&[data-status=active]": {
        fontSize: scalePX(30),
        fontWeight: 700,
        lineHeight: "normal",
      },
      "&[data-status=complete]": {
        fontSize: scalePX(20),
        fontWeight: 700,
        lineHeight: "normal",
      },
      "&[data-status=inactive]": {
        fontSize: scalePX(20),
        fontWeight: 700,
        lineHeight: "normal",
      },
    },
    step: {
      // background: "blue",
    },
    indicator: {
      // change the default border radius to 0
      "&[data-status=active]": {
        height: scalePX(60),
        width: scalePX(60),
        bg: "#E4E2FC",
        color: "#4C3CEC",
        flexShrink: 0,
        textAlign: "center",
        border: "5px solid #4C3CEC",
      },
      "&[data-status=complete]": {
        height: scalePX(37),
        width: scalePX(37),
        bg: "#E4E2FC",
        color: "#4C3CEC",
        flexShrink: 0,
        textAlign: "center",
        border: "2px solid #4C3CEC",
      },
      "&[data-status=incomplete]": {
        height: scalePX(37),
        width: scalePX(37),
        color: "#C2C2C2",
        flexShrink: 0,
        fontSize: scalePX(20),
        fontWeight: 700,
        lineHeight: "normal",
        textAlign: "center",
        border: "2px solid #C2C2C2",
      },
    },
  },
  StepStatus: {
    variants: {
      active: {
        bg: "primary.50", // Use the custom color for active steps
        fontSize: "70px",
      },
      complete: {
        bg: "tertiary.300", // Use the custom color for complete steps
      },
    },
  },
};

const progressTheme = {
  baseStyle: {
    filledTrack: {
      bg: "rgba(76, 60, 236, 0.50)",
    },
    track: { bg: "#E8E8E8" },
  },
};

const theme = extendTheme({
  components: {
    Stepper: stepperTheme,
    Progress: progressTheme,
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  // styles: {
  //   global: {
  //     body: {
  //       fontFamily: `"Poppins", sans-serif`,
  //     },
  //   },
  // },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
