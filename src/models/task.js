const mongoose = require('mongoose');

const { Schema } = mongoose;

const PokemonSchema = new Schema({
    name: { type: String, required: true},
    dexNumber: { type: String, required: true}
});

module.exports = mongoose.model('Pokemon', PokemonSchema);