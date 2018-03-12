'use strict';

const Parser = require('../helper/').ParseXml;
const Request = require('../helper').Request;

class Weather {
    constructor() {
        this.request = new Request();
        this.parser = new Parser();
    }

    async getWeather(gameId) {
        return this.request.getWeather(gameId);
    }

    setWeatherProps(weather) {
        this.code = weather.report.code;
        this.message = weather.report.message;
    }

    async defineWeather(gameId) {
        let response = await this.getWeather(gameId);
        let parsed = this.parser.parseXml(response);
        this.setWeatherProps(parsed);
    }
}

module.exports = Weather;
