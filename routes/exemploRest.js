var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send("GET - Bem vindo a api");
});
router.post('/', function(req, res) {
  res.send("POST - É necessário um parâmetro: /exemploRest/{parametro}");
});
router.post('/:atributoqualquer', function(req, res) {
  var atributo = req.params.atributoqualquer;
  res.send("POST - Parametro passado = "+atributo);
});

module.exports = router;