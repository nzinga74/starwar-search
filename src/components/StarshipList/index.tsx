import { faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IStarships } from "../../@types";
import { useAppDispatch } from "../../store/hooks";
import { addStarship } from "../../store/reducers/starshipSlice";

import { Item, LabelContent, List } from "./styled";

interface IStarshipList {
  startships: IStarships[];
}
const StarshipList = ({ startships }: IStarshipList) => {
  const dispatch = useAppDispatch();
  return (
    <List>
      {startships?.map((starShip, index: number) => (
        <Link to={"/starships"}>
          <Item onClick={() => dispatch(addStarship(starShip))}>
            <LabelContent>
              <FontAwesomeIcon icon={faShip} />
              {` ${starShip?.name}`}
            </LabelContent>
          </Item>
        </Link>
      ))}
    </List>
  );
};
export default StarshipList;
