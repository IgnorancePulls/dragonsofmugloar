'use strict';

const request = require('../request.service');
const helper = require('../helper');

class Weather {
    async getWeather(gameId) {
        return request.getWeather(gameId);
    }

    setWeatherProps(weather) {
        this.code = weather.report.code;
        this.message = weather.report.message;
    }

    async defineWeather(gameId) {
        let response = await this.getWeather(gameId);
        let parsed = helper.ParseXml(response);
        this.setWeatherProps(parsed);
    }
}

module.exports = Weather;
