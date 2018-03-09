'use strict'

const models = require('./models');
const constants = require('./constants');
const helper = require('./helper');
const enums = require('./enums');

let wins = 0;
let lose = 0;
let logger = new helper.Logger();

// async function start() {
//     let game;
//     let weather;
//     let knight;
//     let dragon;
//     let skillCalc;

//     game = new models.Game();
//     weather = new models.Weather();
    
//     await game.createNewGame();
//     await weather.defineWeather(game.gameId);

//     knight = new models.Knight(game.knight);
//     skillCalc = new helper.SkillCalculator(knight, constants.SkillMap);

//     if(weather.code === enums.WeatherCode.Normal) {
//         dragon = new models.Dragon(skillCalc.buildSkills());
//     }
//     else if (weather.code === enums.WeatherCode.Rain) {
//         dragon = new models.Dragon(constants.DragonPatterns.RAIN_DRAGON);
//     }
//     else {
//         dragon = new models.Dragon(constants.DragonPatterns.BALANCED_DRAGON);
//     }

//     const result = await game.sendGame(dragon);

//     if(result.status === enums.GameCode.Defeat) lose ++;
//     else wins++;
// }

// function epicBattle() {
//     const fights = [];

//     for(let i = 0;  i < 20; i++) {
//         fights.push(
//             start()
//                 .catch(console.error)
//         )
//     }

//     return Promise.all(fights)
//         .then(() => {
//             console.log('wins: ', wins);
//             console.log('lose: ', lose);
//             console.log('Win percentage: ', (wins + lose) / 100 * wins)
//         })
// }

// epicBattle();

//start();

class Runner {
    constructor() {
        this.battles = [];
    }

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
        if(this.weather.code === enums.WeatherCode.Normal) {
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
        return await this.game.sendGame(this.dragon);
    }
    async start() {
        this.initGame();
        this.initWeather();
        await this.initCore();
        this.initKnight();
        this.initSkillCalculator();
        this.trainDragon();
        return await this.fight();
    }
}

// let test = new Runner();
// let res =  test.start();
// console.log(res);


// function epicBattle() {
//         const fights = [];
//         for(let i = 0;  i < 20; i++) {
//             let test = new Runner();
//             fights.push(
//                 test.start()
//                 .then(res => console.log(res))
//                 .catch(console.error)
//             )
//         }
    
//         return Promise.all(fights)
//             .then(() => {
//                 console.log('wins: ', wins);
//                 console.log('lose: ', lose);
//                 console.log('Win percentage: ', (wins + lose) / 100 * wins)
//             })
//     }
// epicBattle();

module.exports = Runner;