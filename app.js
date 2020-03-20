'use strict';

const express = require('express');
const app = express();

const albums = require('./routes/albums');

app.use(express.json());
app.set('port', process.env.port || 8000);

app.use('/albums', albums)

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`))