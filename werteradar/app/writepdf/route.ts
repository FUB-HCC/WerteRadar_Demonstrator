// app/api/route.js 👈🏽

import { NextResponse } from "next/server";
import fs from "fs"
import { PDFDocument } from "pdf-lib";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}



// To handle a POST request to /api
export async function POST(request) {
  const timestampInMillis = new Date().getTime();
  const json_data = await request.json()
  const consents = json_data["consents"]
  // const pdfFilePath = "public/einwilligung.pdf";
  // const pdfFilePathFilled = `public/einwilligung_filled/einwilligung_filled_${timestampInMillis}.pdf`;
  const pdfFilePath = "public/MII_AG-Consent_Einheitlicher-Mustertext_v1.7.2.pdf";
  const pdfFilePathFilled = "public/MII_AG-Consent_Einheitlicher-Mustertext_v1.7.2.pdf";

  const existingPdfBytes = fs.readFileSync(pdfFilePath);  
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // const pdfForm = pdfDoc.getForm()
  // console.log("Fields:")
  // console.log(pdfForm.getFields())

  // This part is used to check the checkboxes in the PDF Form.
  // Needs to be adjusted for the PDF form in question, e.g. when the names of the fields change
  // let checkBox
  // for (let i = 0; i < consents.length; i++) {
  //   if (i == 0) {
  //     if (consents[0]=== "1") {
  //       checkBox = pdfForm.getCheckBox('Ja')
  //       checkBox.check()
  //     } else {
  //       checkBox = pdfForm.getCheckBox('Nein')
  //       checkBox.check()
  //     }
  //   } else {
  //     if (consents[i]=== "1") {
  //       checkBox = pdfForm.getCheckBox(`Ja${i}`)
  //       checkBox.check()
  //     } else {
  //       checkBox = pdfForm.getCheckBox(`Nein${i}`)
  //       checkBox.check()
  //   }
  // }

  // Write the PDF bytes to the file asynchronously
  // const pdfBytes = await pdfDoc.save();

  // fs.writeFileSync(pdfFilePathFilled, pdfBytes, (err) => {
  //     if (err) {
  //     console.error('Error writing PDF to the file:', err);
  //     } else {
  //     console.log('PDF has been written to the file successfully.');
  //     }
  // }) 

  return NextResponse.json({ pdfPath: pdfFilePathFilled }, { status: 200 });
}
