import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface langState {
  lang: string;
}

const initialState: langState = {
  lang: "eng",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<langState>) => {
      state.lang = action.payload.lang;
    },
  },
});

export const { changeLanguage } = langSlice.actions;

export default langSlice.reducer;
