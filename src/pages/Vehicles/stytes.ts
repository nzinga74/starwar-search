import { motion } from "framer-motion";
import styled from "styled-components";

export const FilmSection = styled(motion.div)`
  width: 100%;
  height: auto;
  background: white;
  border-radius: 8px;
  padding: 25px 30px;
  margin-top: 8px;
  box-shadow: rgb(18 30 52 / 7%) 0px 1px 1px;
`;
export const Title = styled.label`
  color: #444;
  font-size: 15px;
  display: block;
  font-weight: bold;
  margin-top: 20px;
`;
export const Label = styled.label`
  color: #444;
  font-size: 14px;
  display: block;
  margin-top: 10px;
  font-weight: 300;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const LabelContent = styled.label`
  color: #444;
  font-size: 16px;
  font-weight: 300;
  display: block;
  margin-top: 18px;
  background-color: #ccc;
  padding: 10px;
  border-radius: 10px;
  transition: all 1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #3960e4;
  }
`;
