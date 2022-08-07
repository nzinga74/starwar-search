import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVehicles } from "../../@types";
import { getAllVehicles } from "../fetch";
type IVehicleState = {
  vehicle: IVehicles;
  vehicles: IVehicles[];
};
const initialState: IVehicleState = {
  vehicle: {} as IVehicles,
  vehicles: [],
};
const characterSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    addVehicle(state: IVehicleState, action: PayloadAction<IVehicles>) {
      state.vehicle = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload;
    });
  },
});

export const { addVehicle } = characterSlice.actions;
export const vehicleReducer = characterSlice.reducer;
