var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000)

app.get('/', function(req, res) {
  if (typeof req.query.name != 'undefined') {
    res.json({message: "Hello, " + req.query.name + "!"});
  } else {
    res.json({message: "Hello, World!"});
  }
});

app.listen(app.get('port'), function() {
 console.log('Server started on localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});

module.exports = app;
