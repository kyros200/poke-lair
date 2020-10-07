import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import PokemonFilter from './PokemonFilter';
import PokemonList from './PokemonList';
import PokemonBag from './PokemonBag';

function MainContent(props) {

    const [filter, setFilter] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
        setAllPokemon(props.pokemonList);
        setFilter("");
    }, [props.pokemonList]);

    return (
        <Grid container>
            {/* Name Filter & Pokemon List. Left side of screen */}
            <Grid container item md={9}>
                <PokemonFilter 
                    filter={filter} 
                    setFilter={setFilter} 
                />
                <PokemonList 
                    result={
                        allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase()))
                    } 
                    setLoading={props.setLoading} 
                    setSelectedPokemon={props.setSelectedPokemon}
                />
            </Grid>
            {/* Shop Cart (for desktop. Need to think to mobile). Right side of screen (on desktop) */}
            <Grid item md={3}>
                <PokemonBag pokemonTeam={props.pokemonTeam} setPokemonTeam={props.setPokemonTeam}/>
            </Grid>
        </Grid>
    );
}

export default MainContent;
