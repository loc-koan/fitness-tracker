/* CRUD = put/post, get, put/post, delete = insert, find, update, delete */
/* post used for inserts, put used for updating */ 
/* referenced 17.14 */ 
var router = require('express').Router();
const Fitness = require('../models/fitness.js');
// const db = require('../models/fitness.js');

// module.exports = function (app) {

  router.get('/api/workouts', (req, res) => {
    console.log('get');
    Fitness.find({})
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.post('/api/workouts', (req, res) => {
    console.log(req.body);
    console.log('post');
    Fitness.create(req.body)
      .then(dbFitness => {
        res.status(200).json(dbFitness);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.put('/api/workouts/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    Fitness.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}},
      {new: true, runValidators: true})
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get('/api/workouts/range', (req, res) => {
    Fitness.find({})
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.json(err);
      });
  });

// };

module.exports = router;