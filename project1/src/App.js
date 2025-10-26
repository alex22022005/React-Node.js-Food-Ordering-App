import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddFoodPage from './AddFoodPage';
import FoodDisplayPage from './FoodDisplayPage';

function App() {
  const [foods, setFoods] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const handleFoodAdded = (foodName, price) => {
    const newFoodItem = { name: foodName, price: price };
    setFoods([...foods, newFoodItem]);
  };

  const handleOrder = (food) => {
    setOrderItems([...orderItems, food]);
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Food Management System</h1>
          <nav>
            <ul>
              <li>
                <Link style={{color:"white"}} to="/">Add Food</Link>
              </li>
              <li>
                <Link style={{color:"white"}} to="/fooddisplay">Food Display</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main><center>
          <Routes>
            <Route path="/" element={<AddFoodPage onFoodAdded={handleFoodAdded} />} />
            <Route path="/fooddisplay" element={<FoodDisplayPage foods={foods} onOrder={handleOrder} />} />
          </Routes></center>
          <div className="order-summary">
            <h2>Ordered Items</h2>
            <button onClick={handleClearOrder}>Clear Ordered Items</button>
            <ul>
              {orderItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
            <div className="total-price">
              <strong>Total Price:</strong> ₹{orderItems.reduce((total, item) => total + item.price, 0)}
            </div>
          </div>
        </main>
        <footer>
          <p>&copy; 2024 Food Management System</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
