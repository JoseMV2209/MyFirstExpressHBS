var express = require('express');
var router = express.Router();
var FilmsModels = require('../models/filmsModels.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicio', (req, res, next) => {
  res.render('vista.hbs', {
    title:'Primera Vista',
    page: 'Pagina variable'
  });
});

router.get('/listado', (req, res, next) => {

  FilmsModels.fetchAll((error, movies) => {

    if(error){
      return res.status(500).json(error);
    }

    res.render('movies-list', {
      title: 'Listado de peliculas.',
      layout: 'layout.hbs',
      movies
    });

  })

});

module.exports = router;
