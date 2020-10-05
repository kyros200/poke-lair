const API_URL = `https://pokeapi.co/api/v2`;

const getNationalDex = (id) => {
    // A simple way to get formatted National Dex String
    let dex = id + ``;
    while(dex.length < 3)
        dex = `0${dex}`;
    return `#${dex}`
}

const formatPokemonInfo = (pokemon) => {
    const allMoves = pokemon.moves.map((m) => {return {...m.move, level: m.version_group_details[0].level_learned_at}});
    const formattedMoves = {
        initialMoves: allMoves.filter((m) => m.level === 1),
        learnedMoves: allMoves.filter((m) => m.level > 1).sort((a, b) => a.level - b.level),
        TMMoves: allMoves.filter((m) => m.level === 0)
    }

    return {
        id: pokemon.id,
        dex: getNationalDex(pokemon.id),    
        name: pokemon.name,
        moves: formattedMoves,
        sprites: {normal: pokemon.sprites.front_default, shiny: pokemon.sprites.front_shiny},
        stats: pokemon.stats.map((s) => {return {stat: s.stat.name, value: s.base_stat}}),
        types: pokemon.types.map((t) => t.type.name),
        baseExperience: pokemon.base_experience,
    }
}

const pokeHelper = {
    getPokemon: (id) => {
        return fetch(`${API_URL}/pokemon/${id}`)
        .then((result) => result.json())
        .then((pokemon) => {
            console.log(formatPokemonInfo(pokemon))
            return formatPokemonInfo(pokemon)
        });
    },
    getPokemonPrice: (pokemon, level) => {
        //Price is the sum of all base stats. Each level adds 10% of the Pokémon's base experience, rounded down
        const basePrice = pokemon.stats?.reduce((total, stat) => total + stat.value, 0);
        return (basePrice + ((level-1)*pokemon.baseExperience*0.1)).toFixed(0);
    }
}

export default pokeHelper;