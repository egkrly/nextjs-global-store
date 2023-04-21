import React, { FC, useContext, useMemo } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux";

import configureAppStore from "@/features/home";
import { SocketContext } from "@/providers/SocketInstanceProvider";

const Home: FC = () => {
  const { instance } = useContext(SocketContext);
  const context = { instance };

  const store = useMemo(() => configureAppStore(context), []);

  return (
    <Provider store={store}>
      <Container w={1024}>
        <Heading>Home</Heading>
      </Container>
    </Provider>
  )
};

export default Home;
