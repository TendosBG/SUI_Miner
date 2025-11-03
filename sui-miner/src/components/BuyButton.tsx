import { Transaction } from "@mysten/sui/transactions";
import { useSignAndExecuteTransaction, useSuiClient, useCurrentAccount } from "@mysten/dapp-kit";
import { useState } from "react";
import './DisplayAmountVbux.css';

interface BuyButtonProps {
  onCreated: (id: string) => void;
  setAmount: (amount: number) => void; // Accept setAmount as a prop
  amount: number; // Accept amount as a prop
}

export function BuyButton({ onCreated, setAmount, amount }: BuyButtonProps) {
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
      if (!account?.address) {
        console.error("No account connected");
        return;
      }
      const coins = await suiClient.getCoins({
        owner: account.address, // Ensure account is not null or undefined
        coinType: '0x2::sui::SUI',
      });

      if (!coins.data.length) {
        console.error("No SUI coins available");
        return;
      }

      const coinObjectId = coins.data[0].coinObjectId; // Get the first available SUI coin
      const tokenStoreObjectId = "0x126f080b6919caefe169ddbc11cdaeb093a645653996f074d9743487062cdcd3";

      const tx = new Transaction();
      tx.moveCall({
        arguments: [
          tx.object(tokenStoreObjectId), // TokenStore object ID
          tx.object(coinObjectId)        // Coin<SUI> object ID
        ],
        target: `0xf40694059267acf562e7c2970c4f1a1742438fd28e1dc013bbbf8bdbdd79b9d2::goldentoken::buy_gems`,
      });

      await signAndExecute(
        { transaction: tx },
        {
          onSuccess: (result) => {
            setAmount(amount + 10); // Update the amount
            console.log("Transaction executed", result);
            onCreated(result.digest); // Report the transaction digest as ID
          },
          onError: (error) => {
            setAmount(amount + 10); // Update the amount
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
      {loading ? <p>Processing...</p> : <div id='goldenSui' onClick={create}></div>}
    </div>
  );
}
