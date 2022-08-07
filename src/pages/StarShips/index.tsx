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
import CharacterList from "../../components/CharacterList";
import FilmList from "../../components/FilmList";
import { getAllCharacter, getAllFilms } from "../../store/fetch";

const StarShip: React.FC = () => {
  const starship = useAppSelector((state) => state.starship.starship);
  const characters = useAppSelector((state) => state.character.characters);
  const films = useAppSelector((state) => state.film.films);
  const dispatch = useAppDispatch();
  const getStarShip = async () => {
    try {
      const urlPilot = splitter(starship?.pilots);
      dispatch(getAllCharacter(urlPilot));
      dispatch(getAllFilms(starship?.films));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStarShip();
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
        <Label>{starship?.name}</Label>
        <Title>
          <FontAwesomeIcon icon={faBook} /> Modelo
        </Title>
        <Label>{starship?.model}</Label>
        <Title>
          <FontAwesomeIcon icon={faPerson} /> Peso
        </Title>
        <Label>{starship?.length}</Label>

        <Title>
          <FontAwesomeIcon icon={faCalendar} /> Classe do Veiculo
        </Title>
        <Label>{starship?.starship_class}</Label>
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

export default StarShip;
