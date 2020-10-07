import React, { useState, useEffect } from 'react';
import { Dialog, Fab, Grid, Hidden } from '@material-ui/core';

import PokemonFilter from './PokemonFilter';
import PokemonList from './PokemonList';
import PokemonBag from './PokemonBag';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function MainContent(props) {

    const [filter, setFilter] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);
    const [cartDialog, setCartDialog] = useState(false);

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
            <Hidden smDown>
                {/* Shop Cart (on desktop) */}
                <Grid item md={3}>
                    <PokemonBag pokemonTeam={props.pokemonTeam} setPokemonTeam={props.setPokemonTeam}/>
                </Grid>
            </Hidden>
            <Hidden smUp>
                <Fab
                    onClick={() => setCartDialog(true)}
                    color="primary"
                    style={{position:"absolute", right:"24px", bottom:"32px"}}
                >
                    <ShoppingCartIcon />
                </Fab>
                <Dialog
                    open={cartDialog}
                    onClose={() => setCartDialog(false)}
                >
                    <PokemonBag pokemonTeam={props.pokemonTeam} setPokemonTeam={props.setPokemonTeam}/>
                </Dialog>
            </Hidden>
        </Grid>
    );
}

export default MainContent;
