const userRouter = require('./route');

const express = require('express');

const app = express();

app.use(express.json());

app.use('/api', userRouter);

app.listen(3000, () => {
  console.log('listening to 3000');
});
