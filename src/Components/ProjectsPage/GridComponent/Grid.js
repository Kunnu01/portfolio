import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tilt from 'react-tilt';

const styles = theme => ({
    root: {
        display: 'flex',
        // flexWrap: 'wrap',
        marginTop: '5%',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        height: 'auto',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.3) 100%)',
    },
    icon: {
        color: 'white',
    },
    projects: {
        cursor: 'pointer',
        width: '200px',
        height: 'auto',
    }
});

const tileData = [
    {
        img: './Images/geekoconnector.JPG',
        title: 'GeekoConnector (MERN Stack)',
        author: 'author',
        featured: false,
    },
    {
        img: './Images/colorGame.JPG',
        title: 'Color Game (JavaScript)',
        author: 'author',
        featured: false,
    },
    {
      img: './Images/weatherApp.JPG',
      title: 'Weather App (Node.js)',
      author: 'author',
      featured: false,
  },
  {
    img: './Images/noteApp.JPG',
    title: 'Notes App (Node.js)',
    author: 'author',
    featured: false,
  },
  {
    img: './Images/patatp.png',
    title: 'Patatap Clone (JavaScript)',
    author: 'author',
    featured: false,
  },
  {
      img: './Images/mySketched.JPG',
      title: 'My Sketches (JavaScript)',
      author: 'author',
      featured: false,
  },
  {
        img: './Images/todoapp.JPG',
        title: 'Todo App (JavaScript)',
        author: 'author',
        featured: false,
    },
];
function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={270} spacing={24} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile className={classes.projects} key={tile.img} cols={tile.featured ? 3 : 0.6} rows={tile.featured ? 3 : 1}>
            <img
              src={tile.img}
              style={{objectFit: 'inherit', height: '100%', width: '100%', borderRadius: '3%'}} 
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
