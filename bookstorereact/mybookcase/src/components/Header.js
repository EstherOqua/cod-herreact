import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    return (
        <React.Fragment>
            <div className="appheader"> 
            <h1 className="h1">My Bookcase.</h1>
            </div>
            <div className="nav-bar">
            <Link to="/" className="button">Home</Link>
            <Link to ="/bookcase" className="button">Bookcase</Link>
            <Link to ="/about" className="button">About</Link>
            <Link to ="/contact" className="button">Contact</Link>
            </div>
        </React.Fragment>
    );
};

export default Header;