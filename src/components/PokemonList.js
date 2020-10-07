import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PokemonCard from './PokemonCard';

function PokemonList(props) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography>{`${props.result.length} Pokémon found`}</Typography>
            </Grid>
            <Grid container justify="space-evenly" item spacing={1} style={{maxHeight:"80vh", overflowY:"auto"}}>
                {
                    props.result?.map((pokemon) => 
                        <PokemonCard 
                            key={pokemon.name} 
                            pokemon={pokemon} 
                            setLoading={props.setLoading} 
                            setSelectedPokemon={props.setSelectedPokemon}
                        />
                    )
                }
            </Grid>
        </Grid>
    );
}

export default PokemonList;
