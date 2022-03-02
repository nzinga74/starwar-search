import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faCar, faShip } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

import { Person } from "../../@types";
import { storageKey } from "../../constants";
import CaracterList from "../../components/CaracterList";
import {
  CharacterSection,
  ListFilm,
  ItemFilm,
  LabelContent,
  Title,
} from "./styled";

const CharacterDetails: React.FC = () => {
  const navegate = useNavigate();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [sharedData, setSharedData] = useState<Person>({} as Person);
  const locate = useLocation();

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

  useEffect(() => {
    setSharedData(locate?.state as Person);
    getFavoritePeople();
  }, []);

  return (
    <>
      <CaracterList
        data={[sharedData]}
        showFavorite={true}
        isFavorite={favorite}
        toogleFavorite={toogleFavorite}
      />
      <CharacterSection>
        <Title>Filmes</Title>

        <ListFilm>
          {sharedData?.films?.map((movie, index) => (
            <ItemFilm
              key={`__film__${index}`}
              onClick={() => navegate("/films", { state: movie })}
            >
              <LabelContent>
                <FontAwesomeIcon icon={faFilm} />
                {` Filme # ${++index}`}
              </LabelContent>
            </ItemFilm>
          ))}
        </ListFilm>
      </CharacterSection>

      <CharacterSection>
        <Title>Veiculos</Title>
        <ListFilm>
          {sharedData?.vehicles?.map((vehicle, index) => (
            <ItemFilm
              key={`__veh__${index}`}
              onClick={() => navegate("/vehicles")}
            >
              <LabelContent>
                <FontAwesomeIcon icon={faCar} />
                {` Veiculos # ${++index}`}
              </LabelContent>
            </ItemFilm>
          ))}
        </ListFilm>
      </CharacterSection>
      <CharacterSection>
        <Title>StarShips</Title>
        <ListFilm>
          {sharedData?.starships?.map((starship, index) => (
            <ItemFilm
              key={`__star__${index}`}
              onClick={() => navegate("/starships")}
            >
              <LabelContent>
                <FontAwesomeIcon icon={faShip} />
                {` StarShips # ${++index}`}
              </LabelContent>
            </ItemFilm>
          ))}
        </ListFilm>
      </CharacterSection>
    </>
  );
};
export default CharacterDetails;
