'use strict'


const models = require('./models');
const constants = require('./constants');
const skillCalculator = require('./helper').skillCalculator;
const enums = require('./enums');

let wins = 0;
let lose = 0;

async function start() {
    let game;
    let weather;
    let knight;
    let dragon;
    let skillCalc;

    game = new models.Game();
    weather = new models.Weather();

    await game.createNewGame();
    await weather.defineWeather(game.gameId);

    knight = new models.Knight(game.knight);
    skillCalc = new skillCalculator(knight, constants.skillMap);

    if(weather.code === enums.WeatherCode.NORMAL) {
        dragon =  new models.Dragon(skillCalc.buildSkills());
    }
    else if (weather.code === enums.WeatherCode.RAIN) {
        dragon =  new models.Dragon(constants.dragonPatterns.RAIN_DRAGON);
    }
    else {
        dragon = new models.Dragon(constants.dragonPatterns.BALANCED_DRAGON);
    }

    const result = await game.sendGame(dragon);

    if(result.status === 'Defeat') lose ++;
    else wins++;
}

function epicBattle() {
    const fights = [];

    for(let i = 0;  i < 20; i++) {
        fights.push(
            start()
                .catch(console.error)
        )
    }

    return Promise.all(fights)
        .then(() => {
            console.log('wins: ', wins);
            console.log('lose: ', lose);
            console.log('Win percentage: ', (wins + lose) / 100 * wins)
        })
}

epicBattle();

// start();

