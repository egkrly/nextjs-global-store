import { getSocketInstance } from "@/features";
import React, { FC, PropsWithChildren, createContext, useContext, useMemo } from "react";
import { Socket } from "socket.io-client";
import { AuthContext } from "../AuthProvider";
import { Center, Spinner } from "@chakra-ui/react";

type SocketContextType = {
  instance: Socket;
}

export const SocketContext = createContext<SocketContextType>({ instance: null as unknown as Socket });

export const SocketInstanceProvider: FC<PropsWithChildren> = ({ children }) => {
  const authData = useContext(AuthContext);
  const user = authData?.user;

  const instance = useMemo(() => {
    return getSocketInstance(user);
  }, [user]);

  if (!user || !instance) {
    return (
      <Center w="100%" h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <SocketContext.Provider value={{ instance }}>{children}</SocketContext.Provider>
  )
};
