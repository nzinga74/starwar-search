import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilms } from "../../@types";
import { getAllFilms } from "../fetch";

type IFilmState = {
  film: IFilms;
  films: IFilms[];
};
const initialState: IFilmState = {
  film: {} as IFilms,
  films: [],
};
const characterSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    addFilm(state: IFilmState, action: PayloadAction<IFilms>) {
      state.film = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export const { addFilm } = characterSlice.actions;
export const FilmReducer = characterSlice.reducer;
