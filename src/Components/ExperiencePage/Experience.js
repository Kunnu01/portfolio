import React from 'react'
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            margin: '10%',
            marginTop: '12%',
        },
    },
});

const Experience = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.heading} color="textSecondary">Experience</Typography>
        </div>
    )
}

export default withStyles(styles)(Experience);
