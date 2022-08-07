import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICharacter, IFilms, IStarships, IVehicles } from "../@types";

export const getAllCharacter = createAsyncThunk(
  "api/character",
  async (endpoints: string[], thunkAPI) => {
    try {
      let response: ICharacter[] = [];
      await axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((data) => {
          response = data.map((item) => item.data);
        });
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error bring character");
    }
  }
);

export const getAllVehicles = createAsyncThunk(
  "api/vehicles",
  async (endpoints: string[], thunkAPI) => {
    try {
      let response: IVehicles[] = [];
      await axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((data) => {
          response = data.map((item) => item.data);
        });
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error bring vehicles");
    }
  }
);

export const getAllFilms = createAsyncThunk(
  "api/films",
  async (endpoints: string[], thunkAPI) => {
    try {
      let response: IFilms[] = [];
      await axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((data) => {
          response = data.map((item) => item.data);
        });
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error bringing films");
    }
  }
);

export const getAllStarships = createAsyncThunk(
  "api/starships",
  async (endpoints: string[], thunkAPI) => {
    try {
      let response: IStarships[] = [];
      await axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((data) => {
          response = data.map((item) => item.data);
        });
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error bringing films");
    }
  }
);
