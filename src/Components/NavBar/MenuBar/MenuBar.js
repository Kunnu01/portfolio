import React from 'react'
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import styleClasses from './MenuBar.module.css';
import Fade from '@material-ui/core/Fade';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faEnvelope, faCodeBranch, faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

const styles = theme => ({
    root: {
        display: 'block',
        marginTop: '25vh',
        // maxHeight: '70vh',
        width: '6%',
        position: 'fixed',
        height: '100vh',
        zIndex: '100',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        boxSizing: 'border-box',
    },
    listItem: {
        cursor: 'pointer',
    },
    tooltip: {
        position: 'relative',
        zIndex: 999,
    }
});

const MenuBar = (props) => {
    const { classes } = props;
    console.log(styleClasses.MenubarItems)

    const linkTo = (link) => {
        const { history } = props;
        history.push(link);
    }

    const getSecondarySideOptions = () => {
        const { handleSwitch } = props;
        return [
            {
                text: props.isLightTheme ? "Lights Off" : "Lights On",
                icon: props.isLightTheme ? <Fade in={props.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudMoon} size="2x" /></Fade> : <Fade in={!props.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudSun} size="2x" /></Fade>,
                switchMode: handleSwitch,
            },
        ];
    };

    const list = [
        {
            text: 'Home',
            icon: <FontAwesomeIcon icon={faHome} size="2x" />,
            link: '/',
        },
        {
            text: 'About',
            icon: <FontAwesomeIcon icon={faUserCircle} size="2x" />,
            link: '/about',
        },
        {
            text: 'Projects',
            icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />,
            link: '/projects',
        },
        {
            text: 'Blogs',
            icon: <FontAwesomeIcon icon={faMedium} size="2x" />,
            link: '/blogs',
        },
        {
            text: 'Contact',
            icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
            link: '/contact',
        },
    ];

    return (
        <div className={classes.root} >
            <List>
            {list.map(({text, icon, link}) => (
                <ListItem className={classes.listItem} key={text} alignItems="center"
                        onClick={() => linkTo(link)}
                    >
                    <Tooltip className={classes.tooltip} title={text} placement="right">
                        <ListItemIcon className={styleClasses.MenubarItems}>
                            {icon}
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
            ))}
            {getSecondarySideOptions().map(({ text, icon, switchMode }) => (
                <ListItem key={text} className={classes.listItem} onClick={() => {}}>
                <Tooltip className={classes.tooltip} title={text} placement="right">
                <ListItemIcon
                    onClick={switchMode} 
                    className={styleClasses.MenubarItems}
                >
                    {icon}
                </ListItemIcon>
                </Tooltip>
                </ListItem>
            ))}
            </List>
        </div>
    )
}

export default withStyles(styles)(withRouter(MenuBar));
