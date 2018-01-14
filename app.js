const express = require('express'),
      app     = express(),
      routes  = require('./routes/index');
  
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server is running!');
});
