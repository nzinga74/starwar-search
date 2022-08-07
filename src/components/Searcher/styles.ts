import styled from "styled-components";
import { motion } from "framer-motion";
export const SearcherSection = styled(motion.div)`
  width: 100%;
  height: 250px;
  background: white;
  border-radius: 8px;
  padding: 50px;
`;
export const Label = styled.label`
  color: #444;
  font-size: 15px;
  font-weight: bold;
`;

export const SearchView = styled.div`
  width: 100%;
  display: flex;
  margin-top: 18px;
  margin-bottom: 8px;
  box-shadow: rgb(18 30 52 / 7%) 0px 1px 1px;
`;
export const SearchLeft = styled.div`
  width: 80%;
  @media (max-width: 1000px) {
    width: 50%;
  }
`;
export const SearchRight = styled.div`
  width: 20%;
  @media (max-width: 1000px) {
    width: 50%;
  }
`;
export const InputSearch = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  outline: none;
`;

export const ButtonSearch = styled.button`
  width: 80%;
  background-color: #43d094;
  color: white;
  padding: 20px;
  margin-left: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  border: 0px;
  cursor: pointer;
`;

export const ObsInfo = styled.label`
  font-size: 14px;
  color: #444;
`;
export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
