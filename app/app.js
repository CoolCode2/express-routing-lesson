var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var myRouter  = require('./myRouter.js');

app.use('/api', myRouter);

app.listen(port); 