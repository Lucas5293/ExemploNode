var pool = require('./database.js')
var when = require('when');

exports.montarTela = function (route) {
  when.all([
    pool.query('SELECT id, nome, cpf FROM pessoa;'),
    pool.query('SELECT id, nome, cpf FROM pessoa WHERE id=12;'),
  ]).spread(function(response1, response2) {
      
      var query1 = response1["rows"];
      var query2 = response2["rows"];
      console.log(query1);
      console.log(query2);
      route.render('banco',{'pessoas_all':query1, 'pessoa_id_12':query2});
  });
};