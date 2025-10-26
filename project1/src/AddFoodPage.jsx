import React, { useState } from 'react';

function AddFoodPage({ onFoodAdded }) {
  const [newFood, setNewFood] = useState('');
  const [price, setPrice] = useState('');

  const handleAddFood = () => {
    if (newFood.trim() !== '' && price.trim() !== '') {
      onFoodAdded(newFood.trim(), parseFloat(price));
      setNewFood('');
      setPrice('');
    }
  };

  return (
    <div className="page">
      <h2>Add Food</h2>
      <input
        type="text"
        value={newFood}
        onChange={(e) => setNewFood(e.target.value)}
        placeholder="Enter food name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      />
      <button style={{backgroundColor:"#2aab4a"}} onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default AddFoodPage;
