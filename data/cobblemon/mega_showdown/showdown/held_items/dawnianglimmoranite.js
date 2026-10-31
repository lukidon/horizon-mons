({
    name: "Dawnian Glimmoranite",
    spritenum: 667,
    megaStone: { "Glimmora-Dawnian": "Glimmora-Mega Dawnian" },
    itemUser: ["Glimmora-Dawnian"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.name];
    },
    num: -999,
    gen: 9,
    isNonstandard: "Past",
})
