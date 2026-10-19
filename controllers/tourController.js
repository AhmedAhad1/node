const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const allTours = await Tour.find();

    res.status(200).json({
      status: 'success',
      data: {
        tours: allTours,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).send({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).send({
    message: 'patched',
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).send({
    status: 'success',
    data: null,
  });
};
