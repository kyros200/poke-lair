import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PokemonCard from './PokemonCard';

function PokemonList(props) {
  return (
    <Grid container>
      <Grid item>
        <Typography>Resultado da Busca</Typography>
      </Grid>
      <Grid container justify="space-evenly" item spacing={1}>
        {props.result?.map((pokemon) => <PokemonCard id={pokemon.id} setLoading={props.setLoading}/>)}
      </Grid>
    </Grid>
  );
}

export default PokemonList;
