import React, { FC } from "react";
import { DateNightOptionProps } from "../types/typeList";

const DateNightOptions:FC<DateNightOptionProps> = (props): JSX.Element => {

  const { handleUserSelection } = props;

  return (
    <>
      <button onClick={() => handleUserSelection('auto')}>
        Pick for me!
      </button>
      <button onClick={() => handleUserSelection('self')}>
        I'll pick!
      </button>
    </>
  )
};

export default DateNightOptions;