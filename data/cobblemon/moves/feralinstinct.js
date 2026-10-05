({
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Feral Instinct",
		pp: 10,
		priority: 2,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Feral Instinct only works on your first turn out.");
				return false;
			}
		},
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
	})