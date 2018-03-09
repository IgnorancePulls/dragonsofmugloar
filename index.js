'use strict';

const runner = require('./src');
const logger = require('./src/helper/logger');

class Play {
    constructor() {
        this.iterations = 20;
        this.fights = [];
        this.log = new logger();
    }

    play() {
        for(let i = 0;  i < this.iterations; i++) {
            let run = new runner();
        
            this.fights.push(
                run.start()
                // .then(res => console.log(res))
                .then((res) => this.log.handleREsult(res))
                // .then((res) => {
                //     console.log('hey')
                //     console.log(res)
                //     this.log.test(res);
                // })
                .catch(console.error)
            )
        }
    
        return Promise.all(this.fights)
            .then(() => {
                this.log.logGame();
            })
    }
}

const game = new Play;
game.play();