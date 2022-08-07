import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilms } from "../../@types";
import { getAllFilms } from "../fetch";

type IFilmState = {
  film: IFilms;
  films: IFilms[];
  isLoadingFilm: boolean;
};
const initialState: IFilmState = {
  film: {} as IFilms,
  films: [],
  isLoadingFilm: false,
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
    builder.addCase(getAllFilms.pending, (state, action) => {
      state.isLoadingFilm = true;
    });
    builder.addCase(getAllFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.isLoadingFilm = false;
    });
  },
});

export const { addFilm } = characterSlice.actions;
export const FilmReducer = characterSlice.reducer;
