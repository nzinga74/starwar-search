import React, { useEffect, useState } from "react";
import CaracterList from "../../components/CaracterList";
import {
  CharacterSection,
  ListFilm,
  ItemFilm,
  LabelContent,
  Title,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faCar, faShip } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../../data";
import { Person } from "../../@types";
import { storageKey } from "../../constants";
const CharacterDetails: React.FC = () => {
  const navegate = useNavigate();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [per, setPer] = useState<Person>({} as Person);
  const locate = useLocation();

  const toogleFavorite = () => {
    if (!favorite == true) {
      saveFavorite();
    } else {
      excludeFavorite();
    }
    setFavorite(!favorite);
  };

  const findPerson = (data: Person[], id: string) => {
    const index = data.findIndex((person) => person.id === id);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const getFavoritePeople = () => {
    let storage = localStorage.getItem(storageKey);
    if (storage !== null) {
      const storagePeople = JSON.parse(storage);
      setFavorite(findPerson(storagePeople, data[0]?.id));
    }
  };

  const excludeFavorite = () => {
    let storage = localStorage.getItem(storageKey);
    const storagePeople: Array<Person> =
      storage !== null ? JSON.parse(storage) : [];
    let store = storagePeople.filter((t) => t.id !== data[0].id);
    localStorage.setItem(storageKey, JSON.stringify(store));
  };

  const saveFavorite = () => {
    let storage = localStorage.getItem(storageKey);
    const storagePeople: Array<Person> =
      storage !== null ? JSON.parse(storage) : [];
    if (findPerson(storagePeople, data[0].id)) return;
    const store = [...storagePeople, data[0]];
    localStorage.setItem(storageKey, JSON.stringify(store));
  };

  useEffect(() => {
    getFavoritePeople();
  }, []);

  return (
    <>
      <CaracterList
        data={data}
        showFavorite={true}
        isFavorite={favorite}
        toogleFavorite={toogleFavorite}
      />
      <CharacterSection>
        <Title>Filmes</Title>

        <ListFilm>
          {data[0].films.map((movie, index) => (
            <ItemFilm
              key={`__film__${index}`}
              onClick={() => navegate("/films")}
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
          {data[0].vehicles.map((vehicle, index) => (
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
          {data[0].starships.map((starship, index) => (
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
