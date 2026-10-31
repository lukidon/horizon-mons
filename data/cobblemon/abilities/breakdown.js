( {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (target && ['psn', 'tox', 'par', 'brn', 'frz', 'slp' ].includes(target.status)) {
				return this.chainModify(1.3);
			}
		},
		flags: {},
		name: "Breakdown",
		rating: 3,
		
	})