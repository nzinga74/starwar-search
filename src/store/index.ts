import { configureStore } from "@reduxjs/toolkit";
import {
  characterReducer,
  vehicleReducer,
  FilmReducer,
  StarshipReducer,
} from "./reducers";

const store = configureStore({
  reducer: {
    character: characterReducer,
    vehicle: vehicleReducer,
    starship: StarshipReducer,
    film: FilmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
