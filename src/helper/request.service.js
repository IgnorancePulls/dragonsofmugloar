'use strict';

const fetch = require('node-fetch');
const api = require('../constants/api');

class Request {
    async getGame() {
        return fetch(api.GAME)
            .then(res => res.json())
            .catch(error => {
                console.log(error);
            });
    }

    async getWeather(gameId) {
        return fetch(api.WEATHER + gameId)
            .then(res => res.text())
            .catch(error => {
                console.log(error);
            });
    }

    async fight(dragon, gameId) {
        return fetch(api.GAME + '/' + gameId + '/solution', {
            method: 'PUT',
            body: JSON.stringify({dragon: dragon}),
            headers: { 'Content-Type': 'application/json' }})
            .then(res => res.json())
            .catch(err => console.log(err));
    }
}

module.exports = Request;
