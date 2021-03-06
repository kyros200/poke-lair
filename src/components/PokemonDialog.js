import React, { useEffect, useState } from 'react';
import { Grid, Typography, Dialog, Checkbox, Button } from '@material-ui/core';
import P from '../helper/pokeHelper';
import Type from '../helper/pokeTypeHelper'
import MoveCard from './common/MoveCard';
import QuestionModal from './common/QuestionModal'

function PokemonDialog(props) {
    const [isShiny, setIsShiny] = useState(false)
    const [level, setLevel] = useState(1);
    const [selectedMoves, setSelectedMoves] = useState([]);
    const [confirmationModal, setConfirmationModal] = useState(false);

    // const [evolutionInfo, setEvolutionInfo] = useState({});

    const addMove = (m) => {
        setSelectedMoves([...selectedMoves, m]);
    }

    const removeMove = (moveName) => {
        setSelectedMoves(selectedMoves.filter((m) => m.name !== moveName))
    }

    const checkAddToCart = () => {
        if(selectedMoves.length < 4)
            setConfirmationModal(true);
        else {
            addToCart();
        }
    }
    
    const addToCart = () => {
        props.setPokemonTeam(
            [
                ...props.pokemonTeam,
                {
                    name: props.pokemon.name,
                    dex: props.pokemon.dex,
                    sprite: isShiny ? props.pokemon.sprites.shiny : props.pokemon.sprites.normal,
                    level: level,
                    selectedMoves: selectedMoves,
                    price: P.getPokemonPrice(props.pokemon, level, isShiny, selectedMoves)
                }
            ]
        )
        handleClose();
    }

    useEffect(() => {
        if(level < 1)
            setLevel(1);
        else if(level > 100)
            setLevel(100);
    }, [level])

    const handleClose = () => {
        setLevel(1);
        setIsShiny(false);
        setSelectedMoves([]);
        setConfirmationModal(false)
        props.onClose();
    }

    return (
        // Dialog to decide the level and the moves of the selected Pokémon
        <Dialog
            maxWidth="md"
            open={props.open}
            onClose={handleClose}
        >
            <QuestionModal
                open={confirmationModal}
                onClose={() => setConfirmationModal(false)}
                approveFunction={addToCart}
                approveText="Yes"
                refuseFunction={() => setConfirmationModal(false)}
                refuseText="No"
            >
                <Typography variant="body1">
                    Are you sure about this? You have empty Move slot(s)...
                </Typography>
            </QuestionModal>
            <Grid container>
                {/* Left Side shows all Pokémon details */}
                <Grid container item md={7} justify="flex-start" alignItems="flex-start" direction="column">
                    <Grid item style={{alignSelf:"center"}}>
                        <Typography style={{textTransform: 'capitalize'}} variant="h6">
                            {`${props.pokemon.dex} - ${props.pokemon.name}`}
                        </Typography>
                    </Grid>
                    <Grid container item justify="center" alignItems="center" >
                        {props.pokemon.types?.map((type) => 
                            <Grid key={type} item>
                                <img height="16px" src={Type?.typeImgs[type]} alt={type} />
                            </Grid>
                        )}
                        {props.pokemon?.details?.isLegendary &&
                        <Grid item>
                            <Typography variant="caption">Legendary</Typography>
                        </Grid>
                        }
                    </Grid>
                    <Grid item style={{alignSelf:"center"}}>
                        <img
                            src={isShiny ? props.pokemon.sprites?.shiny : props.pokemon.sprites?.normal} 
                            alt={`${props.pokemon.name}`}>
                        </img>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{`${props.pokemon?.details?.flavorText}`}</Typography>
                    </Grid>
                    <br/>
                    {props.pokemon?.details?.evolutions[0] &&
                        <Grid item>
                            <Typography variant="caption" style={{textTransform:"capitalize"}}>{`Next Evolution: ${props.pokemon?.details?.evolutions[0]}`}</Typography>
                        </Grid>
                    }
                    <Grid item>
                        <Typography variant="caption">{`H.:${props.pokemon?.details?.height * 10}cm - W.:${props.pokemon?.details?.weight/10}kg`}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">{`Growth Rate: ${props.pokemon?.details?.growthRate}`}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption" style={{textTransform:"capitalize"}}>{`Abilities: ${props.pokemon?.details?.abilities.join(`, `)}`}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption" style={{textTransform:"capitalize"}}>{``}</Typography>
                    </Grid>
                </Grid>
                {/* Right Side is where the user selects the desired options for his/her Pokémon to add to his team */}
                <Grid container item md={5}>
                    {/* is Shiny? What is the Pokémon's level? */}
                    <Grid container item xs={12} justify="flex-start">
                        {/* Ask if Pokémon is Shiny (it triple the final price if selected. Shiny are rare to breed, you know) */}
                        <Grid item xs={12}>
                            <Checkbox
                                checked={isShiny}
                                onChange={(e) => setIsShiny(e.target.checked)}
                                color="primary"
                            />
                            <Typography variant="caption">Shiny</Typography>
                        </Grid>
                        {/* You choose the level of the Pokemon. Each level adds 10% of Base Experience on the final price. Convenient, huh? */}
                        <Grid item  xs={12}>
                            <Typography variant="caption">Level:</Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="center" justify="space-between">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={(e) => setLevel(level-10)}
                                >
                                    <Typography variant="caption">-10</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={(e) => setLevel(level-1)}
                                >
                                    <Typography variant="caption">-1</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography>{`${level}`}</Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={(e) => setLevel(level+1)}
                                >
                                    <Typography variant="caption">+1</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={(e) => setLevel(level+10)}
                                >
                                    <Typography variant="caption">+10</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* What moves will it learn? */}
                    <Grid container item xs={12} justify="flex-start" direction="column">
                        {/* Ok, now its the time you need to choose 4 moves for your Pokémon! TM costs money, watch out! */}
                        <Grid item>
                            <Typography variant="body2">{`${selectedMoves.length}/4 Moves Selected`}</Typography>
                        </Grid>
                        <Grid container item style={{overflowY:"auto", maxHeight:"40vh"}}>
                            {/* Initial Moves */}
                            <Grid item xs={12}>
                                <Typography variant="body1">Inital Moves:</Typography>
                            </Grid>
                            {props.pokemon.moves?.initialMoves.map((m) => {
                                return (
                                    <MoveCard move={m} pokemonLevel={level} addMove={addMove} removeMove={removeMove} selectedMoves={selectedMoves.length} />
                                )
                            })}
                            {/* Learned Moves */}
                            <Grid item>
                                <Typography variant="body1">Learned Moves:</Typography>
                            </Grid>
                            {props.pokemon.moves?.learnedMoves.map((m) => {
                                return (
                                    <MoveCard move={m} pokemonLevel={level} addMove={addMove} removeMove={removeMove} selectedMoves={selectedMoves.length} />
                                )
                            })}
                            {/* TM Moves */}
                            <Grid item>
                                <Typography variant="body1">TM Moves:</Typography>
                            </Grid>
                            {props.pokemon.moves?.TMMoves.map((m) => {
                                return (
                                    <MoveCard move={m} pokemonLevel={level} addMove={addMove} removeMove={removeMove} selectedMoves={selectedMoves.length} />
                                )
                            })}
                        </Grid>
                    </Grid>
                    {/* Now let's check the final price... */}
                    <Grid container item xs={12} justify="flex-end">
                        <Grid container item xs={12} justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography>
                                {`Final Price: $${P.getPokemonPrice(props.pokemon, level, isShiny, selectedMoves)}`}
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={checkAddToCart}
                                disabled={props.pokemonTeam.length >= 6}
                            >
                                <Typography style={{textTransform: 'capitalize'}} variant="caption">
                                    {props.pokemonTeam.length >= 6 ? `Team is full!` : `I choose you!`}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default PokemonDialog;
