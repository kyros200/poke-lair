import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import P from '../helper/pokeHelper';
import Type from '../helper/pokeTypeHelper'

function PokemonCard(props) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        props.setLoading(true);
        P.getPokemon(props.pokemon.name)
        .then((p) => {
            setPokemon(p);
            props.setLoading(false);
        })
    }, [])

    return pokemon?.sprites ? 
        <Grid item xs={12} md={3} style={{marginBottom:"12px"}}>
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
                    <Grid container item justify="center" spacing={1} >
                        {pokemon.types?.map((type) => 
                            <Grid key={type} item>
                                <img height="16px" src={Type?.typeImgs[type]} alt={type} />
                            </Grid>
                        )}
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">A partir de</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>${P.getPokemonPrice(pokemon, 1)}</Typography>
                    </Grid>
                    <Grid item style={{width:"100%"}}>
                        <Button style={{}} fullWidth color="primary" variant="contained" onClick={() => {console.log(pokemon); props.setLoading(true)}}>
                            <Typography variant="caption" style={{textTransform: 'capitalize'}}>Adicionar...</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid> : <></>
}

export default PokemonCard;
