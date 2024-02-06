import React, { FC } from "react";
import { DropDownItemProps } from "../types/typeList";

const DropDownItem:FC<DropDownItemProps> = (props): JSX.Element => {

  const { item } = props;

  return (
    <option value={item}>
      {item}
    </option>
  );
};

export default DropDownItem;