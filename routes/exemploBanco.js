var express = require('express');
var router = express.Router();

var controladorBanco = require('../control/controladorBanco');

router.get('/', function(req, res) {
  controladorBanco.montarTela(res);
});

module.exports = router;
