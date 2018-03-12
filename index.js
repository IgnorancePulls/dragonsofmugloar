'use strict';

const Runner = require('./src');
const Logger = require('./src/helper/logger');

class Play {
    constructor(iteration = 20) {
        this.iterations = iteration;
        this.fights = [];
        this.log = new Logger();
    }

    play() {
        for (let i = 0; i < this.iterations; i++) {
            let run = new Runner();
            this.fights.push(
                run.start()
                    .then((res) => this.log.handleResult(res))
                    .catch(console.error)
            );
        }
        return Promise.all(this.fights)
            .then(() => {
                this.log.logGame();
            });
    }
}

const game = new Play();
game.play();
