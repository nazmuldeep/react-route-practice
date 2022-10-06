import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/friends'>Friends</Link>
            </div>
            <p>Common Header</p>
        </nav>
    );
};

export default Header;