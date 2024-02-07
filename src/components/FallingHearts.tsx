import React, { FC } from "react";
import '../styles/fallingHearts.css';
import heart from '../assets/cards-heart.svg';
import { FallingHeartProps } from "../types/typeList";

const FallingHearts:FC<FallingHeartProps> = (props): JSX.Element => {

  const { heartAmount, startDelay, fallDuration } = props;

  const generateHearts = () => {
    return [...Array(heartAmount)].map((_, index) => {
      const delay = Math.random() * startDelay; // Random delay between 0 and 5 seconds
      const duration = 10 + Math.random() * fallDuration; // Random duration between 10 and 20 seconds

      return (
        <div 
          key={index} 
          className="falling-heart-container" 
          style={{ 
            animationDelay: `${delay}s`, 
            animationDuration: `${duration}s`,
            left: `${(Math.random() * 100) + 'vw'}`,
          }}
        >
          <img 
            src={heart} 
            style={{
              filter: 'invert(19%) sepia(90%) saturate(6659%) hue-rotate(299deg) brightness(119%) contrast(111%)',
            }}
            alt={`Falling Heart ${index + 1}`} 
            className="falling-heart" 
          />
        </div>
      );
    });
  };

  return <div className="falling-hearts-container">{generateHearts()}</div>;
};

export default FallingHearts;
