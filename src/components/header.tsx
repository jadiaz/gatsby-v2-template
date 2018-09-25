import React from 'react';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

const headerStyle = createStyles({
    appBar: {
        position: "absolute",
        border: "0",
    },
    tbContainer: {
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
    headerContainer: {
        backgroundColor: '#79888F',
        height: '45em',
    },
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF",
    },
});

interface HeaderProps extends WithStyles<typeof headerStyle> {}

const Header = (props: HeaderProps) => {
    const { classes } = props;

    return (
        <div className={classes.headerContainer}>
        <AppBar className={classes.transparent}>
            <Toolbar color="trans" className={classes.tbContainer}>
                <div>
                    <Typography variant="title" color="inherit">Brand</Typography>
                </div>
                <div>
                    <Button color="inherit">Nav Item</Button>
                    <Tooltip title="Sign in to use the app">
                        <Button variant="contained" color="secondary">Sign In</Button>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default withStyles(headerStyle)(Header);