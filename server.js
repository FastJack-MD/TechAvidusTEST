'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const express = require('express');
const list = express();

const toons = [
    { id: 1, name: 'Super Friends', prod: 'Hanna-Barbera', year: 1980 },
    { id: 1, name: 'Thundarr the Barbarian', prod: 'Ruby-SPears', year: 1980 },
    { id: 1, name: 'Scooby-Doo', prod: 'Hanna-Barbera', year: 1969 },
    { id: 1, name: 'Spider-Man and His Amazing Friends', prod: 'Marvel', year: 1981 },
    { id: 1, name: 'He-Man and the Masters of the Universe', prod: 'Filmation', year: 1983 },
    { id: 1, name: 'Dungeons & Dragons', prod: 'Toei', year: 1983 },
    { id: 1, name: 'The Charlie Brown and Snoopy Show', prod: 'Mendelson/Melendez', year: 1983 },
    { id: 1, name: 'Muppet Babies', prod: 'Jim Henson', year: 1984 },
    { id: 1, name: 'The Transformers', prod: 'Toei', year: 1984 },
    { id: 1, name: 'G.I. Joe: A Real American Hero', prod: 'Toei', year: 1983 },
    { id: 1, name: 'ThunderCats', prod: 'Rankin/Bass', year: 1985 },
    { id: 1, name: 'Disney\'s Adventures of the Gummi Bears', prod: 'Walt Disney Television', year: 1985 },
    { id: 1, name: 'Jem and the Holograms', prod: 'Toei', year: 1985 },
    { id: 1, name: 'The Real Ghostbusters', prod: 'DIC', year: 1986 },
    { id: 1, name: 'My Little Pony', prod: 'Toei', year: 1986 },
    { id: 1, name: 'DuckTales', prod: 'Walt Disney Television', year: 1987 },
    { id: 1, name: 'Teenage Mutant Ninja Turtles', prod: 'Toei', year: 1987 },
];

list.get('/toons', (req, res) => {
    res.json(toons);
});

list.listen(port, () => {
    console.log(`Server Port: ${port}`);
});
