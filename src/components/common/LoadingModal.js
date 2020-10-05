import React from 'react';
import { Dialog } from '@material-ui/core';

function LoadingModal(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.close}
        >
            <img width="128px" src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif" alt="loading..." />
        </Dialog>
    );
}

export default LoadingModal;
