const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const queryObj = { ...req.query };

    const excludeFields = ['page', 'sort', 'limit', 'fields'];

    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);

    queryStr = JSON.parse(
      queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`),
    );

    // **** app.set('query parser', 'extended');' needs to be used for [gte]

    // 1. regualr query
    let query = Tour.find(queryStr); //1. object paisi 2. shajai nilam 3. shajano data pathailam await diye

    // 2. sorting

    if (req.query.sort) {
      // sorting with 2 or more values
      const sortBy = req.query.sort.split(',').join(' ');

      query = query.sort(sortBy);
    } else {
      // if no sort query params is there we can default something
      query = query.sort('-price');
    }

    if (req.query.limit) {
      const limit = req.query.limit.split(',').join(' ');
      query = query.select(limit);
    } else {
      query = query.select('-__v'); //excluding a field by default
    }

    const allTours = await query;

    // console.log(allTours);

    res.status(200).json({
      status: 'success',
      results: allTours.length,
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

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).send({
      message: 'patched',
      tour,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.updateWholeTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'put method',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    res.status(204).send({
      status: 'deleted',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
