const express = require('express');
const axios = require('axios');

const router = express.Router();

const Pokemon = require('../models/task');

router.get('/', async (req, res) => {
    let task;
    const dataResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    
    if(dataResponse.data.results.length >= 0){
        for(let i = 0; i < dataResponse.data.results.length; i++){
            //Peticion para la imagen
            const internData = await axios.get(dataResponse.data.results[1].url);
            
            const name = dataResponse.data.results[i].name;
            const dexNumber = internData.data.sprites.front_default;

            const findPokemon = Pokemon.findOne({ name }).exec();
            findPokemon.then(async (doc) => {
                if(doc == null){
                    task = new Pokemon({name, dexNumber});
                    await task.save();
                }else{
                    console.log('Este pokemon ya existe');
                }
            });
        }
        
    }
    const pokemons = await Pokemon.find();
    res.json(pokemons);
});

module.exports = router;