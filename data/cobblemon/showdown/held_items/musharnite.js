{
    name: "musharnite",
    spritenum: 667,
    megaStone: "Musharna-Mega",
    megaEvolves: ["Musharna"],
    itemUser: ["Musharna"],
    onTakeItem(item, source) {
        if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
        return true;
    },
    num: -998,
    gen: 5,
    isNonstandard: "Past",
}