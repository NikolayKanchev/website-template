import React from 'react';
import { useHistory } from "react-router-dom";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(() =>
  createStyles({
    loggedIn: {
      color: "#c62828",
      backgroundColor: "white",
      opacity: 0.7,
      padding: "0 8px 0 8px",
      borderRadius: "50%",
    },
    normal: {
        color: "white"
    },
    menu: {
        color: "white",
        marginTop: "8px",
    }
  }),
);

type Props = {
    buttonName: string,
    menuItems: Array<string>
}

const SimpleMenu = (props: Props) =>{
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { buttonName, menuItems } = props;
  const { loggedIn, normal, menu } = useStyles();
  let history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = (itemUrl: string) => {
    history.push(itemUrl);
    setAnchorEl(null);
  }

  return (
    <>
    <div>
      <span aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {buttonName.length === 1? 
          <h3 className={loggedIn}>{buttonName}</h3>: 
          (buttonName === "menu"? <div className={menu}><MenuIcon/></div> :
          <div className={normal}>{buttonName}</div>)
          }
      </span>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          {menuItems.map((item: string, index: number) => {
              const itemUrl = "/" + item.toLowerCase().replace(" ", "-");
              return(
                <MenuItem key={index} onClick={() => handleClickItem(itemUrl)}>{item}</MenuItem>
              )
          })}
      </Menu>
    </div>
    </>
  );
}

export default SimpleMenu;