'use strict'

const enums = require('./enums');
const models = require('./models');

function trainDragon(knight, weather) {
    let dragon = new models.Dragon();

    if(weather.code === enums.WeatherCode.NORMAL) {

        let sorter = knight.SortedSkills();
        dragon = builder(sorter, dragon);
        let calculatedSkills = calculator(knight.SortedSkills());
        dragon = builder(calculatedSkills, dragon);
    }
    else if (weather.code === enums.WeatherCode.RAIN) {
        dragon.FireBreath = 0;
        dragon.ClawSharpness = 10;
        dragon.ScaleThickness = 5;
        dragon.WingStrength = 0;
    }
    return dragon;
}

function calculator(skills) {
    let skillSet = [...skills];

    if(skills[1] > 8) return skills;

    for(let i = 0; i < skillSet - 1; i++ ) {
        let current = skills[i][1];

        if(i === 0 && current < 9 ) {
            current = current + 2;
        }
        else current = current - 1;

        skillSet[i][1] = current;
    }

    return skillSet;
}

function builder(skillSet, dragon) {
    let builtDragon = Object.assign({}, dragon);

    for(let i = 0; i < skillSet.length; i++) {
        let skillValue = skillSet[i][1];
        switch(skillSet[i][0]) {
            case enums.KnightSkills.Armor:
                builtDragon.clawSharpness = skillValue;
                break;
            case enums.KnightSkills.Attack:
                builtDragon.scaleThickness = skillValue;
                break;
            case enums.KnightSkills.Agility:
                builtDragon.wingStrength = skillValue;
                break;
            case enums.KnightSkills.Endurance:
                builtDragon.fireBreath = skillValue ;
                break;
            default:
                return;
        }
    }

    return builtDragon;
}

module.exports.trainDragon = trainDragon;