import React, { FC } from "react";
import { DateNightOptionProps } from "../types/typeList";

const DateNightOptions:FC<DateNightOptionProps> = (props): JSX.Element => {

  const { handleUserSelection } = props;

  return (
    <div className="buttonSelectorContainer">
      <button 
        className="buttonSelector"
        onClick={() => handleUserSelection('auto')}
      >
        Pick for me!
      </button>
      <button 
        className="buttonSelector"
        onClick={() => handleUserSelection('self')}
      >
        I'll pick!
      </button>
    </div>
  )
};

export default DateNightOptions;