const SSMSOpenAI = (
  <>
    <span className="highlightText">
      {" "}
      SSMS 2022: Integration with Open AI GPT-4{" "}
    </span>
    {`
    
    1. Set up Azure OpenAI Service:

    Create an Azure OpenAI resource: Sign in to the Azure portal, navigate to Azure AI services, 
    and create a new Azure OpenAI account. Configure the required details like subscription, 
    resource group, region, name, and pricing tier.

    Deploy an OpenAI model: Within the Azure AI Foundry portal (accessible from your Azure 
    OpenAI resource overview), deploy a base model like GPT-4 chat completion. Assign a deployment 
    name during this process.

    Obtain endpoint and key: Go to your Azure OpenAI resource in the Azure portal, navigate to 
    "Keys and Endpoint" under Resource Management, and note down the Endpoint URL and one of the 
    API keys.

`}
  </>
);

export default SSMSOpenAI;
