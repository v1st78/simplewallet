import { createContext, useContext, useState } from "react";
import { hashPassword } from "../utils/password";
import { decryptSeedPhrase } from "../utils/seed";

type SeedContextType = {
  seed: string;
  auth: (password: string) => boolean;
  setSeed: (seed: string) => void;
};

const SeedContext = createContext<SeedContextType | undefined>(undefined);

export const SeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [seed, setSeed] = useState("");

  const auth = (password: string) => {
    const encryptedPassword = localStorage.getItem("password");

    if (hashPassword(password) === encryptedPassword) {
      setSeed(decryptSeedPhrase(password));
      return true;
    }

    return false;
  };

  return (
    <SeedContext.Provider value={{ seed, setSeed, auth }}>
      {children}
    </SeedContext.Provider>
  );
};

export const useSeed = () => useContext(SeedContext)!;
