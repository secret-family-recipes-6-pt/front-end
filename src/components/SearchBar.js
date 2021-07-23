import React from 'react';
import { InputBase, IconButton, Paper, Select, MenuItem, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '40%',
    },

    dropdown: {
        padding: "0 .5rem",
        border: "none",
    },

    divider: {
        margin: "0 .3rem",
    },

    searchInput: {
        width: "100%",
    }

})

export default function SearchBar() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root} variant="outlined" >
            <Select autoWidth="true" defaultValue="all" placeholder="ALL Meals" className={classes.dropdown} onChange={"change"}>
                <MenuItem value="all">All Meals</MenuItem>
                <MenuItem value="breakfast">Breakfast</MenuItem>
                <MenuItem value="lunch">Lunch</MenuItem>
                <MenuItem value="dinner">Dinner</MenuItem>
                <MenuItem value="dessert">Dessert</MenuItem>
                <MenuItem value="snacks">Snacks</MenuItem>
            </Select>
            <Divider orientation="vertical" flexItem className={classes.divider}/>
            <InputBase placeholder="Search" className={`${classes.searchInput}`}/>
        </Paper>
    )
}