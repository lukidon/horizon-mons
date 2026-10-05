({
    accuracy: 100,
    basePower: 0,
    category: "Special",
    name: "Lucky Draw",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1},
    secondary: null,
    onModifyMove(move, pokemon, target) {
        move.draw = this.random(13);
        if (move.draw === 0) {
            /* OHKO opponent */
            this.debug("Ace: OHKO opponent");
            move.damage = target.maxhp;
            move.accuracy = true;

        } else if (move.draw === 1) {
            /* OHKO Self */
            this.debug("Two: OHKO Self");
            move.target = "self";
            move.damage = target.maxhp;
            move.accuracy = true;

        } else if (move.draw === 2) {
            /* Sleep self */
            this.debug("Three: Sleep self");
            move.target = "self";
            move.status = "slp";
            move.category = "Status";

        } else if (move.draw === 3) {
            /* Receive 60BP damage */
            this.debug("Four: Receive 60BP damage");
            move.target = "self";
            move.basePower = 60;
            move.category = "Status";

        } else if (move.draw === 4) {
            /* Deal 35BP damage */
            this.debug("Five: Deal 35BP damage");
            move.basePower = 35;

        } else if (move.draw === 5) {
            /* Heal 1/16 HP */
            this.debug("Six: Heal 1/16 HP");
            move.target = "self";
            move.heal = [1, 16];
            move.category = "Status";

        } else if (move.draw === 6) {
            /* Paralyze opponent */
            this.debug("Seven: Paralyze opponent");
            move.status = "par";
            move.category = "Status";

        } else if (move.draw === 7) {
            /* Deal 70BP damage */
            this.debug("Eight: Deal 70BP damage");
            move.basePower = 70;

        } else if (move.draw === 8) {
            /* Heal 1/8 HP */
            this.debug("Nine: Heal 1/8 HP");
            move.target = "self";
            move.heal = [1, 8];
            move.category = "Status";

        } else if (move.draw === 9) {
            /* Sleep opponent */
            this.debug("Ten: Sleep opponent");
            move.status = "slp";
            move.category = "Status";

        } else if (move.draw === 10) {
            /* Heal 1/4 HP */
            this.debug("Jack: Heal 1/4 HP");
            move.target = "self";
            move.heal = [1, 4];
            move.category = "Status";

        } else if (move.draw === 11) {
            /* +1 Attack, Special Attack and Speed */
            this.debug("Queen: +1 Attack, Special Attack and Speed");
            move.target = "self";
            move.boosts = {
                atk: 1,
                spa: 1,
                spe: 1,
            };
            move.category = "Status";

        } else {
            /* Deal 100BP damage */
            this.debug("King: Deal 100BP damage");
            move.basePower = 100;
        }
    },
    onUseMoveMessage(target, source, move) {
        let card;
        if (move.draw === 0) {
            card = "Ace";
        } else if (move.draw === 1) {
            card = "Two";
        } else if (move.draw === 2) {
            card = "Three";
        } else if (move.draw === 3) {
            card = "Four";
        } else if (move.draw === 4) {
            card = "Five";
        } else if (move.draw === 5) {
            card = "Six";
        } else if (move.draw === 6) {
            card = "Seven";
        } else if (move.draw === 7) {
            card = "Eight";
        } else if (move.draw === 8) {
            card = "Nine";
        } else if (move.draw === 9) {
            card = "Ten";
        } else if (move.draw === 10) {
            card = "Jack";
        } else if (move.draw === 11) {
            card = "Queen";
        } else {
            card = "King";
        }
        this.add("-activate", target, "move: Lucky Draw", card);
    },
    target: "normal",
    type: "Psychic",
})