import React, { useState } from 'react'
import './styles/App.css';
import DateNightOptions from './components/DateNightOptions';
import DateNightSelector from './components/DateNightSelector';
import DateRandomizer from './components/DateRandomizer';
import FallingHearts from './components/FallingHearts';

function App() {

  const [dateType, setDateType] = useState<'none' | 'self' | 'auto'>('none');

  const handleUserSelection = (selection: 'self' | 'auto' | 'none') => {
    setDateType(selection);
  };

  const renderComponents = () => {
    if (dateType === 'self') {
      return (
        <>
          <button 
            className='backButton'
            onClick={() => handleUserSelection('none')}>
              Back
          </button>
          <FallingHearts 
            heartAmount={5}
            startDelay={10}
            fallDuration={30}
          />
          <DateNightSelector />
        </>
      );
    } else if (dateType === 'auto') {
      return (
        <>
          <button 
            className='backButton'
            onClick={() => handleUserSelection('none')}>
              Back
          </button>
          <FallingHearts 
            heartAmount={5}
            startDelay={10}
            fallDuration={30}
          />
          <DateRandomizer />
        </>
      );
    } else {
      return (
        <>
          <h1 className='titleText'>
            Choose Your Own Date Night
          </h1>
          <FallingHearts 
            heartAmount={25}
            startDelay={5}
            fallDuration={8}
          />
          <DateNightOptions 
            handleUserSelection={handleUserSelection}
          />
        </>
      );
    }
  };

  return (
    <>
      {renderComponents()}
    </>
  );
}

export default App;
