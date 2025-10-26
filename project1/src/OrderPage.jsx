import React from 'react';

function OrderPage({ foods, onOrder }) {
  // Calculate total price
  const totalPrice = foods.reduce((total, food) => total + food.price, 0);

  return (
    <div className="page">
      <h2>Order Page</h2>
      <div className="order-summary">
        <h3>Ordered Items:</h3>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
              {food.name} - ₹{food.price}
              <button onClick={() => onOrder(food)}>Order</button>
            </li>
          ))}
        </ul>
        <div className="total-price">
          <strong>Total Price:</strong> ₹{totalPrice}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
