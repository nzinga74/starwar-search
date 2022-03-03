import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faCar, faShip } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

import { Person } from "../../@types";
import { storageKey } from "../../constants";
import CaracterList from "../../components/CaracterList";
import { CharacterSection, List, Item, LabelContent, Title } from "./styled";
import { getAllData } from "../../services/gets";
import { globalAnimation } from "../../animation";

const CharacterDetails: React.FC = () => {
  const navegate = useNavigate();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [sharedData, setSharedData] = useState<Person>({} as Person);
  const [vehicles, setVehicles] = useState<any>([]);
  const [starShips, setStarShips] = useState<any>([]);
  const [films, setFilms] = useState<any>([]);
  const locate = useLocation();
  const navigate = useNavigate();

  const toogleFavorite = () => {
    if (!favorite == true) {
      saveFavorite();
    } else {
      excludeFavorite();
    }
    setFavorite(!favorite);
  };

  const findPerson = (data: Person[], url: string) => {
    const index = data.findIndex((person) => person.url === url);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const getFavoritePeople = () => {
    const data = locate.state as Person;
    let storage = localStorage.getItem(storageKey);
    if (storage !== null && data.url !== undefined) {
      const storagePeople = JSON.parse(storage);
      setFavorite(findPerson(storagePeople, data?.url));
    }
  };

  const excludeFavorite = () => {
    let storage = localStorage.getItem(storageKey);
    const storagePeople: Array<Person> =
      storage !== null ? JSON.parse(storage) : [];
    let store = storagePeople.filter((t) => t.url !== sharedData.url);
    localStorage.setItem(storageKey, JSON.stringify(store));
  };

  const saveFavorite = () => {
    let storage = localStorage.getItem(storageKey);
    const storagePeople: Array<Person> =
      storage !== null ? JSON.parse(storage) : [];
    if (findPerson(storagePeople, sharedData?.url)) return;
    const store = [...storagePeople, sharedData];
    localStorage.setItem(storageKey, JSON.stringify(store));
  };
  const getDetails = async () => {
    const data = locate?.state as Person;
    setSharedData(data);
    const filmsData: any = await getAllData(data?.films);
    const vehiclesData: any = await getAllData(data?.vehicles);
    const starshipsData: any = await getAllData(data?.starships);
    setFilms(filmsData);
    setVehicles(vehiclesData);
    setStarShips(starshipsData);
  };
  useEffect(() => {
    getDetails();
    getFavoritePeople();
  }, []);
  const navigation = (data: any, url: string) => {
    if (data === undefined) return;
    navigate(url, { state: data });
  };

  return (
    <>
      <CaracterList
        data={[sharedData]}
        showFavorite={true}
        isFavorite={favorite}
        toogleFavorite={toogleFavorite}
      />
      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 1.6 }}
      >
        <Title>Filmes</Title>

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
      </CharacterSection>

      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 2.6 }}
      >
        <Title>Veiculos</Title>
        <List>
          {vehicles?.map((item: any, index: number) => (
            <Item onClick={() => navigation(item?.data, "/vehicles")}>
              <LabelContent>
                <FontAwesomeIcon icon={faCar} />
                {` ${item?.data?.name}`}
              </LabelContent>
            </Item>
          ))}
        </List>
      </CharacterSection>
      <CharacterSection
        variants={globalAnimation}
        animate="animate"
        initial="initial"
        transition={{ duration: 1, delay: 3.6 }}
      >
        <Title>StarShips</Title>
        <List>
          {starShips?.map((item: any, index: number) => (
            <Item onClick={() => navigation(item?.data, "/starships")}>
              <LabelContent>
                <FontAwesomeIcon icon={faShip} />
                {` ${item?.data?.name}`}
              </LabelContent>
            </Item>
          ))}
        </List>
      </CharacterSection>
    </>
  );
};
export default CharacterDetails;
