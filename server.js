const dns = require('node:dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.MONGODB_PASSWORD,
);

// const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then((data) => console.log('connected to database'))
  .catch((err) => console.log(err));

const port = 8000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
