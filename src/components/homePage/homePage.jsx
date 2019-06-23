import React from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        paddingTop: '2%',
        marginLeft: '4%',
        marginRight: '12%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginTop: '10%',
        },
    },
    intro: {
        position: 'relative',
        flex: 1.2,
        paddingRight: '15px',
        paddingTop: '4%',
        padding: '5px',
        fontSize: '4.2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem',
        },
    },
    para: {
        position: 'relative',
        zIndex: 1,
        paddingTop: '7%',
        fontSize: '20px',
        lineHeight: '33px',
        fontStyle: 'normal',
        fontWeight: '300',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10%',
            fontSize: '20px',
            lineHeight: '33px',
            fontStyle: 'normal',
            fontWeight: '300',
        },
    },
    sectionHeading: {
        paddingBottom: '10%',
        zIndex: 0,
        height: '40px',
        position: 'relative',
        top: '-35%',
        left: '-45%',
        fontWeight: 'bold',
        fontSize: '30rem',
        color: '#2a2930',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    imageSection: {
        flex: 0.8,
        paddingTop: '4%',
        paddingLeft: '4%',
        padding: '5px',
    },
    image: {
        height: 'auto',
        maxWidth: '100%',
        cursor: 'pointer',
        // boxShadow: '25px 20px 15px #2a2931'
    },
});

const MainPage = (props) => {
    const { classes } = props;
    return (
        <section className={classes.root}>
            <div className={classes.intro}>
                <Typography align="left" className={classes.intro} variant="h1" color="textPrimary">
                    <span style={{color: '#53f6c7'}}>&lt;b&gt;</span>
                    Hello<span style={{color: '#53f6c7'}}>&lt;/b&gt;</span> <span style={{color: '#53f6c7'}}>I'm Kunal, </span>
                    Full Stack Developer
                </Typography>
                {/* <Typography align="left" className={classes.para} variant="p" color="textPrimary">
                    A WordPress website about Hypergiant company which creates hyper-efficient and scalable. The careful have the as a spirits and client ihave by assistant have took initial sentences omens.
                </Typography> */}
                {/* <Typography align="left" className={classes.sectionHeading} variant="h1">
                    &gt;&lt;
                </Typography> */}
            </div>
            <div className={classes.imageSection}>
                {/* <Tilt className="Tilt" options={{ max : 5 }}> */}
                    <img className={classes.image} src="./Images/me.png" alt="myphoto"/>
                {/* </Tilt> */}
            </div>
        </section>
    )
}
export default withStyles(styles)(MainPage);