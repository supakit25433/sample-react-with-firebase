import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const navStyle = {
        color: 'white'
    };

        return (
            <nav className='nav1'>
                <h3>Logo</h3>
                <ul className='navLink'>
                    <Link style={navStyle} to='/about'>
                        <li className=''>About</li>
                    </Link>
                    <Link style={navStyle} to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link style={navStyle} to='/login'>
                        <li>Login</li>
                    </Link>
                    <Link style={navStyle} to='/signup'>
                        <li>Sign Up</li>
                    </Link>
                </ul>
            </nav>
        );
}

export default Header