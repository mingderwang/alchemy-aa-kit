import { lightAccountClient, smartAccountClient } from "./smartAccountClient";

// get on-chain account owner address
const smartAccountAddress = smartAccountClient.getAddress();
const lightAccountAddress = lightAccountClient.getAddress();

console.log(smartAccountClient);
console.log(`smartAccountClint: ${smartAccountAddress}`);
console.log(lightAccountClient);
console.log(`lightAccountClint: ${lightAccountAddress}`);
