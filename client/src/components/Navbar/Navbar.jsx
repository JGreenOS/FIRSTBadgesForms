import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css'


export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Issuer Menu
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Team Profile</MenuItem>
            <MenuItem onClick={handleClose}>Issuer Form</MenuItem>
            <MenuItem onClick={handleClose}>Stats</MenuItem>
        </Menu>
        </div>
    );
    }
