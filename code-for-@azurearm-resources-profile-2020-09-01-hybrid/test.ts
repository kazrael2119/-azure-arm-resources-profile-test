import { DefaultAzureCredential } from "@azure/identity";
import {ResourceManagementClient } from "@azure/arm-resources-profile-hybrid-2019-03-01";

const subscriptionId = process.env.SUBSCRIPTION_ID||'';//run npm i --save-dev @types/node
const credential = new DefaultAzureCredential();
const resourceGroup = "myjstest12";
const location = "eastus";
const client = new ResourceManagementClient(credential, subscriptionId);

async function test() {
    const result = await client.resourceGroups.createOrUpdate(
        resourceGroup,
        {location}
      );
      console.log(result);
}

test();