import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

// ✅ Worker setup (required for pdf.js)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();


const Khalid = () => {
  return (
    <>
    <div>Hello Khalid</div>
     <br/>
     <label>Khalid Aadhar</label><br/>
     
    <img src="/KhalidIDs/AadharI.jpeg" width="20%"></img>
    <img src="/KhalidIDs/AadharII.jpeg" width="20%"></img>
    <br/>
     <label>Driving Lisence</label><br/>
      <img src="/KhalidIDs/DLFront.jpeg" width="20%"></img>
    <img src="/KhalidIDs/DLBack.jpeg" width="20%"></img>
    <br/>

     <label>PAN</label><br/>
  
     <a href="/KhalidIDs/PAN.pdf" target="_blank">PAN PDF</a>
     <div style={{width:"10px"}}>
      <Document file="/KhalidIDs/PAN.pdf">
         <Page pageNumber={1} width={300} height={500} />
      </Document>
    </div>
    </>
    

  )
}

export default Khalid
