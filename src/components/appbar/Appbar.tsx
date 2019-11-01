import React from 'react';
import { useHistory } from "react-router-dom";
import Menu from '../../components/menu/Menu';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Tabs, Tab } from '@material-ui/core';
import './Appbar.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    brand: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    hidden: {
        visibility: "hidden"
    },
    login: {
      textDecoration: 'none',
      color: 'inherit'
    },
    displayNone: {
      display: "none"
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const menuItems = [ "Why Us", "Features", "Plans", "Stories", "Resources" ];


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    const itemUrl = "/" + menuItems[newValue - 1].toLowerCase().replace(" ", "-");
    history.push(itemUrl);
  };

  const handleClick = () => {
    setValue(0);
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <div className="mobile-menu">
              <Menu buttonName={"menu"} menuItems={menuItems}/>
            </div>
            <Typography className={classes.brand}>
              <Button color="inherit" onClick={handleClick}>Brand</Button>
            </Typography>
            <Typography variant="h6" className={classes.title}></Typography>
            <div className="tabs">
              <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              centered
              >
                  <Tab label="Home" className={classes.displayNone}/>
                  { menuItems.map( (item, index: number) => <Tab key={index}  label={item} /> ) }
              </Tabs>
            </div>
            
          <Button color="inherit" className={classes.hidden}>Hidden </Button>
          <Button color="inherit" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
