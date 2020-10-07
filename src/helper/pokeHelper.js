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
        //More Info Here, when Pokemon is clicked
        details: {
            evolutions: pokemon.moreInfo.evolutions,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities.map((a) => a.ability.name),
            flavorText: pokemon.moreInfo.flavorText,
            growthRate: pokemon.moreInfo.growthRate.name,
            isLegendary: pokemon.moreInfo.isLegendary,
        }
    }
}

const getPokemonEvolutions = async (pokemon) => {
    const specie = await (await fetch(pokemon.species.url)).json();
    const evolutionChain = await (await fetch(specie.evolution_chain.url)).json();
    
    let info = {
        flavorText: specie.flavor_text_entries ? specie.flavor_text_entries[0].flavor_text : "",
        growthRate: specie.growth_rate,
        isLegendary: specie.is_legendary,
        evolutions: []
    };
    let actualState = evolutionChain.chain;
    while(true) {
        if(actualState.evolves_to.length > 0) {
            info.evolutions.push(actualState.evolves_to[0].species.name)
            actualState = actualState.evolves_to[0];
        }
        else
            break;
    }

    return info;
}

const pokeHelper = {
    getPokemon: (id) => {
        return fetch(`${API_URL}/pokemon/${id}`)
        .then((result) => result.json())
        .then(async (pokemon) => {
            pokemon.moreInfo = await getPokemonEvolutions(pokemon);      
            return formatPokemonInfo(pokemon)
        });
    },

    getMove: (url) => {
        return fetch(url)
        .then((result) => result.json())
        .then((move) => {
            return move
        });
    },

    getPokemonPrice: (pokemon, level = 1, isShiny = false, moves = []) => {
        //Price is the sum of all base stats. Each level adds 10% of the Pokémon's base experience, rounded down
        const movesPrice = moves.map(m => m.price).reduce((a, b) => a + b, 0)
        const basePrice = pokemon.stats?.reduce((total, stat) => total + stat.value, 0);
        let finalPrice = (basePrice + movesPrice + ((level-1)*pokemon.baseExperience*0.1)).toFixed(0);
        if (isShiny)
            finalPrice *= 3;
        return finalPrice;
    },

    getAllPokemonByType: (type) => {
        return fetch(`${API_URL}/type/${type}`)
        .then((result) => result.json())
        .then((pokemonList) => {
            return pokemonList.pokemon
                .map((pokemon) => {
                    let numberDex = pokemon.pokemon.url.split('/');
                    numberDex = numberDex[numberDex.length-2]
                    //I know, very sad way to get the Pokémon Dex Number...

                    return {
                        name: pokemon.pokemon.name,
                        dex: numberDex
                    }
                })
                .filter((pokemon) => {
                    return pokemon.dex < 808 //Get all Pokemons that is not from Galar (Thus, until Alola Region)
                })
        });
    }
}

export default pokeHelper;