import React, { useEffect, useState } from "react";

import { IFilms } from "../../@types";
import Characters from "../../components/Characters";
import { CharacterSection, Title } from "./styled";
import { getAllData } from "../../services/gets";
import { globalAnimation } from "../../animation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import FilmList from "../../components/FilmList";
import VehicleList from "../../components/VehicleList";
import StarshipList from "../../components/StarshipList";
import {
  getAllFilms,
  getAllStarships,
  getAllVehicles,
} from "../../store/fetch";

const CharacterDetails: React.FC = () => {
  const character = useAppSelector((state) => state.character.person);
  const vehicles = useAppSelector((state) => state.vehicle.vehicles);
  const starships = useAppSelector((state) => state.starship.startships);
  const films = useAppSelector((state) => state.film.films);
  const dispatch = useAppDispatch();
  const getDetails = async () => {
    dispatch(getAllFilms(character.films));
    dispatch(getAllVehicles(character.vehicles));
    dispatch(getAllStarships(character.starships));
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Characters data={[character]} />
      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 1.6 }}
      >
        <Title>Filmes</Title>
        <FilmList films={films} />
      </CharacterSection>

      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 2.6 }}
      >
        <Title>Veiculos</Title>
        <VehicleList vehicles={vehicles} />
      </CharacterSection>
      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 3.6 }}
      >
        <Title>StarShips</Title>
        <StarshipList startships={starships} />
      </CharacterSection>
    </>
  );
};
export default CharacterDetails;
