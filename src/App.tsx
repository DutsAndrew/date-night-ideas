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
          <button onClick={() => handleUserSelection('none')}>Back</button>
          <DateNightSelector 
            handleUserSelection={handleUserSelection}
          />
        </>
      );
    } else if (dateType === 'auto') {
      return (
        <>
          <button onClick={() => handleUserSelection('none')}>Back</button>
          <DateRandomizer />
        </>
      );
    } else {
      return (
        <>
          <h1>
            Choose Your Own Date Night
          </h1>
          <FallingHearts />
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
