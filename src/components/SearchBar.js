import React from 'react';
import { InputBase, IconButton, Paper} from '@material-ui/core';
import { createStyles } from '@material-ui/styles'

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        
    }
}))

export default function SearchBar() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase placeholder="Search" />
        </Paper>
    )
}