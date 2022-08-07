import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStarships } from "../../@types";
import { getAllStarships } from "../fetch";

type IStarshitState = {
  starship: IStarships;
  startships: IStarships[];
};
const initialState: IStarshitState = {
  starship: {} as IStarships,
  startships: [],
};
const characterSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    addStarship(state: IStarshitState, action: PayloadAction<IStarships>) {
      state.starship = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllStarships.fulfilled, (state, action) => {
      state.startships = action.payload;
    });
  },
});

export const { addStarship } = characterSlice.actions;
export const StarshipReducer = characterSlice.reducer;
