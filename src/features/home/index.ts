import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";
import { global } from "../global";

export default function configureAppStore(context = {}): EnhancedStore {
  const saga = createSagaMiddleware({ context });

  const store: EnhancedStore = configureStore({
    reducer: {
      global: global.reducer,
    },
    middleware: [saga],
  });

  // NOTE: context is moved from createSagaMiddleware().run(saga, context) to createSagaMiddleware({ context })
  saga.run(rootSaga);

  return store;
}
