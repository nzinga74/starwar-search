import React, { useEffect, useState } from "react";
import { FilmSection, Label, Title, LabelContent, Item, List } from "./stytes";
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
import { TypeFilms } from "../../@types";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Film: React.FC = () => {
  const [films, setFilms] = useState<TypeFilms>({} as TypeFilms);
  const locate = useLocation();
  const gerFilms = async () => {
    try {
      const url = locate.state as string;
      const response = await axios.get(url);
      console.log(url);
      if (response.status === 200) {
        console.log("[]", response?.data);
        setFilms(response?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    gerFilms();
  }, []);
  return (
    <>
      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faFilm} /> Titulo
        </Title>
        <Label>{films.title}</Label>
        <Title>
          <FontAwesomeIcon icon={faBook} /> Descrição
        </Title>
        <Label>{films.opening_crawl}</Label>
        <Title>
          <FontAwesomeIcon icon={faPerson} /> Director
        </Title>
        <Label>{films.director}</Label>

        <Title>
          <FontAwesomeIcon icon={faCalendar} /> Data de Realização
        </Title>
        <Label>{films?.release_date}</Label>
      </FilmSection>
      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faUser} /> Personagem
        </Title>
        <List>
          {films?.characters?.map((character, index) => (
            <Item>
              <LabelContent>
                <FontAwesomeIcon icon={faUser} /> {` Personagem ${++index}`}
              </LabelContent>
            </Item>
          ))}
        </List>
      </FilmSection>

      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faCar} /> Veiculos
        </Title>
        <List>
          {films?.vehicles?.map((character, index) => (
            <Item>
              <LabelContent>
                <FontAwesomeIcon icon={faUser} /> {` Veiculos ${++index}`}
              </LabelContent>
            </Item>
          ))}
        </List>
      </FilmSection>

      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faShip} /> StarShips
        </Title>
        <List>
          {films?.starships?.map((character, index) => (
            <Item>
              <LabelContent>
                <FontAwesomeIcon icon={faUser} /> {` StarShips ${++index}`}
              </LabelContent>
            </Item>
          ))}
        </List>
      </FilmSection>
    </>
  );
};

export default Film;
