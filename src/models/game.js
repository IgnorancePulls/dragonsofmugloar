const request = require('../request.service');

class Game {
    constructor() {};

    async getGame() {
        return await request.getGame();
    }

    async sendGame(dragon) {
        return await request.fight(dragon, this.gameId);
    }

    setGameProps(game) {
        this.gameId = game.gameId;
        this.knight = game.knight;
    }

    async createNewGame() {
        let response =  await this.getGame();
        this.setGameProps(response);
    }
}

module.exports = Game;