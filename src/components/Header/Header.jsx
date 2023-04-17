import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
        return (
                < nav className='m-12'>
                 <Link className='mr-8 font-bold' to = "/">Home</Link>
                 <Link className='mr-8 font-bold' to = "/loging">Loging</Link>
                 <Link className='mr-8 font-bold' to = "/register">Register</Link>
                 <Link className='mr-8 font-bold' to = "/registertw">RegisterTW</Link>
                </ nav>
        );
};

export default Header;