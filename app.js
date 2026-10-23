const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// if (process.env.NODE_ENV === 'development') {
//   console.log('hello from development');
// }

app.use(express.json());
app.set('query parser', 'extended');
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

// app.get("/api/v1/routes",(req,res)=>{
//  do something
// })

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// app.route("/").get(doSomething).post(doSomethingElse)

// creating your own router

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
