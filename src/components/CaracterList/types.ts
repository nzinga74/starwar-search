import { Person } from "../../@types";
export type Props = {
  data: Person[];
  showFavorite?: boolean;
  isFavorite?: boolean;
  toogleFavorite?(url?: string): void;
  onClick?(data?: Person): void;
};
