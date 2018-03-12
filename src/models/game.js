'use strict';

const Request = require('../helper').Request;

class Game {
    constructor() {
        this.request = new Request();
    }

    async getGame() {
        return this.request.getGame();
    }

    async sendGame(dragon) {
        return this.request.fight(dragon, this.gameId);
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
