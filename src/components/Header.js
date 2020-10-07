import React, { useState } from 'react';
import { Select, MenuItem, Typography, Grid, Toolbar, AppBar } from '@material-ui/core';
import Type from '../helper/pokeTypeHelper';

import logo from '../imgs/logo.png'

function Header(props) {
    const [selectedLanguage, setSelectedLanguage] = useState("galarian");
    const [selectedType, setSelectedType] = useState("normal");

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item>
                        <img height="40px" src={logo} alt="logo" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" style={{ fontFamily: "galarian" }}>
                            PokeLair
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    container
                    justify="flex-end"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="caption">
                            Type Store:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Select
                            value={selectedType}
                            style={{textTransform: 'capitalize'}}
                            onChange={(e) => {
                                setSelectedType(e.target.value)
                                props.handleTypeChange(e.target.value)
                            }}
                            label="oie"
                        >
                            {Type.typeStringList.map((type) => 
                                <MenuItem key={type} style={{textTransform: 'capitalize'}} value={type}>
                                    <Typography variant="caption">
                                        {type}
                                    </Typography>
                                </MenuItem>)
                            }
                        </Select>
                    </Grid>

                    <Grid item>
                        <Typography style={{ fontFamily: "classic" }} variant="caption">
                            Language:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Select
                            value={selectedLanguage}
                            onChange={(e) => {
                                setSelectedLanguage(e.target.value)
                                props.handleFontChange(e.target.value)
                            }}
                        >
                            <MenuItem value={"galarian"}>
                                <Typography variant="caption" style={{ fontFamily: "galarian" }}>
                                    Galarian
                                </Typography>
                            </MenuItem>
                            <MenuItem value={"classic"}>
                                <Typography variant="caption" style={{ fontFamily: "classic" }}>
                                    English
                                </Typography>
                            </MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
