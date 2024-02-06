import React, { FC } from "react";
import { DropDownProps } from "../types/typeList";
import DropDownItem from "./DropDownItem";

const DropDown:FC<DropDownProps> = (props): JSX.Element => {

  const { 
    title, 
    list, 
    handleUserLocationSelection, 
    handleUserEventSelection,
  } = props;

  return (
    <>
      <h2>
        {title}
      </h2>
      <select onChange={(e) => {
        if (title === 'location') handleUserLocationSelection!(e.target.value);
        if (title === 'event') handleUserEventSelection!(e.target.value)
      }}>
        <option value={'none'}>{title === 'location' ? 'Select a Location' : 'Select a Date'}</option>
        {list.map((item) => {
          return <DropDownItem 
            item={item}
          />
        })}
      </select>
    </>
  );
};

export default DropDown;