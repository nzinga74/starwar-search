import React, { useState } from "react";
import {
  SearcherSection,
  Label,
  SearchLeft,
  SearchRight,
  SearchView,
  InputSearch,
  ButtonSearch,
  ObsInfo,
  Loader,
} from "./styles";
import { Props } from "./types";
import Loading from "../Loading";
const Searcher: React.FC<Props> = ({ onSearch, isLoading }) => {
  const [text, setText] = useState<string>("");
  return (
    <SearcherSection
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Label>Nome do Personagem</Label>
      <SearchView>
        <SearchLeft>
          <InputSearch
            required
            type="text"
            placeholder="Exemplo: Luke SkyWalker"
            onChange={(e) => setText(e.target.value)}
          />
        </SearchLeft>
        <SearchRight>
          <ButtonSearch onClick={() => onSearch(text)}>PESQUISAR</ButtonSearch>
        </SearchRight>
      </SearchView>
      <ObsInfo>
        Pesquise somente personagem de *starwar, não temos cobertura para outros
        filmes
      </ObsInfo>

      {isLoading && (
        <Loader>
          <Loading />
        </Loader>
      )}
    </SearcherSection>
  );
};
export default Searcher;
