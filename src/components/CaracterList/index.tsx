import React from "react";
import {
  CaracterView,
  CaracterSection,
  AvatarView,
  Avatar,
  ContentView,
  Label,
  LabelContent,
  ItemInfo,
  ListInfo,
  FavouriteView,
} from "./styled";
import AvatarImage from "../../assets/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGenderless,
  faEarth,
  faBalanceScale,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Props } from "./types";
import { caracterAnimation } from "../../animation";
const CaracterList: React.FC<Props> = ({
  data,
  showFavorite,
  isFavorite,
  toogleFavorite = () => {},
  onClick = () => {},
}) => {
  return (
    <>
      {data?.map((person, index) => (
        <CaracterSection
          variants={caracterAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 1 * ++index }}
          key={index}
          onClick={() => onClick(person)}
        >
          <CaracterView>
            <AvatarView>
              <Avatar src={AvatarImage} />
            </AvatarView>
            <ContentView>
              <ListInfo>
                <ItemInfo>
                  <Label>
                    <FontAwesomeIcon icon={faUser} /> Nome Completo
                  </Label>
                  <LabelContent>{person?.name}</LabelContent>
                </ItemInfo>
                <ItemInfo>
                  <Label>
                    <FontAwesomeIcon icon={faGenderless} /> {"  "}
                    Sexo
                  </Label>
                  <LabelContent>{person?.gender}</LabelContent>
                </ItemInfo>

                <ItemInfo>
                  <Label>
                    {" "}
                    <FontAwesomeIcon icon={faEarth} /> {"  "}Ano de Nascimento
                  </Label>
                  <LabelContent>{person?.birth_year}</LabelContent>
                </ItemInfo>
                <ItemInfo>
                  <Label>
                    <FontAwesomeIcon icon={faBalanceScale} /> {"  "}Peso
                  </Label>
                  <LabelContent>{person?.height}</LabelContent>
                </ItemInfo>

                <ItemInfo>
                  <Label>
                    {" "}
                    <FontAwesomeIcon icon={faUser} /> Massa
                  </Label>
                  <LabelContent>{person?.mass}</LabelContent>
                </ItemInfo>

                <ItemInfo>
                  <Label>
                    {" "}
                    <FontAwesomeIcon icon={faUser} /> Cor da Pele
                  </Label>
                  <LabelContent>{person?.skin_color}</LabelContent>
                </ItemInfo>
              </ListInfo>
            </ContentView>
            {showFavorite && (
              <FavouriteView>
                <FontAwesomeIcon
                  icon={faStar}
                  color={isFavorite ? "#fcaf3e" : ""}
                  cursor={"pointer"}
                  onClick={() => toogleFavorite(person?.url)}
                />
              </FavouriteView>
            )}
          </CaracterView>
        </CaracterSection>
      ))}
    </>
  );
};

export default CaracterList;
