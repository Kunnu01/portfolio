import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
    root: {
        display: 'flex',
        marginTop: '5%',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '85vw',
        height: 'auto',
        transform: 'translateZ(0)',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
        },
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.3) 100%)',
        [theme.breakpoints.down('sm')]: {
          height: '40%',
        },
    },
    icon: {
        color: 'white',
    },
    projects: {
        cursor: 'pointer',
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
          height: '20%',
        },
    },
});

const tileData = [
    {
        img: './Images/Burger.png',
        title: 'Burger App',
        link: 'https://github.com/Kunnu01/burger-app',
    },
    {
        img: './Images/geekoconnector.JPG',
        title: 'GeekoConnector',
        link: 'https://github.com/Kunnu01/GeekoConnector',
    },
    {
        img: './Images/Snake.png',
        title: 'Snake Game',
        link: 'https://github.com/Kunnu01/snake-game',
    },
    {
        img: './Images/colorGame.JPG',
        title: 'Color Game',
        link: 'https://github.com/Kunnu01/Color-Game',
    },
    {
        img: './Images/weatherApp.JPG',
        title: 'Weather App',
        link: 'https://github.com/Kunnu01/Weather-App',
    },
    {
        img: './Images/noteApp.JPG',
        title: 'Notes App',
        link: 'https://github.com/Kunnu01/Node-Note-App',
    },
    {
        img: './Images/patatp.png',
        title: 'Patatap Clone',
        link: 'https://github.com/Kunnu01/patatap_clone',
    },
    {
        img: './Images/mySketched.JPG',
        title: 'My Sketches',
        link: 'https://github.com/Kunnu01/sketch_and_code',
    },
    {
        img: './Images/todoapp.JPG',
        title: 'Todo App',
        link: 'https://github.com/Kunnu01/ToDo-List-App',
    },
];

function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" cols={2} spacing={24} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile component="a" href={tile.link} target="_blank" col="1" className={classes.projects}  key={tile.img}>
            <img
              src={tile.img}
              style={{height: '100%', width: '100%', borderRadius: '3%'}} 
              alt={tile.title} 
              />
            <GridListTileBar
              title={tile.title}
              color="#53f6c7"
              titlePosition="bottom"
              className={classes.titleBar}
              />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);
