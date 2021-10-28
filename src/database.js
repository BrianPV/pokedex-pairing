const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-pokedex';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(error));


module.exports = mongoose