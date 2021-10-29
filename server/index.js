//Constantes del sistema/servidor
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require("cors");

const { mongoose } = require('./database');


const app = express();


app.set('port', process.env.PORT || 3001);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/pokemons', require('./routes/task.routes'));

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});