const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   results: tourData.length,
  //   requestedTime: req.requestedTime,
  //   data: { tours: tourData },
  // });
};

exports.getTour = (req, res) => {
  // const id = Number(req.params.id);
  // const element = tourData.find((el) => el.id === id);
  // res.status(200).send({
  //   status: 'success',
  //   data: {
  //     tour: element,
  //   },
  // });
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
