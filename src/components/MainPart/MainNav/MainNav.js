import React, {useEffect} from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Cabin,sans-serif',  
    width: "100%",
    position: 'fixed',
    bottom: 0,
    background: "#171717",
    color: "#d3d3d3",
    zIndex: 1
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();

  useEffect(() => {
      if(value === 0) history.push("/");
      else if(value === 1) history.push("/Movies");
      else if(value === 2) history.push("/TVShows");
      else if(value === 3) history.push("/Search")
      else if(value === 4) history.push("/About")
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color:"#DDDDDD"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color:"#DDDDDD"}} label="Movies" icon={<TheatersIcon />} />
      <BottomNavigationAction style={{color:"#DDDDDD"}} label="TV-Shows" icon={<TvIcon />} />
      <BottomNavigationAction style={{color:"#DDDDDD"}} label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction style={{color:"#DDDDDD"}} label="About" icon={<InfoIcon />} />
    </BottomNavigation>
  );
}