import React from 'react';
import logo from "./assets/logo.svg"
import Nav from './NavBar/Nav';
import { Link } from 'react-router-dom';

function Header() {
    const navigateHome = () => {
        window.location.href = "#";
    }

    return (
        <header className='fixed z-50 left-0 top-0 h-24 w-screen box-border px-6 lg:px-14 flex justify-between items-center'>
            <Link to="/">
                <img src={logo} onClick={navigateHome} alt="logo" className='relative z-[52] w-12 lg:w-16 cursor-pointer' />
            </Link>
            <Nav />
        </header>
    );
}

export default Header;
