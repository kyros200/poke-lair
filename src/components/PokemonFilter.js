import React from 'react';
import { Grid, InputAdornment, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function PokemonFilter(props) {
    return (
        <Grid item style={{width:"100%", margin: "12px"}}>
            <Paper elevation={12}>
                <TextField
                    fullWidth
                    placeholder="Name ou Dex..."
                    value={props.filter}
                    onChange={(e) => {
                        props.setFilter(e.target.value)
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </Paper>
        </Grid>
    );
}

export default PokemonFilter;
