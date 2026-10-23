const dns = require('node:dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

let DB;
// //////////////
console.log(process.env.NODE_ENV);
//////////////

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

const port = 8000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
