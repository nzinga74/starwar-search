import React from "react";
import {
  SearcherSection,
  Label,
  SearchLeft,
  SearchRight,
  SearchView,
  InputSearch,
  ButtonSearch,
  ObsInfo,
} from "./styles";
const Searcher: React.FC = () => {
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
          />
        </SearchLeft>
        <SearchRight>
          <ButtonSearch>PESQUISAR</ButtonSearch>
        </SearchRight>
      </SearchView>
      <ObsInfo>
        Pesquise somente personagem de *starwar, não temos cobertura para outros
        filmes
      </ObsInfo>
    </SearcherSection>
  );
};
export default Searcher;
