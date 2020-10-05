import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import font from './helper/fontHelper.js'
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import LoadingModal from './components/common/LoadingModal';

function App() {

    const [theme, setTheme] = useState()
    // const [type, setType] = useState("normal");
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
        console.log(newTheme);
    }

    useEffect(() => {
        changePageTheme(`classic`); //This line is a gambiarra, just to get the classic Pokémon .ttf working.
        changePageTheme(`galarian`);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LoadingModal open={loading} close={() => setLoading(false)} />

            <Header
                handleFontChange={(value) => changePageTheme(value)}
            />

            <MainContent setLoading={setLoading} />
        </ThemeProvider>
    );
}

export default App;
