import { motion } from "framer-motion";
import styled from "styled-components";

export const CharacterSection = styled(motion.section)`
  background-color: white;
  padding: 26px 60px;
  margin-top: 20px;
  border-radius: 8px;
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
export const Title = styled.h2`
  font-size: 20px;
  color: #444;
  font-weight: 300;
`;
