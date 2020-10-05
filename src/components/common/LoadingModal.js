import React from 'react';
import { Dialog } from '@material-ui/core';
import loadingGif from '../../imgs/loading.gif'

function LoadingModal(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.close}
        >
            <img width="128px" src={loadingGif} alt="loading..." />
        </Dialog>
    );
}

export default LoadingModal;
