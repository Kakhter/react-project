const resignationPDF = "/resigned/ReResignation.pdf"
const acceptancePDF = "/resigned/2_0994_Acceptance.pdf"
const exitFormalities = "/resigned/3_Re_0994_ExitFormalities.pdf"
const ndaSeparation = "/resigned/4_NDASeparationAgreementSigned.pdf"
const ndaSeparationSigned = "/resigned/5_NDASeparationAgreementSignedDone.pdf"
const ndaAudit = "/resigned/6_NDASeparationAgreement_0994Audit.pdf"

const Data =[
{
    id:1,
    pdfLink:resignationPDF,
    description:"Resignation Letter"

},
{
    id:2,
    pdfLink:acceptancePDF,
    description:"Acceptance Letter"

},
{
    id:3,
    pdfLink:exitFormalities,
    description:"Exit Formalities"

},
{
    id:4,
    pdfLink:ndaSeparation,
    description:"NDA Separation"

},
{
    id:5,
    pdfLink:ndaSeparationSigned,
    description:"NDA Separation Signed"

},
{
    id:6,
    pdfLink:ndaAudit,
    description:"Audit"

}
]
export default Data;