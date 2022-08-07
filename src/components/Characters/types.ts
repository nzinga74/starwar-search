import { ICharacter } from "../../@types";
export type Props = {
  data: ICharacter[];
  showFavorite?: boolean;
  isFavorite?: boolean;
  toogleFavorite?(url?: string): void;
  onClick?(data: ICharacter): void;
};
