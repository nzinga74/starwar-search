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
import { Person, TypeFilms } from "../../@types";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllData } from "../../services/gets";

const Film: React.FC = () => {
  const [films, setFilms] = useState<TypeFilms>({} as TypeFilms);
  const [character, setCharacter] = useState<any>([]);
  const [vehicles, setVehicles] = useState<any>([]);
  const [starShips, setStarShips] = useState<any>([]);
  const locate = useLocation();
  const navigate = useNavigate();

  const gerFilms = async () => {
    try {
      const url = locate.state as string;
      const response = await axios.get(url);
      if (response.status === 200) {
        setFilms(response?.data);
        const characterData: any = await getAllData(response?.data?.characters);
        const vehiclesData: any = await getAllData(response?.data?.vehicles);
        const starshipsData: any = await getAllData(response?.data?.starships);
        setCharacter(characterData);
        setVehicles(vehiclesData);
        setStarShips(starshipsData);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const navigation = (data: any, url: string) => {
    if (data === undefined) return;
    navigate(url, { state: data });
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
          {character?.map((item: any, index: number) => (
            <Item onClick={() => navigation(item?.data, "/person")}>
              <LabelContent>
                <FontAwesomeIcon icon={faUser} />
                {` ${item?.data?.name}`}
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
          {vehicles?.map((item: any, index: number) => (
            <Item onClick={() => navigation(item?.data, "/vehicles")}>
              <LabelContent>
                <FontAwesomeIcon icon={faUser} />
                {` ${item?.data?.name}`}
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
          {starShips?.map((item: any, index: number) => (
            <Item>
              <LabelContent>
                <FontAwesomeIcon icon={faUser} />
                {` ${item?.data?.name}`}
              </LabelContent>
            </Item>
          ))}
        </List>
      </FilmSection>
    </>
  );
};

export default Film;
