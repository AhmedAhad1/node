const dns = require('node:dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const { type } = require('node:os');

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.MONGODB_PASSWORD,
);

// const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then((data) => console.log('connected to database'))
  .catch((err) => console.log(err));

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

const testTour = new Tour({
  name: 'the Forest hiker',
  price: 120,
  rating: 40,
});

testTour.save();
const port = 8000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
