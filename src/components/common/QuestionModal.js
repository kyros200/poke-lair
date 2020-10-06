import React from 'react';
import { Button, Dialog, Grid, Typography } from '@material-ui/core';

function QuestionModal(props) {
    return (
        <Dialog
            maxWidth="sm"
            open={props.open}
            onClose={props.onClose}
        >
            <Grid container direction="column">
                <Grid item style={{margin:"30px"}}>
                    <Typography align="center">{props.children}</Typography>
                </Grid>
                <Grid container item justify="space-between">
                    {props.refuseFunction && props.refuseText && 
                        <Grid item style={{margin:"12px"}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={props.refuseFunction}
                            >
                                {props.refuseText}
                            </Button>
                        </Grid>
                    }
                    {props.approveFunction && props.approveText && 
                        <Grid item style={{margin:"12px"}}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={props.approveFunction}
                            >
                                {props.approveText}
                            </Button>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Dialog>
    );
}

export default QuestionModal;
