import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Checkbox, Tooltip } from '@material-ui/core';
import P from '../../helper/pokeHelper'
import Type from '../../helper/pokeTypeHelper'

function MoveCard(props) {

    const [moveInfo, setMoveInfo] = useState({});
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        if (!selected) { //false -> true
            props.addMove(moveInfo);
        } else { //true -> false
            props.removeMove(moveInfo.name);
        }
        setSelected(!selected);
    }

    //You cannot have selected an disabled move option. If its selected and dont have level anymore, it'll be removed from the move list.
    useEffect(() => {
        if(props.pokemonLevel < props.move.level && selected)
            handleClick();
    }, [props.pokemonLevel])

    useEffect(() => {
        P.getMove(props.move?.url)
        .then((m) => {
            setMoveInfo({
                name: m.name,
                type: m.type.name,
                level: props.move.level,

                pp: m.pp,
                accuracy: m.accuracy,
                power: m.power,

                price: props.move.level === 0 ? (m.accuracy + m.power + m.pp) : 0
            })
        })
    }, [props.move])

    return (
        <Grid item xs={12}>
            <Tooltip 
                title={
                    <Typography variant="caption">
                        {`Power:${moveInfo.power || `-`} PP:${moveInfo.pp || `-`} Accuracy:${moveInfo.accuracy || `-`}`}
                    </Typography>
                }
                placement="left"
            >
                <Button
                    variant="contained"
                    fullWidth
                    disabled={(props.pokemonLevel < props.move.level) || (props.selectedMoves === 4 && !selected)}
                    onClick={() => handleClick()}
                >
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Checkbox 
                                checked={selected} 
                                color="primary"
                            />
                            <img height="16px" src={Type?.typeImgs[moveInfo.type]} alt={moveInfo.type} />
                            <Typography variant="caption">{moveInfo.name}</Typography>
                        </Grid>
                        {moveInfo.level > 1 &&
                            <Grid item>
                                <Typography variant="caption" style={{textTransform: 'capitalize'}}>Lvl:{moveInfo.level}</Typography>
                            </Grid>
                        }
                        {props.move.level === 0 &&
                            <Grid item>
                                <Typography variant="caption">${moveInfo.price}</Typography>
                            </Grid>
                        }
                    </Grid>
                </Button>
            </Tooltip>
        </Grid>
    );
}

export default MoveCard;
