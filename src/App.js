import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import { cityData } from './models/cityData';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);
  const [ currentCard, setCurrentCard ] = useState(cityData[count]);


  const moveForward = () => {
    setCount(prev => (prev + 1) % cityData.length);
    console.log(count, ' after update');

    setCurrentCard(cityData[count]);
    console.log(cityData[count], ' index of cityData')
  };

  const moveBackward = () => {
    setCount(prev => (prev - 1 + cityData.length) % cityData.length);
    console.log(count, ' count after update');

    setCurrentCard(cityData[count]);
    console.log(cityData[count], ' index of cityData');
  };

    return (
   <div className='App'>
    <div className='header'>
      <h2>Saint Petersburg</h2>
    </div>
      <div className='card-container'>
          <Card className="card-element" name={currentCard.name} picture={currentCard.picture} info={currentCard.info} />
      </div>

      <div className='all-buttons-container'>
        <Button action={moveBackward} type="<" />
        <Button action={moveForward} type=">" />
      </div>
   </div>
    )
};

export default App;
