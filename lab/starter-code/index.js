'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios')
const os = require('os');


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000
const hostname = os.hostname();
let pokemonList = [];
let swapi = {};

const getPokemon = async () => {
    try {
        const pokemonResults = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3');
        pokemonList = pokemonResults.data.results;
    } catch (error) {
        console.log(error);
    }
}

const getSwapi = async () => {
    try {
        const swapiResults = await axios.get('https://swapi.dev/api/people/1');
        swapi = swapiResults.data;
        console.log(swapi);
    } catch (error) {
        console.log(error);
    }
}

app.get('/', async (req, res, next) => {

    getPokemon();
    getSwapi();

    const data = {
        Service: 'Demo EC2 Server',
        Hostname: hostname,
        data: {
            pokemonList,
            swapi,
        },
    }

    res.status(200).send(data);
});

app.listen(PORT, () => console.log('Listening on port: ', PORT));