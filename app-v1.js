const fs = require('fs');
const express = require('express');
const { error } = require('console');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

const port = 8000;

const tourData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tourData.length,
    requestedTime: req.requestedTime,
    data: { tours: tourData },
  });
};

const getTour = (req, res) => {
  const id = Number(req.params.id);

  const element = tourData.find((el) => el.id === id);

  if (!element) {
    res.status(404).send({
      message: 'invalid id',
    });
  }

  res.status(200).send({
    status: 'success',
    data: {
      tour: element,
    },
  });
};

const createTour = (req, res) => {
  const newId = tourData[tourData.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);
  tourData.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tourData),
    (err) => {
      res.status(201).json({
        status: 'success',
        results: tourData.length,
        data: {
          tours: tourData,
        },
      });
    },
  );
};

const updateTour = (req, res) => {
  const id = Number(req.params.id);

  const element = tourData.find((el) => el.id === id);
  if (!element) {
    res.status(404).send('invalid id');
  }

  res.status(200).send({
    message: 'patched',
  });
};

const deleteTour = (req, res) => {
  const id = Number(req.params.id);

  const element = tourData.find((el) => el.id === id);

  if (!element) {
    throw new Error();
  }

  res.status(204).send({
    status: 'success',
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(500).send({
    status: 'err',
    message: 'not ready yet',
  });
};

const getUser = (req, res) => {
  res.status(500).send({
    status: 'err',
    message: 'not ready yet',
  });
};
const createUser = (req, res) => {
  res.status(500).send({
    status: 'err',
    message: 'not ready yet',
  });
};
const updateUser = (req, res) => {
  res.status(500).send({
    status: 'err',
    message: 'not ready yet',
  });
};
const deleteUser = (req, res) => {
  res.status(500).send({
    status: 'err',
    message: 'not ready yet',
  });
};

// app.get("/api/v1/routes",(req,res)=>{
//  do something
// })

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
