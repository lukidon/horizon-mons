({
    name: "Musharnaite",
    spritenum: 666,
    megaStone: { "Musharna": "Musharna-Mega" },
    itemUser: ["Musharna"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
})