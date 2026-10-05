{
    name: "dawnian_glimmoranite",
    spritenum: 668,
    megaStone: "Glimmora-Mega",
    megaEvolves: ["Glimmora-Dawnia"],
    itemUser: ["Glimmora-Dawnia"],
    onTakeItem(item, source) {
        if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
        return true;
    },
    num: -999,
    gen: 9,
    isNonstandard: "Past"
}