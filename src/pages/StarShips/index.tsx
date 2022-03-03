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
import { TYpeStarships } from "../../@types";
import { useLocation } from "react-router-dom";
import { getAllData } from "../../services/gets";
import { splitter } from "../../general/function";
import { useNavigate } from "react-router-dom";
const StarShip: React.FC = () => {
  const [starships, setStarShips] = useState<TYpeStarships>();
  const [character, setCharacter] = useState<any>([]);
  const [films, setFilms] = useState<any>([]);
  const locate: any = useLocation();
  const navigate = useNavigate();

  const getStarShip = async () => {
    try {
      const starship: TYpeStarships = locate.state;
      setStarShips(starship);
      const urlPilot = splitter(starship?.pilots);
      const urlFilm = splitter(starship?.films);
      const characterData: any = await getAllData(urlPilot);
      const filmsData: any = await getAllData(starship?.films);
      setCharacter(characterData);
      setFilms(filmsData);
    } catch (err) {
      console.log(err);
    }
  };
  const navigation = (data: any, url: string) => {
    if (data === undefined) return;
    navigate(url, { state: data });
  };

  useEffect(() => {
    getStarShip();
  }, []);
  return (
    <>
      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faFilm} /> Nome
        </Title>
        <Label>{starships?.name}</Label>
        <Title>
          <FontAwesomeIcon icon={faBook} /> Modelo
        </Title>
        <Label>{starships?.model}</Label>
        <Title>
          <FontAwesomeIcon icon={faPerson} /> Peso
        </Title>
        <Label>{starships?.length}</Label>

        <Title>
          <FontAwesomeIcon icon={faCalendar} /> Classe do Veiculo
        </Title>
        <Label>{starships?.starship_class}</Label>
      </FilmSection>
      <FilmSection>
        <Title>
          <FontAwesomeIcon icon={faUser} /> Personagem
        </Title>
        <List>
          {character?.map((item: any, index: number) => (
            <Item>
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
          <FontAwesomeIcon icon={faFilm} /> Filmes
        </Title>
        <List>
          {films?.map((item: any, index: number) => (
            <Item onClick={() => navigation(item?.data?.url, "/films")}>
              <LabelContent>
                <FontAwesomeIcon icon={faFilm} />
                {` ${item?.data?.title}`}
              </LabelContent>
            </Item>
          ))}
        </List>
      </FilmSection>
    </>
  );
};

export default StarShip;
