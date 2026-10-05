({
    onResidualOrder: 29,
    onResidual(pokemon) {
        if (pokemon.baseSpecies.baseSpecies !== "Falinks" || pokemon.terastallized) return;
        const targetForme = pokemon.species.name === "Falinks-Dawnian-Defensive" ? "Falinks-Dawnian-Offensive" : "Falinks-Dawnian-Defensive";
        pokemon.formeChange(targetForme);
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Party Formation",
    rating: 1,
})