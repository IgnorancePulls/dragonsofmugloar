class SkillCalculator {
    constructor(knight, skillMap) {
        this.knight = knight;
        this.skillMap = skillMap;
        this.skills = [];
        this.flatSkillSet = {};
    }

    buildSkills() {
       return this.mapSkills()
           .sortSkills()
           .pumpSkills()
           .flatSkills()
           .getFlatSkills();
    }

    mapSkills() {
        for(let i = 0; i < this.skillMap.length; i++) {
            let key = this.skillMap[i].KNIGHT;
            this.skills.push({
                skill: this.skillMap[i].DRAGON,
                value: this.knight[key]
            })
        }

        return this;
    }

    sortSkills() {
        this.skills = this.skills.sort((a, b) => a.value < b.value);
        return this;
    }

    pumpSkills() {
        if(this.skills[0].value > 8) return this;

        for(let i = 0; i < this.skills.length - 1; i++ ) {
            let current = this.skills[i].value;

            if(i === 0 && current < 9 ) {
                current = current + 2;
            }
            else current = current - 1;

            this.skills[i].value = current;
        }

        return this;
    }

    flatSkills() {
        for(let i = 0; i < this.skills.length; i++) {
            this.flatSkillSet[this.skills[i].skill] = this.skills[i].value;
        }
        return this;
    }

    getFlatSkills() {
        return this.flatSkillSet;
    }
}

module.exports = SkillCalculator;