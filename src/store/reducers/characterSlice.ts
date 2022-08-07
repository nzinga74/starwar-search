import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../@types";
import { getAllCharacter } from "../fetch";

type ICharacterState = {
  person: ICharacter;
  characters: ICharacter[];
  isCharacterLoading: boolean;
};
const initialState: ICharacterState = {
  person: {} as ICharacter,
  characters: [],
  isCharacterLoading: false,
};
const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    addCharacter(state: ICharacterState, action: PayloadAction<ICharacter>) {
      state.person = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllCharacter.pending, (state, action) => {
      state.isCharacterLoading = true;
    });
    builder.addCase(getAllCharacter.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.isCharacterLoading = false;
    });
  },
});

export const { addCharacter } = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
