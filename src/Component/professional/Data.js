const resignationPDF = "/resigned/ReResignation.pdf"
const acceptancePDF = "/resigned/2_0994_Acceptance.pdf"
const exitFormalities = "/resigned/3_Re_0994_ExitFormalities.pdf"
const ndaSeparation = "/resigned/4_NDASeparationAgreementSigned.pdf"
const ndaSeparationSigned = "/resigned/5_NDASeparationAgreementSignedDone.pdf"
const ndaAudit = "/resigned/6_NDASeparationAgreement_0994Audit.pdf"
const fullfinal ="/resigned/fullfinal.pdf"
const experienceLetter ="./resigned/Experience_Relieving_Letter.pdf"
const form16AS ="/resigned/Form16AS_AJBPA9805B-2026.pdf"

const offerletter ="/resigned/Gyansys_Offer.pdf"
const salaryRevision ="/resigned/SalaryRevision_20250994.pdf"
const salarySlipApr ="/resigned/Payslip_Apr_2025.pdf"
const salarySlipMay ="/resigned/Payslip_May_2025.pdf"
const salarySlipJun ="/resigned/Payslip_Jun_2025.pdf"
const salarySlipJul ="/resigned/Payslip_Jul_2025.pdf"
const salarySlipAug ="/resigned/Payslip_Aug_2025.pdf"
const salarySlipSep ="/resigned/Payslip_Sep_2025.pdf"


const consultant ="/resigned/RetainershipAgreement_Khalid Akhter.pdf"
const InvoiceFormatContractors = "/resigned/Invoice_MonthName2025.xlsx";

const workerAgrement ="/resigned/AMINDContingentWorkerAgreement_Khalid_Akhter.pdf";
const employmentScreening ="/resigned/PreEmploymentScreening_Khalid_Akhter.pdf";
const employmentScreeningDocx ="/resigned/PreEmploymentScreening_Khalid_Akhter.docx";

const onboardingAMAT = "/resigned/OnboardingGuideline_AMAT.pdf";

const Inv_Oct_2025 ="/resigned/contractorBills/Inv_Oct_2025.pdf"
const NEFT_Oct_2025 ="/resigned/contractorBills/NEFT_Oct_2025.pdf"

 
const Docs =[
{uri: "/DML.pdf"},
{uri: "/resigned/PreEmploymentScreening_Khalid_Akhter.docx"}

] 


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
},
{
    id:7,
    pdfLink:fullfinal,
    description:"Full & Final Shuttlement"
},
{
    id:8,
    pdfLink:experienceLetter,
    description:"Experience-Relieving Letters"
},
{
    id:9,
    pdfLink:form16AS,
    description:"Form 16AS, Income Tax Dept."
}
]

const DataSalary =[
    {
    id:1,
    pdfLink:offerletter,
    description:"Gyansys Offer Letter"
    },
    {
    id:2,
    pdfLink:salaryRevision,
    description:"Gyansys Salary Revision"
    },
    {
    id:3,
    pdfLink:salarySlipApr,
    description:"Salary Slip April, 2025"
    },
    {
    id:4,
    pdfLink:salarySlipMay,
    description:"Salary Slip May , 2025"
    },
    {
    id:5,
    pdfLink:salarySlipJun,
    description:"Salary Slip June, 2025"
    },
    {
    id:6,
    pdfLink:salarySlipJul,
    description:"Salary Slip July, 2025"
    },
    {
    id:7,
    pdfLink:salarySlipAug,
    description:"Salary Slip August, 2025"
    },
    {
    id:8,
    pdfLink:salarySlipSep,
    description:"Salary Slip September, 2025"
    },
    

]

const Consultant =[

    {
    id:1,
    pdfLink:consultant,
    description:"Consultant Agreement"
    }
   
]

const AMAT =[
   {
    id:1,
    pdfLink:workerAgrement,
    description:"Worker Agreement 3"
    },
    {
    id:2,
    pdfLink:employmentScreening,
    description:"Employment Screening 3"
    },
    {
    id:3,
    pdfLink:onboardingAMAT,
    description:"AMAT Onboarding Guideline"
    },

]

const ContractorAdvice =[
     {
        id:1,
        pdfLink:InvoiceFormatContractors,
        description:"Invoice Format Contractors: get it approved from your AE, can't consider bill without it."
    },
    {
        id:2,
        pdfLink:Inv_Oct_2025,
        description:"Contractor Advice Oct 2025"
    },
    {
        id:3,
        pdfLink:NEFT_Oct_2025,
        description:"Contractor NEFT Oct 2025"
    }
]

 
export { Data , DataSalary, Consultant,AMAT, Docs,ContractorAdvice};  
