
class Logger {
    constructor(wins, loses) {
        this.winsPercentage = 0;
        this.wins = 0;
        this.loses = 0;
        this.winsMessage = 'Win count: ';
        this.loseMessage = 'Lose count: ';
        this.winsPercentageMessage = 'Win percentage: ';
    }

    logWins() {
        console.log(this.winsMessage, this.wins);
    }

    logDefeat() {
        console.log(this.winsMessage, this.wins);
        return this;
    }

    logWinsPercentage() {
        console.log(this.winsPercentageMessage, this.winsPercentage);
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
}

module.exports = Logger;