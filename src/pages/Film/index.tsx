import React, { useEffect } from "react";
import { FilmSection, Label, Title } from "./stytes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faCalendar,
  faFilm,
  faBook,
  faCar,
  faShip,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { globalAnimation } from "../../animation";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import VehicleList from "../../components/VehicleList";
import StarshipList from "../../components/StarshipList";
import CharacterList from "../../components/CharacterList";
import {
  getAllCharacter,
  getAllStarships,
  getAllVehicles,
} from "../../store/fetch";

const Film: React.FC = () => {
  const film = useAppSelector((state) => state.film.film);
  const characters = useAppSelector((state) => state.character.characters);
  const vehicles = useAppSelector((state) => state.vehicle.vehicles);
  const starships = useAppSelector((state) => state.starship.startships);
  const dispatch = useAppDispatch();
  const getFilms = async () => {
    dispatch(getAllCharacter(film.characters));
    dispatch(getAllVehicles(film.vehicles));
    dispatch(getAllStarships(film.starships));
  };

  useEffect(() => {
    getFilms();
  }, []);
  return (
    <>
      <FilmSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1 }}
      >
        <Title>
          <FontAwesomeIcon icon={faFilm} /> Titulo
        </Title>
        <Label>{film.opening_crawl}</Label>
        <Title>
          <FontAwesomeIcon icon={faBook} /> Descrição
        </Title>
        <Label>{film.opening_crawl}</Label>
        <Title>
          <FontAwesomeIcon icon={faPerson} /> Director
        </Title>
        <Label>{film.director}</Label>

        <Title>
          <FontAwesomeIcon icon={faCalendar} /> Data de Realização
        </Title>
        <Label>{film?.release_date}</Label>
      </FilmSection>
      <FilmSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 1 }}
      >
        <Title>
          <FontAwesomeIcon icon={faUser} /> Personagem
        </Title>
        <CharacterList characters={characters} />
      </FilmSection>

      <FilmSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 2 }}
      >
        <Title>
          <FontAwesomeIcon icon={faCar} /> Veiculos
        </Title>
        <VehicleList vehicles={vehicles} />
      </FilmSection>

      <FilmSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 3 }}
      >
        <Title>
          <FontAwesomeIcon icon={faShip} /> StarShips
        </Title>
        <StarshipList startships={starships} />
      </FilmSection>
    </>
  );
};

export default Film;
