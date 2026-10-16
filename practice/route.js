const express = require('express');

const userRouter = express.Router();

userRouter.route('/').get((req, res) => {
  res.send('this is working');
});

userRouter.route('/:id').get((req, res) => {
  console.log(req.params.id);

  res.send('done');
});

module.exports = userRouter;
