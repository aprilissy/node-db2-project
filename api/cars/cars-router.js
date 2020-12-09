const express = require('express');
const Cars = require('./cars-model');
const { validateId, validateCar } = require('../middleware/cars-middleware');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cars = await Cars.getAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json( {message: error.message });
  }
});
router.get('/:id', validateId, async (req, res) => {
  try {
    res.status(200).json(req.car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', validateCar, async (req, res) => {
  try {    
    const car = req.body;
    const data = await Cars.create(car);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;