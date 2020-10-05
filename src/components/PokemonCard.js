import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import P from '../helper/pokeHelper';

function PokemonCard(props) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        props.setLoading(true);
        P.getPokemon(props.id)
        .then((p) => {
            console.log(p);
            setPokemon(p);
            props.setLoading(false);
        })
    }, [])

    return (
        <Grid item xs={12} md={3}>
            <Paper>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography style={{textTransform: 'capitalize'}}>{`${pokemon.dex} - ${pokemon.name}`}</Typography>
                    </Grid>
                    <Grid item>
                        <img
                            src={pokemon.sprites?.normal} 
                            alt={`${pokemon.name}`}>
                        </img>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">A partir de</Typography>
                        <Typography>${P.getPokemonPrice(pokemon, 1)}</Typography>
                    </Grid>
                    <Button color="primary" onClick={() => props.setLoading(true)}>
                        Ver Mais
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default PokemonCard;
