const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(require('./routes/index'));
app.use('/api',require('./routes/user'));

// App listen
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log('escuchando en el puerto:', app.get('port'))
})