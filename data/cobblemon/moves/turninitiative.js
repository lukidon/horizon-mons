({
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Turn Initiative",
    pp: 10,
    priority: 0,
    flags: {protect: 1, mirror: 1},
    boosts: {
        spa: 1,
        spd: 1,
    },
    secondary: {
        chance: 30,
        boosts: {
            spa: -1,
        },
    },
    onTry(source) {
        if (source.species.baseSpecies === 'Falinks') {
            return;
        }
        this.attrLastMove('[still]');
        this.add('-fail', source, 'move: Turn Initiative');
        this.hint("Only a Pokemon whose form is Falinks can use this move.");
        return null;
    },
    onModifyMove(move, pokemon, target) {
        if (pokemon.species.name === 'Falinks-Dawnian-Defensive') {
            move.accuracy = true;
            move.basePower = 0;
            move.boosts = {
                spa: 1,
                spd: 1,
            };
            move.secondaries = [];
            move.target = "self";
        } else {
            move.accuracy = 100;
            move.basePower = 95;
            delete move.boosts;
            move.secondary = {
                chance: 30,
                boosts: {
                    spa: -1,
                },
            };
            move.target = "normal";
        }
    },
    target: "normal",
    type: "Fairy",
})