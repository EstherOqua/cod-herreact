import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <React.Fragment>
            <h1 className="h1">My Bookcase</h1>
            <Link to="/" className="button">Home</Link>
            <Link to ="/bookcase" className="button">Book Case</Link>
            <Link to ="/about" className="button">About</Link>
        </React.Fragment>
    );
};

export default Header;