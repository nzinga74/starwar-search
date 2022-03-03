import React, { useEffect, useState } from "react";
import CaracterList from "../../components/CaracterList";
import Searcher from "../../components/Searcher";
import { api } from "../../services";
import { Person } from "../../@types";
import { Title } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { storageKey } from "../../constants";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [people, setPleope] = useState<Person[]>([]);
  const [favPeople, setFavPleope] = useState<Person[]>([]);

  const navigate = useNavigate();

  const getPerson = async (name: string) => {
    setLoading(true);
    try {
      const response = await api.get(`/people/?search=${name}`);
      if (response.status === 200) {
        setPleope(response?.data?.results);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  const getFavoritePeople = () => {
    let storage = localStorage.getItem(storageKey);
    if (storage !== null) {
      const storagePeople = JSON.parse(storage);
      setFavPleope(storagePeople);
    }
  };

  const excludeFavorite = (url: string | undefined) => {
    if (url === undefined) return;
    let store = favPeople.filter((t) => t.url !== url);
    setFavPleope(store);
  };

  const navigation = (data: Person | undefined) => {
    if (data === undefined) return;
    navigate("/person", { state: data });
  };

  useEffect(() => {
    getFavoritePeople();
  }, []);
  return (
    <>
      <Searcher onSearch={(name) => getPerson(name)} isLoading={loading} />
      <CaracterList data={people} onClick={(data) => navigation(data)} />
      <Title>
        <FontAwesomeIcon icon={faHeart} /> Favoritos
      </Title>
      <CaracterList
        data={favPeople}
        isFavorite={true}
        showFavorite={true}
        toogleFavorite={(url) => excludeFavorite(url)}
        onClick={(data) => navigation(data)}
      />
    </>
  );
};

export default Home;
