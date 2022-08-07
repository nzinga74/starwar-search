import React, { useEffect, useState } from "react";
import Characters from "../../components/Characters";
import Searcher from "../../components/Searcher";
import { api } from "../../services";
import { ICharacter } from "../../@types";
import { Title } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addCharacter } from "../../store/reducers/characterSlice";
import { useAppDispatch } from "../../store/hooks";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [people, setPleope] = useState<ICharacter[]>([]);

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

  const dispatch = useAppDispatch();

  return (
    <>
      <Searcher onSearch={(name) => getPerson(name)} isLoading={loading} />
      <Link to={"/person"}>
        <Characters
          data={people}
          onClick={(data) => {
            dispatch(addCharacter(data));
          }}
        />
      </Link>
      <Title>
        <FontAwesomeIcon icon={faHeart} /> Favoritos
      </Title>
    </>
  );
};

export default Home;
