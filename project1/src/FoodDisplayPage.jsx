import React from 'react';

function FoodDisplayPage({ foods, onOrder }) {
  return (
    <div className="page">
      <h2>Food Display Page</h2>
      <div className="food-list">
        {foods.map((food, index) => (
          <div key={index} className="food-item">
            <h3>{food.name}</h3>
            <p>Price: ₹{food.price}</p>
            <button style={{backgroundColor:"#2aab4a"}}  onClick={() => onOrder(food)}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodDisplayPage;
