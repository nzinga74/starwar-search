import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { IVehicles } from "../../@types";
import { useAppDispatch } from "../../store/hooks";
import { addVehicle } from "../../store/reducers/vehicleSlice";
import { Item, LabelContent, List } from "./styled";

interface IVehicleList {
  vehicles: IVehicles[];
}
const VehicleList = ({ vehicles }: IVehicleList) => {
  const dispatch = useAppDispatch();
  return (
    <List>
      {vehicles?.map((vehicle, index: number) => (
        <Link to={"/vehicles"}>
          <Item
            key={`vehicle_${index}`}
            onClick={() => dispatch(addVehicle(vehicle))}
          >
            <LabelContent>
              <FontAwesomeIcon icon={faCar} />
              {` ${vehicle?.name}`}
            </LabelContent>
          </Item>
        </Link>
      ))}
    </List>
  );
};

export default VehicleList;
