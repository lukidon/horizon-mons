({
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Ferment Roll",
    pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
			onTry(source) {
		const item = source.getItem();
		if (item.isBerry) {
			source.eatItem();
		}
	},
		onBasePower(basePower, pokemon) {
			if (pokemon.ateBerry) {
				return this.chainModify(2);
			}
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	})