const express = require('express');
const axios = require('axios');

const router = express.Router();

const Pokemon = require('../models/task');



router.get('/', async (req, res) => {
    let task;
    const dataResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    //console.log(dataResponse.data.results);
    //console.log(dataResponse.data.results.length);
    if(dataResponse.data.results.length >= 0){
        for(let i = 0; i < dataResponse.data.results.length; i++){
            //Peticion para la imagen
            const internData = await axios.get(dataResponse.data.results[1].url);
            //console.log(internData.data.sprites.front_default);
            
            const name = dataResponse.data.results[i].name;
            const dexNumber = internData.data.sprites.front_default
            if(Pokemon.findOne({ name }) !== dataResponse.data.results[i].name){
                task = new Pokemon({name, dexNumber});
                await task.save();
            }
        }
        
    }
    const pokemons = await Pokemon.find();
    res.json(pokemons);
});

module.exports = router;