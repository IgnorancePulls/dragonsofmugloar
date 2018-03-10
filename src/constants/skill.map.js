'use strict';

const enums = require('../enums');

module.exports = [
    {
        KNIGHT: enums.KnightSkills.Attack,
        DRAGON: enums.DragonSkills.ScaleThickness
    },
    {
        KNIGHT: enums.KnightSkills.Armor,
        DRAGON: enums.DragonSkills.ClawSharpness
    },
    {
        KNIGHT: enums.KnightSkills.Endurance,
        DRAGON: enums.DragonSkills.FireBreath
    },
    {
        KNIGHT: enums.KnightSkills.Agility,
        DRAGON: enums.DragonSkills.WingStrength
    }
];
