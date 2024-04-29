import { scalePX } from "./functions"
const totalApplicationPages = 17
  

const headingTextProps = {
    fontSize: scalePX(35),
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: scalePX(40),
    color: "#4C3CEC"
}
  
const mainTextProps = {
    fontSize: scalePX(30),
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: scalePX(40),
    color: "#4C3CEC",
}

const headingTextPropsBlack = {
    color: "#292929",
    fontSize: scalePX(35),
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: scalePX(40),
}


const mainTextPropsBlack = {
    color: "#292929",
    fontSize: scalePX(22),
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: scalePX(32),
}

const navButtonStyling = {
    width: scalePX(415),
    height: scalePX(70),
    fontSize: scalePX(30),
    borderRadius: "41px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    background: "#E4E2FC",
    color: "#4C3CEC",
    _hover: { bg: "#C9C4FF" }
}

const navButtonStylingConfirmation = {
    width: scalePX(485),
    height: scalePX(70),
    fontSize: scalePX(30),
    background: "#4C3CEC",
    color: "white",
    borderRadius: "41px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    _hover: { bg: "#130786" }
}


const systemQuestions = [
    ["Was ist Ihnen wichtig, wenn Sie ihre Daten weitergeben?", "system"],
    [
      "Haben Sie Sorgen  bei der Weitergabe Ihrer Daten? Wenn ja, welche?",
      "system",
    ],
    [
      "Welchen Zweck könnte eine Datenspende für Sie oder die Gesellschaft haben?",
      "system",
    ],
    // [
    //   "Gibt es weitere Aspekte, welche Ihnen bei einer Datenspende wichtig sind?",
    //   "system",
    // ],
    [
      "Sie können jetzt fortfahren, indem sie auf “Weiter” klicken.", 
      "system",
    ],
  ];


export { headingTextProps, mainTextProps, headingTextPropsBlack, mainTextPropsBlack, totalApplicationPages, navButtonStyling, navButtonStylingConfirmation, systemQuestions}