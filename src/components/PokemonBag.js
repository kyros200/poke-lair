import React, { useState } from 'react';
import { Grid, Typography, Paper, Button, Divider } from '@material-ui/core';
import Type from '../helper/pokeTypeHelper';
import QuestionModal from './common/QuestionModal';

function PokemonBag(props) {
    const [checkoutModal, setCheckoutModal] = useState(false);
    const [finishModal, setFinishModal] = useState(false);

    const checkout = () => {
        setCheckoutModal(false);
        setFinishModal(true);
    }

    return( 
        <Paper style={{ margin:"16px"}}>
            <Grid container item direction="column" justify="flex-start">
                <Grid item xs={12}>
                    <Typography variant="body1">{`Pokémon Team (${props.pokemonTeam.length}/6)`}</Typography>
                </Grid>
                <Divider />

            </Grid>
            <Grid container item direction="column" justify="flex-start">
                {props.pokemonTeam.map((p) => 
                    <Grid container item alignItems="center">
                        <Grid item >
                            <img src={p.sprite} alt="sprite" />
                        </Grid>
                        <Grid item>
                            <Grid item>
                                <Typography variant="caption" style={{textTransform: 'capitalize'}}>{`${p.dex}-${p.name} Lv${p.level}`}</Typography>
                            </Grid>
                            {p.selectedMoves.map((m) => 
                                <Grid item>
                                    <img height="12px" src={Type?.typeImgs[m.type]} alt={m.type} />
                                    <Typography variant="caption" style={{textTransform: 'uppercase'}}>{m.name}</Typography>
                                </Grid>
                            )}
                            <Grid item>
                                <Typography variant="caption">{`$${p.price}`}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
            <Grid container item justify="space-between" alignItems="center">
                <Grid item>
                    <Typography >
                        {`TOTAL: $${props.pokemonTeam.reduce((total, pokemon) => total + parseInt(pokemon.price), 0)}`}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setCheckoutModal(true)}
                        disabled={props.pokemonTeam.reduce((total, pokemon) => total + parseInt(pokemon.price), 0) === 0}
                    >
                        CHECKOUT
                    </Button>
                </Grid>
            </Grid>
            <QuestionModal
                open={checkoutModal}
                onClose={() => setCheckoutModal(false)}
                approveText="Yes!"
                approveFunction={() => checkout()}
                refuseText="Wait..."
                refuseFunction={() => setCheckoutModal(false)}
            >
                <Typography >
                    Are you sure you want this Pokémon team?
                </Typography>
                {props.pokemonTeam.map((p) => 
                    <img src={p.sprite} alt="sprite" />
                )}
                <Typography >
                    {`TOTAL: $${props.pokemonTeam.reduce((total, pokemon) => total + parseInt(pokemon.price), 0)}`}
                </Typography>
            </QuestionModal>
            <QuestionModal
                open={finishModal}
                onClose={() => setFinishModal(false)}
                approveText="Buy Again!"
                approveFunction={() => {setFinishModal(false); props.setPokemonTeam([])}}
            >
                <Typography >
                    Thank you very much for your preference! 
                </Typography>
            </QuestionModal>
        </Paper>
    )
}

export default PokemonBag;
