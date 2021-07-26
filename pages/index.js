import { TezosToolkit } from "@taquito/taquito";
import { TezBridgeSigner } from "@taquito/tezbridge-signer";

export default function Home() {
  if (typeof window !== "undefined") {
    const tezos = new TezosToolkit("https://api.tez.ie/rpc/florencenet");
    tezos.setProvider({ signer: new TezBridgeSigner() });
    tezos.tz
      .getBalance("tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY")
      .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
      .catch((error) => console.log(JSON.stringify(error)));
  }
  return <div>Frontend implementation for Recollect DAO.</div>;
}
