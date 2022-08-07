import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStarships } from "../../@types";
import { getAllStarships } from "../fetch";

type IStarshitState = {
  starship: IStarships;
  startships: IStarships[];
  isLoadingStarship: boolean;
};
const initialState: IStarshitState = {
  starship: {} as IStarships,
  startships: [],
  isLoadingStarship: false,
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
    builder.addCase(getAllStarships.pending, (state, action) => {
      state.isLoadingStarship = true;
    });
    builder.addCase(getAllStarships.fulfilled, (state, action) => {
      state.startships = action.payload;
      state.isLoadingStarship = false;
    });
  },
});

export const { addStarship } = characterSlice.actions;
export const StarshipReducer = characterSlice.reducer;
