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
  const [films, setFilms] = useState<TypeFilms[]>([]);
  const locate = useLocation();
  const getPerson = async () => {
    try {
      const url = locate.state as string;
      const response = await axios.get(url);
      if (response.status === 200) {
        console.log(response?.data?.results);
        setFilms(response?.data?.results);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPerson();
  }, []);
  return (
    <>
      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faFilm} /> Titulo
        </Title>
        <Label>A New Hope</Label>
        <Title>
          <FontAwesomeIcon icon={faBook} /> Descrição
        </Title>
        <Label>
          It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a
          hidden
        </Label>
        <Title>
          <FontAwesomeIcon icon={faPerson} /> Director
        </Title>
        <Label>George Lucas</Label>

        <Title>
          {" "}
          <FontAwesomeIcon icon={faCalendar} /> Data de Realização
        </Title>
        <Label>2021-01-20</Label>
      </FilmSection>
      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faUser} /> Personagem
        </Title>
        <List>
          <Item>
            <LabelContent>
              <FontAwesomeIcon icon={faUser} /> Luke SkyWalker
            </LabelContent>
          </Item>
          <Item>
            <LabelContent>
              <FontAwesomeIcon icon={faUser} /> Luke SkyWalker
            </LabelContent>
          </Item>
        </List>
      </FilmSection>

      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faCar} /> Veiculos
        </Title>
        <List>
          <Item>
            <LabelContent>
              <FontAwesomeIcon icon={faCar} /> Mercedes Benz
            </LabelContent>
          </Item>
          <Item>
            <LabelContent>
              <FontAwesomeIcon icon={faCar} /> Mercedes Benz
            </LabelContent>
          </Item>
        </List>
      </FilmSection>

      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faShip} /> StarShips
        </Title>
        <List>
          <Item>
            <LabelContent>
              <FontAwesomeIcon icon={faShip} /> Jato X-200
            </LabelContent>
          </Item>
          <Item>
            <LabelContent>
              <FontAwesomeIcon icon={faShip} /> Jato X-200
            </LabelContent>
          </Item>
        </List>
      </FilmSection>
    </>
  );
};

export default Film;
