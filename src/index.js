'use strict';

const models = require('./models');
const constants = require('./constants');
const helper = require('./helper');
const enums = require('./enums');

class Runner {
    initGame() {
        this.game = new models.Game();
    }

    initWeather() {
        this.weather = new models.Weather();
    }

    async initCore() {
        await this.game.createNewGame();
        await this.weather.defineWeather(this.game.gameId);
    }

    initKnight() {
        this.knight = new models.Knight(this.game.knight);
    }

    initSkillCalculator() {
        this.skillCalc = new helper.SkillCalculator(this.knight, constants.SkillMap);
    }

    trainDragon() {
        if (this.weather.code === enums.WeatherCode.Normal) {
            this.dragon = new models.Dragon(this.skillCalc.buildSkills());
        }
        else if (this.weather.code === enums.WeatherCode.Rain) {
            this.dragon = new models.Dragon(constants.DragonPatterns.RAIN_DRAGON);
        }
        else {
            this.dragon = new models.Dragon(constants.DragonPatterns.BALANCED_DRAGON);
        }
        return this;
    }

    async fight() {
        return this.game.sendGame(this.dragon);
    }
    async start() {
        this.initGame();
        this.initWeather();
        await this.initCore();
        this.initKnight();
        this.initSkillCalculator();
        this.trainDragon();
        return this.fight();
    }
}

module.exports = Runner;
