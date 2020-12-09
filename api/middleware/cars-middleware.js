const Cars = require('../cars/cars-model');

const validateId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Cars.getById(id);
    if (!car) {
      res.status(404).json({ message: `Car with id ${id} not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const validateCar = async (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: `missing user data` });
  } else if (!req.body.VIN | !req.body.Make | !req.body.Model | !req.body.Mileage ) {
    res.status(400).json({ message: `Missing one or more required fields (VIN, Make, Model, Mileage)` });
  } else {
    next();
  }
};

module.exports = {
  validateId,
  validateCar
}