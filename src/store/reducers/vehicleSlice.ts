import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVehicles } from "../../@types";
import { getAllVehicles } from "../fetch";
type IVehicleState = {
  vehicle: IVehicles;
  vehicles: IVehicles[];
  isLoadingVehicle: boolean;
};
const initialState: IVehicleState = {
  vehicle: {} as IVehicles,
  vehicles: [],
  isLoadingVehicle: false,
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
    builder.addCase(getAllVehicles.pending, (state, action) => {
      state.isLoadingVehicle = true;
    });
    builder.addCase(getAllVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload;
      state.isLoadingVehicle = false;
    });
  },
});

export const { addVehicle } = characterSlice.actions;
export const vehicleReducer = characterSlice.reducer;
