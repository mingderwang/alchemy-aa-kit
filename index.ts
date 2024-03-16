import { LocalAccountSigner, SmartAccountSigner, polygonMumbai } from "@alchemy/aa-core";
import { lightAccountClient } from "./smartAccountClient";
import { createLightAccountClient, lightAccountClientActions } from "@alchemy/aa-accounts";
import { custom } from "viem";

const NEW_OWNER_MNEMONIC = `test `.repeat(11) + `junk`;
const newOwner: SmartAccountSigner = LocalAccountSigner.mnemonicToAccountSigner(NEW_OWNER_MNEMONIC);
const accountAddress = lightAccountClient.getAddress();
const oldAccountClient = lightAccountClient.extend(lightAccountClientActions);
const chain = polygonMumbai;
(async () => {
  const hash = await oldAccountClient.transferOwnership({
    newOwner,
    waitForTxn: true,
  });

  console.log(hash);

  const transferredClient = await createLightAccountClient({
    transport: custom(oldAccountClient),
    chain,
    owner: newOwner, // NOTE: you MUST to specify the original smart account address to connect using the new owner/signer
  });

  console.log(transferredClient.getAddress());

})();
