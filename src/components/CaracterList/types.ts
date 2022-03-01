import { Person } from "../../@types";
export type Props = {
  data: Person[];
  showFavorite?: boolean;
  isFavorite?: boolean;
  toogleFavorite?(id?: string): void;
  onClick?(data?: Person): void;
};
