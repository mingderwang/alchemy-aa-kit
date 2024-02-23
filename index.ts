import { smartAccountClient } from "./smartAccountClient";

// get on-chain account owner address
const accountAddress = smartAccountClient.getAddress();

console.log(accountAddress);
