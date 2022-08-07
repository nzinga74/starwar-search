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
import { Loader } from "../../components/Searcher/styles";
import Loading from "../../components/Loading";

const CharacterDetails: React.FC = () => {
  const { person: character, isCharacterLoading } = useAppSelector(
    (state) => state.character
  );
  const { vehicles, isLoadingVehicle } = useAppSelector(
    (state) => state.vehicle
  );
  const { startships: starships, isLoadingStarship } = useAppSelector(
    (state) => state.starship
  );
  const { films, isLoadingFilm } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();
  const getDetails = async () => {
    dispatch(getAllFilms(character.films));
    dispatch(getAllVehicles(character.vehicles));
    dispatch(getAllStarships(character.starships));
  };
  useEffect(() => {
    getDetails();
  }, []);

  console.log("@@", isLoadingVehicle);

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
        {isLoadingFilm ? (
          <Loader>
            <Loading />
          </Loader>
        ) : (
          <FilmList films={films} />
        )}
      </CharacterSection>

      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 2.6 }}
      >
        <Title>Veiculos</Title>
        {isLoadingVehicle ? (
          <Loader>
            <Loading />
          </Loader>
        ) : (
          <VehicleList vehicles={vehicles} />
        )}
      </CharacterSection>
      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 3.6 }}
      >
        <Title>StarShips</Title>
        {isLoadingStarship ? (
          <Loader>
            <Loading />
          </Loader>
        ) : (
          <StarshipList startships={starships} />
        )}
      </CharacterSection>
    </>
  );
};
export default CharacterDetails;
