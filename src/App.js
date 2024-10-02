import { useState } from 'react';
import './App.css';
import Component from './components/RentOperations.js';

function App() {
  const [days, setDays] = useState(0);
  const [option, setOption] = useState("Hotel");

  const selectHotelCar = (e) => {
    setOption(e.target.value);
  }

  const typeDays = (e) => {
    setDays(e.target.value);
  }

  return (
    <div>
      <select onChange={selectHotelCar}>
        <option value="Hotel">Hotel</option>
        <option value="Car">Car</option>
      </select>

      <input type='text' onChange={typeDays} placeholder='Insert days amount' />

      {option === "Hotel" && <Component option={1} days={days} />}
      {option === "Car" && <Component option={2} days={days} />}
    </div>
  );
}

export default App;
