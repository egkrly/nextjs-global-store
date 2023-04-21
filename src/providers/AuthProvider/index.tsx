import { User } from "@/types";
import React, { FC, PropsWithChildren, createContext } from "react";

type AuthContextType = {
  user: User
} | null;

export const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const user = { token: "randomTokenGotFromBackend" };

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
};
