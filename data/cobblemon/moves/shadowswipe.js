({
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Shadow Swipe",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		  onHit(target, source) {
        source.addVolatile('snatch');
    },
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	})