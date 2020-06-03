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

    res.render('movies_list', {
      title: 'Listado de peliculas.',
      layout: 'layout.hbs',
      movies
    });

  })

});

router.get('/insertar', (req, res, next) => {

  const MOVIE = {
    "cNombre":"Es una prueba2"
  };

  FilmsModels.insert(MOVIE, (error, insertID) => {
    if(insertID){
      return res.status(200).send('Pelicula añadida -> ' + insertID);
    }
    return res.status(500).json('Error al añadir la pelicula, ' + insertID);
  });

});

module.exports = router;
