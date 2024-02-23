import {
  createLightAccount,
  lightAccountClientActions,
} from "@alchemy/aa-accounts";
import {
  LocalAccountSigner,
  SmartAccountSigner,
  createSmartAccountClient,
  sepolia,
} from "@alchemy/aa-core";
import { http } from "viem";

const PRIVATE_KEY = process.env.PRIVATE_KEY as Hex;
const API_URL_SEPOLIA = process.env.API_URL_SEPOLIA;
export const signer = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY);

export const chain = sepolia;
export const rpcTransport = http(
  API_URL_SEPOLIA
);

export const smartAccountClient = createSmartAccountClient({
  transport: rpcTransport,
  chain,
  account: await createLightAccount({
    transport: rpcTransport,
    chain,
    signer,
  }),
}).extend(lightAccountClientActions);
