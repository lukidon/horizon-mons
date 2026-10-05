({
    name: "Dawnian Glimmoranite",
    spritenum: 667,
    megaStone: { "Glimmora-Dawnia": "Glimmora-Dawnia-Mega" },
    itemUser: ["Glimmora-Dawnia"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
})