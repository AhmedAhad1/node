const mongoose = require('mongoose');
// u can use new keyword if u want const TourSchema = new mongoose.Schema
const TourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  duration: {
    type: Number,
    // required: [true],
  },
  maxGroupSize: Number,
  difficulty: String,
  ratingsAverage: Number,
  ratingsQuantity: Number,
  price: Number,
  summary: String,
  description: String,
  imageCover: String,
  images: [String],
  startDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// same here for "new" keyword if u want to use
const Tour = mongoose.model('tour', TourSchema);

module.exports = Tour;
