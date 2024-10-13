import { Transaction } from "@mysten/sui/transactions";
import { useSignAndExecuteTransaction, useSuiClient, useCurrentAccount } from "@mysten/dapp-kit";
import { useNetworkVariable } from "../NetworkConfig";
import { useState } from "react";

export function BuyButton({ onCreated }: { onCreated: (id: string) => void }) {
  const counterPackageId = useNetworkVariable("counterPackageId");
  const suiClient = useSuiClient();
  const account = useCurrentAccount();
  const [loading, setLoading] = useState(false);

  const { mutate: signAndExecute } = useSignAndExecuteTransaction({
    execute: async ({ bytes, signature }) =>
      await suiClient.executeTransactionBlock({
        transactionBlock: bytes,
        signature,
        options: {
          showRawEffects: true,
          showEffects: true,
        },
      }),
  });

  const create = async () => {
    setLoading(true);

    try {
      // Retrieve SUI coins from the user's account
      const coins = await suiClient.getCoins({
        owner: account?.address, // Ensure account is not null or undefined
        coinType: '0x2::sui::SUI',
      });

      if (!coins.data.length) {
        console.error("No SUI coins available");
        setLoading(false);
        return;
      }

      const coinObjectId = coins.data[0].coinObjectId; // Get the first available SUI coin

      // TokenStore object ID (provided by you)
      const tokenStoreObjectId = "0x126f080b6919caefe169ddbc11cdaeb093a645653996f074d9743487062cdcd3";

      // Create the transaction
      const tx = new Transaction();
      tx.moveCall({
        arguments: [
          tx.object(tokenStoreObjectId), // TokenStore object ID
          tx.object(coinObjectId)        // Coin<SUI> object ID
        ],
        target: `0xf40694059267acf562e7c2970c4f1a1742438fd28e1dc013bbbf8bdbdd79b9d2::goldentoken::buy_gems`,
      });

      // Sign and execute the transaction
      signAndExecute(
        { transaction: tx },
        {
          onSuccess: (result) => {
            console.log("Transaction executed", result);
            onCreated(result.txId); // Report the transaction ID
          },
          onError: (error) => {
            console.error("Transaction failed", error);
          },
        }
      );
    } catch (error) {
      console.error("Error creating transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-20">
      <button
        className="btn btn-primary"
        onClick={create}
        disabled={loading}
      >
        {loading ? "Processing..." : "Buy Golden Tokens"}
      </button>
    </div>
  );
}
