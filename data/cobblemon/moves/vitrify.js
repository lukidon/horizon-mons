({
	accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Vitrify",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(2);
			}
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
	})