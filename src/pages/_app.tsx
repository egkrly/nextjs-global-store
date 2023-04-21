import React from "react";
import { Navigation } from "@/components";
import { AuthProvider, SocketInstanceProvider } from "@/providers";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <SocketInstanceProvider>
          <Navigation />
          <Component {...pageProps} />
        </SocketInstanceProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}
