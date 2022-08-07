import React, { useEffect } from "react";
import { FilmSection, Label, Title } from "./stytes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faCalendar,
  faFilm,
  faBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { splitter } from "../../general/function";
import { globalAnimation } from "../../animation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FilmList from "../../components/FilmList";
import CharacterList from "../../components/CharacterList";
import { getAllCharacter, getAllFilms } from "../../store/fetch";

const Vehicles: React.FC = () => {
  const vehicle = useAppSelector((state) => state.vehicle.vehicle);
  const characters = useAppSelector((state) => state.character.characters);
  const films = useAppSelector((state) => state.film.films);
  const dispatch = useAppDispatch();
  const getVehicles = async () => {
    try {
      const urlPilot = splitter(vehicle?.pilots);
      dispatch(getAllCharacter(urlPilot));
      dispatch(getAllFilms(vehicle?.films));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getVehicles();
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
          <FontAwesomeIcon icon={faFilm} /> Nome
        </Title>
        <Label>{vehicle?.name}</Label>
        <Title>
          <FontAwesomeIcon icon={faBook} /> Modelo
        </Title>
        <Label>{vehicle?.model}</Label>
        <Title>
          <FontAwesomeIcon icon={faPerson} /> Peso
        </Title>
        <Label>{vehicle?.length}</Label>

        <Title>
          <FontAwesomeIcon icon={faCalendar} /> Classe do Veiculo
        </Title>
        <Label>{vehicle?.vehicle_class}</Label>
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
          <FontAwesomeIcon icon={faFilm} /> Filmes
        </Title>
        <FilmList films={films} />
      </FilmSection>
    </>
  );
};

export default Vehicles;
