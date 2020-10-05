import React, { useState } from 'react';
import { Select, MenuItem, Typography, Grid, Toolbar, AppBar } from '@material-ui/core';

function Header(props) {
    const [selectedLanguage, setSelectedLanguage] = useState("galarian");

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="center"
                >
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
                        <Typography style={{ fontFamily: "classic" }}>
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
                            <MenuItem style={{ fontFamily: "galarian" }} value={"galarian"}>Galarian</MenuItem>
                            <MenuItem style={{ fontFamily: "classic" }} value={"classic"}>Portuguese</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
