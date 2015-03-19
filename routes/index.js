
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test1234',
  database : 'ircloki'
});

exports.index = function(req, res){
  res.render('index', { title: 'IRC-loggeri' , rows: []})
};

exports.search = function(req, res){
  connection.query('SELECT * FROM loki LIMIT 100', function(err, rows, fields) {
    if(err) {
      throw err;
    }
    else {
      res.render('index', { title: 'IRC-loggeri' , rows: rows})
    }
  });
};