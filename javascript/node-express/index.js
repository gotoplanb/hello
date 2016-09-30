var express = require('express')

var app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', function(req, res) {
  res.json({message: "Hello " +  req.query.name})
})

app.listen(app.get('port'), function() {
 console.log('Server started on localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});
