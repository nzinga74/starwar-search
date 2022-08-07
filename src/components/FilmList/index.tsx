import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { addFilm } from "../../store/reducers/filmSlice";
import { Item, LabelContent, List } from "./styled";
import { IFilms } from "../../@types";

interface IFilmList {
  films: IFilms[];
}
const FilmList = ({ films }: IFilmList) => {
  const dispatch = useAppDispatch();
  return (
    <List>
      {films?.map((film, index: number) => (
        <Link to={"/films"}>
          <Item key={`film_${index}`} onClick={() => dispatch(addFilm(film))}>
            <LabelContent>
              <FontAwesomeIcon icon={faFilm} />
              {` ${film?.title}`}
            </LabelContent>
          </Item>
        </Link>
      ))}
    </List>
  );
};
export default FilmList;
