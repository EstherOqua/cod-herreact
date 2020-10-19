import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <React.Fragment>
            <h1>My BookCase</h1>
            <Link to="/" className="coral-button">Home</Link>
            <Link to ="/bookcase" className="coral-button">Book Case</Link>
            <Link to ="/about" className="coral-button">About</Link>
        </React.Fragment>
    );
};

export default Header;