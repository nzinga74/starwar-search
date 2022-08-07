import styled from "styled-components";
import { motion } from "framer-motion";
export const CaracterSection = styled(motion.div)`
  width: 100%;
  height: auto;
  background: white;
  border-radius: 8px;
  padding: 6px 20px;
  margin-top: 8px;
  box-shadow: rgb(18 30 52 / 7%) 0px 1px 1px;
`;
export const CaracterView = styled.div`
  width: 100%;
  display: flex;
  margin-top: 18px;
  margin-bottom: 8px;
`;
export const AvatarView = styled.div`
  width: 10%;
  height: auto;
`;
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #ccc;
`;
export const ContentView = styled.div`
  width: 85%;
  height: auto;
`;
export const FavouriteView = styled.div`
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;
export const Label = styled.label`
  color: #444;
  font-size: 10px;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const LabelContent = styled.label`
  color: #444;
  font-size: 16px;
  font-weight: 300;
  display: block;
  margin-top: 18px;
`;
export const ListInfo = styled.ul`
  display: flex;
  list-style: none;
`;

export const ItemInfo = styled.li`
  margin-right: 40px;
`;
