const appServicePDFLink = "/azure/AppService.pdf"
const appServiceImg = "/azure/AppService.jpeg"
const azureDevOpsLink = "/azure/AzureDevOps.pdf"
const azureDevOpsImg = "/azure/DevOps.jpeg"
const azureDevOpsVideo = "https://drive.google.com/file/d/1Y4OCWSZWR5fETyVg4QLf1oyD8_fCm1aA/preview";
const azureStaticWebAppVideo = "https://drive.google.com/file/d/1cXboP1_EuDDe_QrMuUIb_2zcujqY8Bgh/preview";
const azurekeyVaultVideo = "https://drive.google.com/file/d/1AR3esKCfNtpDthNnPI6vvUrVsFQPAWT6/preview";
const azureServiceBusVideo = "https://drive.google.com/file/d/1ZzRff5g3XaaXqiU91P0ZHM9sOkm6TJCO/preview";


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
    ,

    {
        id: 3,
        pdfLink: "",
        description: "Azure Key Vault Demo",
        image: "",
        video1: azurekeyVaultVideo
    },

    {
        id: 4,
        pdfLink: "",
        description: "Azure Service Bus Demo",
        image: "",
        video1: azureServiceBusVideo
    }
]

export default AzureData;