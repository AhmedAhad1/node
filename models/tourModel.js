const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  price: Number,
  rating: Number,
});

const Tour = new mongoose.model('tour', TourSchema);

module.exports = Tour;
