const dotenv = require('dotenv').config();
const app = require('./app');

console.log(process.env.NODE_ENV);

const port = 8000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
