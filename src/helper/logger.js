'use strict';

const enums = require('../enums');

class Logger {
    constructor() {
        this.winsPercentage = 0;
        this.wins = 0;
        this.loses = 0;
        this.winsMessage = 'Win count: ';
        this.defeatMessage = 'Lose count: ';
        this.winsPercentageMessage = 'Win percentage: ';
    }

    logWins() {
        console.log(this.winsMessage, this.wins);
        return this;
    }

    incrementWins() {
        this.wins++;
    }

    incrementLoses() {
        this.loses++;
    }

    logDefeat() {
        console.log(this.defeatMessage, this.loses);
        return this;
    }

    logWinsPercentage() {
        console.log(this.winsPercentageMessage, this.winsPercentage, '%');
        return this;
    }

    calculateWinsPercentage() {
        this.winsPercentage = this.wins / (this.wins + this.loses) * 100;
        return this;
    }

    logGame() {
        this.logWins()
            .logDefeat()
            .calculateWinsPercentage()
            .logWinsPercentage();
    }

    handleREsult(res) {
        if (res.status === enums.GameCode.Victory) this.incrementWins();
        else this.incrementLoses();
    }
}

module.exports = Logger;
