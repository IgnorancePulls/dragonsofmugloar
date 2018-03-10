'use strict';

const request = require('../request.service');

class Game {
    async getGame() {
        return request.getGame();
    }

    async sendGame(dragon) {
        return request.fight(dragon, this.gameId);
    }

    setGameProps(game) {
        this.gameId = game.gameId;
        this.knight = game.knight;
    }

    async createNewGame() {
        let response = await this.getGame();
        this.setGameProps(response);
    }
}

module.exports = Game;
