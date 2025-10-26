// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch('/api/food')
      .then(res => res.json())
      .then(data => setFoodItems(data))
      .catch(error => console.error('Error fetching food items:', error));
  }, []);

  return (
    <div className="App">
      <h1>Food Management Company</h1>
      <h2>Food Items</h2>
      <ul>
        {foodItems.map(food => (
          <li key={food.id}>{food.name} - {food.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
