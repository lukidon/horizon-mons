({
    onResidualOrder: 5,
    onResidual(pokemon) {
        this.damage(pokemon.baseMaxhp / 16, pokemon, pokemon);
    },
    flags: {},
    name: "Taxing",
    rating: -1,
})