import React from 'react'
//importing styles
import {AppBar,Typography} from '@material-ui/core'
import useStyles from './NavBarStyle'
import memories from '../../images/memories.jpg'

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="icon" height="60" />
        </AppBar>
    )
}

export default NavBar
