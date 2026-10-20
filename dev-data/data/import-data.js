const dotenv = require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');

const tour = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));

let DB;

process.env.NODE_ENV === 'production'
  ? (DB = process.env.DATABASE.replace(
      '<db_password>',
      process.env.MONGODB_PASSWORD,
    ))
  : (DB = process.env.DATABASE_LOCAL);

mongoose
  .connect(DB)
  .then((data) => console.log('connected to database'))
  .catch((err) => console.log(err));

const importData = async () => {
  try {
    await Tour.create(tour);
    console.log('tour data imported');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('deleted data');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
