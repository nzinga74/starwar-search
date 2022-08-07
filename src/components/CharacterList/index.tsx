import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ICharacter } from "../../@types";
import { useAppDispatch } from "../../store/hooks";
import { addCharacter } from "../../store/reducers/characterSlice";
import { Item, LabelContent, List } from "./styled";

interface ICharacterList {
  characters: ICharacter[];
}

const CharacterList = ({ characters }: ICharacterList) => {
  const dispatch = useAppDispatch();
  return (
    <List>
      {characters?.map((character, index: number) => (
        <Link to={"/person"}>
          <Item
            key={`character_${index}`}
            onClick={() => dispatch(addCharacter(character))}
          >
            <LabelContent>
              <FontAwesomeIcon icon={faUser} />
              {` ${character?.name}`}
            </LabelContent>
          </Item>
        </Link>
      ))}
    </List>
  );
};
export default CharacterList;
