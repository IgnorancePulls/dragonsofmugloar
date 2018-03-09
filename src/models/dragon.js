'use strict'

class Dragon {
    constructor(skillMap) {
        Object.assign(this, skillMap);
    }

    absorbSkills(skills, skillMap) {
        for(let i = 0; i < skillMap.length; i ++) {
            let current = skillMap[i];
            let skill = skills[current.knight];
            this[current.dragon] = skill;
        }
    }
}

module.exports = Dragon;