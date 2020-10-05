import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import PokemonFilter from './PokemonFilter';
import PokemonList from './PokemonList';

function MainContent(props) {

    const [filter, setFilter] = useState({});
    const [formattedList, setFormattedList] = useState();

    useEffect(() => {
        setFormattedList([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 150 }, { id: 5 }, { id: 6 }, { id: 7 }])
    }, [])

    return (
        <Grid container>
            {/* filtro e lista de cards pokemons */}
            <Grid container item md={9}>
                <PokemonFilter filter={filter} setFilter={setFilter} />
                <PokemonList result={formattedList} setLoading={props.setLoading} />
            </Grid>
            {/* carrinho (desk e mobile) */}
            <Grid item md={3}>
                Carrinho aqui
            </Grid>
        </Grid>
    );
}

export default MainContent;
