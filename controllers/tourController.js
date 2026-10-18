exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).send({
      status: 'bad request',
      message: 'missing price or name ',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   results: tourData.length,
  //   requestedTime: req.requestedTime,
  //   data: { tours: tourData },
  // });
};

exports.getTour = (req, res) => {
  // const id = Number(req.params.id);
  // const element = tourData.find((el) => el.id === id);
  // res.status(200).send({
  //   status: 'success',
  //   data: {
  //     tour: element,
  //   },
  // });
};

exports.createTour = (req, res) => {
  // const newId = tourData[tourData.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tourData.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tourData),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       results: tourData.length,
  //       data: {
  //         tours: tourData,
  //       },
  //     });
  //   },
  // );
};

exports.updateTour = (req, res) => {
  res.status(200).send({
    message: 'patched',
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).send({
    status: 'success',
    data: null,
  });
};
