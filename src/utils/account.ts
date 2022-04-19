import * as Bip39 from "bip39";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import { HDAccount } from "./storage";

export const deriveNewAccountFromMnemonic = (
  index: number,
  mnemonic: string,
  password?: string
): HDAccount => {
  const seed = Bip39.mnemonicToSeedSync(mnemonic, password);
  const path = `m/44'/501'/${index}'/0'`;
  const keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);
  return { index, publicKey: keypair.publicKey.toBase58() };
};

export const abbrevPublicKey = (publicKey: string) => {
  return `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`;
};
