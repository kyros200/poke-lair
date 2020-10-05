import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import P from './helper/pokeHelper'

import font from './helper/fontHelper.js'
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import LoadingModal from './components/common/LoadingModal';

function App() {

    const [theme, setTheme] = useState();
    const [mainFont, setMainFont] = useState("classic");
    const [type, setType] = useState("normal");
    const [pokemonList, setPokemonList] = useState([]);

    const [loading, setLoading] = useState(false);

    const changePageTheme = async (mainFont, mainType) => {
        const newTheme = await createMuiTheme({
            typography: {
                fontFamily: mainFont,
            },
            // AQUI TEM QUE COLOCAR O ESTILO DE ACORDO COM O TIPO DA LOJA!
            //
            // palette: {
            //     primary: {
            //         contrastText: "#fff",
            //         dark: "#303f9f",
            //         light: "#7986cb",
            //         main: "#3f51b5"
            //     }
            // },
            overrides: {
                MuiCssBaseline: {
                    '@global': {
                        '@font-face': [font[mainFont]],
                    },
                },
            },
        });
        setTheme(newTheme);
        // console.log(newTheme);
    }

    useEffect(() => {
        //When Type Changes, get all pokemons from that type.
        setLoading(true);
        P.getAllPokemonByType(type)
        .then((list) => {
            setPokemonList(list);
            setLoading(false);
        })
        changePageTheme(mainFont, type);
    }, [mainFont, type]);

    useEffect(() => {
        //This is a gambiarra, just to get the classic Pokémon .ttf working.
        changePageTheme(`galarian`);
        changePageTheme(`classic`); 
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LoadingModal open={loading} close={() => setLoading(false)} />

            <Header
                handleFontChange={(value) => setMainFont(value)}
                handleTypeChange={(value) => setType(value)}
            />

            <MainContent pokemonList={pokemonList} setLoading={setLoading} setType={setType} />
        </ThemeProvider>
    );
}

export default App;
