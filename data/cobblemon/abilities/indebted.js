({
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.flags['cantsuppress'] || sourceAbility.id === 'indebted') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				source.setAbility('indebted', target);
			}
		},
		flags: {},
		name: "Indebted",
		rating: 2,
		
	})