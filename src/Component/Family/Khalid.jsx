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
    <div>Khalid Ids</div>
    <br/>
     <label>Photo</label><br/>
      <img src="/KhalidIDs/PHOTO.jpg" width="20%"></img>
     
    <br/>
     <a href="/KhalidIDs/Resume.pdf" target="_blank">Resume PDF</a>
     <div style={{width:"30px"}}>
      <Document file="/KhalidIDs/Resume.pdf">
         <Page pageNumber={1} width={500} height={500} />
      </Document>
    </div>

     <label>Khalid Aadhar</label><br/>
     
    <img src="/KhalidIDs/AadharI.jpeg" width="20%"></img>
    <img src="/KhalidIDs/AadharII.jpeg" width="20%"></img>
    <br/>
     <label>Driving Lisence</label><br/>
      <img src="/KhalidIDs/DLFront.jpeg" width="20%"></img>
    <img src="/KhalidIDs/DLBack.jpeg" width="20%"></img>
    <br/>

     <label>PAN</label><br/>
       <img src="/KhalidIDs/PAN.jpg" width="20%"></img>
    <br/>



     <br/>
     <label>Passport</label><br/>
      <img src="/KhalidIDs/PassportI.jpeg" width="20%"></img>
    <img src="/KhalidIDs/PassportII.jpeg" width="20%"></img>
    <br/>

    <br/>
     <label>Voter</label><br/>
      <img src="/KhalidIDs/VoterI.jpeg" width="20%"></img>
     <img src="/KhalidIDs/VoterII.jpeg" width="20%"></img>
    <br/>

 
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>Sl. No.</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Examination</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Board / University</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Year</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>% Obtained</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>1.</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            MCA (Master of Computer Application)
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            University of North Bengal (W.B)
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>2000</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>75.42 %</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>2.</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Master of Science (Electronic)
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>BNMU (Madhepura)</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>1995</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>65.62 %</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>3.</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Bachelor of Science (Physics, Hons)
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>BNMU (Madhepura)</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>1991</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>64.26 %</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>4.</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>Higher Secondary</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            B.I.E. Council (Patna)
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>88</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>48.11 %</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>5.</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>Secondary</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>B.S.E.B. (Patna)</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>86</td>
          <td style={{ border: "1px solid black", padding: "8px" }}>57.22 %</td>
        </tr>
      </tbody>
    </table>

    <br/>
    <br/>

    
    </>
    

  )
}

export default Khalid
