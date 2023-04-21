import { createSlice } from "@reduxjs/toolkit";
import { global } from "../global";

const home = createSlice({
  name: "home",
  initialState: {},
  reducers: {
    global: global.reducer,
  },
});

export default home;
