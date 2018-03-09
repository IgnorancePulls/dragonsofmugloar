'use strict'

const models = require('./models');
const constants = require('./constants');
const helper = require('./helper');
const enums = require('./enums');

let wins = 0;
let lose = 0;
let logger = new helper.Logger();

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
    skillCalc = new helper.SkillCalculator(knight, constants.SkillMap);

    if(weather.code === enums.WeatherCode.Normal) {
        dragon = new models.Dragon(skillCalc.buildSkills());
    }
    else if (weather.code === enums.WeatherCode.Rain) {
        dragon = new models.Dragon(constants.DragonPatterns.RAIN_DRAGON);
    }
    else {
        dragon = new models.Dragon(constants.DragonPatterns.BALANCED_DRAGON);
    }

    const result = await game.sendGame(dragon);

    if(result.status === enums.GameCode.Defeat) lose ++;
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
            console.log('Win percentage: ', wins / (wins + lose) * 100, '%')
        })
}

epicBattle();

//start();

