export type Person = {
  id?: string;
  name: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
};

export type TypeFilms = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
};
