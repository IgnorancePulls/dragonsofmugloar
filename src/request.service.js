'use strict';

const fetch = require('node-fetch');
const api = require('./constants/api');

async function getGame() {
    return fetch(api.GAME)
        .then(res => res.json())
        .catch(error => {
            console.log(error);
        });
}

async function getWeather(gameId) {
    return fetch(api.WEATHER + gameId)
        .then(res => res.text())
        .catch(error => {
            console.log(error);
        });
}

async function fight(dragon, gameId) {
    return fetch(api.GAME + '/' + gameId + '/solution', {
        method: 'PUT',
        body: JSON.stringify({dragon: dragon}),
        headers: { 'Content-Type': 'application/json' }})
        .then(res => res.json())
        .catch(err => console.log(err));
}

module.exports.getGame = getGame;
module.exports.getWeather = getWeather;
module.exports.fight = fight;
