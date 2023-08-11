// Your code here
const isEsModule = require('sinon/lib/sinon/util/core/is-es-module');
const Dragon = require('../classes/dragon');
const exportAsyncBehaviors = require('sinon/lib/sinon/util/core/export-async-behaviors');

class EvilDragon extends Dragon {
    constructor (name,color,evilDoings, nemesis) {
        super(name,color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        this.evilDoings.forEach(deed => {
            console.log(`${this.name} will ${deed}`)
        })
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

module.exports = EvilDragon;
