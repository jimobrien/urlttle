var app = require('./server-config.js');

var port = process.env.PORT || 4568;





app.listen(port);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
console.log(process.NODE_ENV);
console.log('Server now listening on port ' + port);
