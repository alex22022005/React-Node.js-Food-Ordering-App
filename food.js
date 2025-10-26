// routes/food.js

const express = require('express');
const router = express.Router();

// Sample data for food items
let foodItems = [
  { id: 1, name: 'Pizza', category: 'Italian' },
  { id: 2, name: 'Sushi', category: 'Japanese' },
  { id: 3, name: 'Tacos', category: 'Mexican' },
];

// Get all food items
router.get('/', (req, res) => {
  res.json(foodItems);
});

module.exports = router;
