({
    accuracy: 100,
    basePower: 30,
    category: "Special",
    isNonstandard: "Past",
    name: "Insight",
    pp: 20,
    priority: 1,
    flags: { protect: 1, mirror: 1, metronome: 1 },

    onHit(target, source) {
        source.addVolatile('laserfocus');
    },

    target: "normal",
    type: "Water",
    contestType: "Tough",
})