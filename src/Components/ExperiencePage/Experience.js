import React from 'react'
import { withStyles, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            margin: '10%',
            marginTop: '12%',
        },
    },
    list: {
        margin: '0 8vw',
        [theme.breakpoints.down('sm')]: {
            margin: '3% -4%',
        },
    },
    duration: {
        color: '#8892B0'
    },
    desc: {
        margin: '0 3vw',
        display: 'flex',
    },
});

const Experience = (props) => {
    const { classes } = props;

    const experiences = [
        {
            company: 'Pesto Tech',
            role: 'Student',
            duration: 'Jun 2019 - Present',
            desc: [
                'Desc 1',
                'Desc 2',
            ],
        },
        {
            company: 'Successive Technologies',
            role: 'Software Developer',
            duration: 'Jan 2019 - Jun 2019',
            desc: [
                'Desc 1',
                'Desc 2',
            ],
        },
        {
            company: 'NodeExperts',
            role: 'Full Stack Developer',
            duration: 'Jan 2019 - Jun 2019',
            desc: [
                'Desc 1',
                'Desc 2',
            ],
        },
        {
            company: 'Beryl India',
            role: 'Full Stack Developer Intern',
            duration: 'Jun 2018 - Sep 2018',
            desc: [
                'Desc 1',
                'Desc 2',
            ],
        },
    ]
    
    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.heading} color="textSecondary">
                Experience
            </Typography>

            <List className={classes.list}>
                {
                    experiences.map(({company, role, duration, desc}) => (
                        <ListItem>
                            <ListItemText>
                                <Typography variant="h6" color="textPrimary">
                                    {role} @ <span style={{color: '#53f6c7'}}>{company}</span>
                                </Typography>
                                <Typography paragraph className={classes.duration}>
                                    {duration}
                                </Typography>
                                {/* <List> */}
                                    {
                                        desc.map(points => (
                                            // <ListItem key={points}>
                                            <div className={classes.desc}>
                                                <ListItemIcon style={{color: '#53f6c7'}}>
                                                    <SendIcon style={{fontSize: '1em'}} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    styles={{'white-space': 'nowrap'}}
                                                    primary={points}
                                                />
                                            </div>
                                            // </ListItem>
                                        ))
                                    }
                                {/* </List> */}
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(Experience);
