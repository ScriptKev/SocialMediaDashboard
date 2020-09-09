const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.use(morgan('dev'))
app.set('port', process.env.PORT || 5000);

// Routes
app.use(require('./routes/index'));
app.use('/api',require('./routes/user'));


app.listen(app.get('port'), () => {
  console.log('escuchando en el puerto:', app.get('port'))
})