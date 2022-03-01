import React from "react";
import { Header, Body, Column, HeadLine, Line, TableSection } from "./styles";
const Table: React.FC = () => {
  const data = [
    {
      name: "Vingadores",
      description:
        "dolor sit amet consectetur adipisicing elit. Odit nisi quasi deleniti quis q",
      livro: "comiccon",
      createdAt: "2021-2-2",
    },
    {
      name: "Vingadores",
      description:
        "dolor sit amet consectetur adipisicing elit. Odit nisi quasi deleniti quis q",
      livro: "comiccon",
      createdAt: "2021-2-2",
    },
    {
      name: "Vingadores",
      description:
        "dolor sit amet consectetur adipisicing elit. Odit nisi quasi deleniti quis q",
      livro: "comiccon",
      createdAt: "2021-2-2",
    },
    {
      name: "Vingadores",
      description:
        "dolor sit amet consectetur adipisicing elit. Odit nisi quasi deleniti quis q",
      livro: "comiccon",
      createdAt: "2021-2-2",
    },
  ];
  return (
    <TableSection>
      <Header>
        <Line>
          <HeadLine>Filme</HeadLine>
          <HeadLine>Descrição</HeadLine>
          <HeadLine>Livro</HeadLine>
          <HeadLine>Data de Criação </HeadLine>
        </Line>
      </Header>
      <Body>
        {data.map((item) => (
          <Line>
            <Column>{item?.name}</Column>
            <Column>{item?.description}</Column>
            <Column>{item?.livro}</Column>
            <Column>{item?.createdAt}</Column>
          </Line>
        ))}
      </Body>
    </TableSection>
  );
};
export default Table;
