( {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (defender && ['psn', 'tox', 'par', 'brn', 'frz', 'slp' ].includes(defender.status)) {
				return this.chainModify(1.3);
			}
		},
		flags: {},
		name: "Breakdown",
		rating: 3,
		
	})