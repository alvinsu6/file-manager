import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react"
import {getAuth, signOut} from 'firebase/auth'
 function AccountMenu() {
  const navigate = useNavigate()
    //state
    const [user, setUser] = useState()
    //cycle
    useEffect (() => {
  setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    //logout
    const handleLogOut = () => {
      const auth = getAuth()
      signOut(auth)
      .then( () =>{
        localStorage.clear()
        navigate("/")
        
      })
      .catch((err )=> {
        console.log(err)
      })
    }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{  alignItems:'start', marginLeft:'800px',   }}>
 
        <Tooltip title="Account settings">
          <IconButton
          style={{marginRight:'25px', minWidth:'200px'}}
            onClick={handleClick}
            size="small"
            // sx={{ ml: 100 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >

          <h3 style={{fontSize:'20px', minWidth:'400px', color:'black'}}>welcome {user?.email } </h3> 
            
            <Avatar  src={user ?.photoURL} /> 
            
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
     
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(,0,0,0.32))',
            mt: 1.5,
            bgcolor: 'rgba(255, 255, 255, 0.723);',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem color='red' onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <div className='celeng'>
        <MenuItem onClick={handleClose}>
          
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
         Settings
        </MenuItem>
        <MenuItem  onClick={handleClose}>
          <ListItemIcon >
            <Logout  fontSize="small" />
          </ListItemIcon>
        <Link onClick={handleLogOut}> Logout</Link>
        </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
}
export default AccountMenu