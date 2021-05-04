import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
// import Navbar from 'react-bootstrap/Navbar';
import './style.css'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
    
export default function Navbar() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" color="inherit" onClick={handleClick} component={Link} >
            Sign In
        </Link>
        <Button color="inherit"  component={Link} to="/form">
            Form
        </Button>
        <Link color="inherit" to="/team" onClick={handleClick} component={Link}>
            Team Profile
        </Link>
        <Link color="inherit" to="/stats"  >
            Stats
        </Link>
        </Breadcrumbs>
    );
}

//Currently the handleclick event needs to be updating the 