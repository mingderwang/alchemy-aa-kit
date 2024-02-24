import { createMultiOwnerModularAccount } from "@alchemy/aa-accounts";
import { createLightAccountAlchemyClient } from "@alchemy/aa-alchemy";
import {
  LocalAccountSigner,
  SmartAccountSigner,
  createSmartAccountClient,
  polygonMumbai,
  type Hex,
} from "@alchemy/aa-core";
import { http } from "viem";

const { PRIVATE_KEY,alchemy_API_URL_POLYGON_MUMBAI, ALCHEMY_API_KEY_POLYGON_MUMBAI } =
  process.env;

const chain = polygonMumbai;
const signer: SmartAccountSigner =
  LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY as Hex);
const rpcTransport = http(alchemy_API_URL_POLYGON_MUMBAI);

export const smartAccountClient = createSmartAccountClient({
  transport: rpcTransport,
  chain,
  account: await createMultiOwnerModularAccount({
    transport: rpcTransport,
    chain,
    signer,
  }),
});

// Create a provider to send user operations from your smart account
export const lightAccountClient = await createLightAccountAlchemyClient({
  // get your Alchemy API key at https://dashboard.alchemy.com
  apiKey: ALCHEMY_API_KEY_POLYGON_MUMBAI,
  chain,
  signer,
});
