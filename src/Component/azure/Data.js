const appServicePDFLink = "/azure/AppService.pdf"
const appServiceImg = "/azure/AppService.jpeg"
const azureDevOpsLink = "/azure/AzureDevOps.pdf"
const azureDevOpsImg = "/azure/DevOps.jpeg"
const azureDevOpsVideo = "/azure/Create-DevOps-Pipeline.mp4";
const azureStaticWebAppVideo = "/azure/Create-Static-Web-Apps.mp4";


const AzureData = [
    {
        id: 1,
        pdfLink: appServicePDFLink,
        description: "Azure Apps:Create Static Web Apps .",
        image: appServiceImg,
        video1: azureStaticWebAppVideo
    },

    {
        id: 2,
        pdfLink: azureDevOpsLink,
        description: "Create DevOps Pipeline",
        image: azureDevOpsImg,
        video1: azureDevOpsVideo
    }
]

export default AzureData;