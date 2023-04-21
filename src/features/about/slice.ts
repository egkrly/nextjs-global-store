import { createSlice } from "@reduxjs/toolkit";
import { global } from "../global";

const about = createSlice({
  name: "about",
  initialState: {},
  reducers: {
    global: global.reducer,
  },
});

export default about;
