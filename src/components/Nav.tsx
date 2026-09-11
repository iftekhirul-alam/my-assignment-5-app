import React from 'react';
import Logo from "../assets/logo-text.png"
import '../index.css'

const Nav = () => {
    return (
        <nav className='sticky flex navbar bg-amber-50 justify-between items-center container mx-auto'>
            <img src={Logo} alt="Logo in nav" />

            <ul className='flex gap-6' items-center>
                <li className='hover:text-fuchsia-600 active:text-'>Home</li>
                <li className='hover:text-fuchsia-600'>Technologies</li>
                <li className='hover:text-fuchsia-600'>Projects</li>
                <li className='hover:text-fuchsia-600'>About</li>
                <li className='hover:text-fuchsia-600'>Contact</li>
            </ul>
            <div className='flex gap-2 items-center'>
                <button className="btn btn-active rounded-4xl">Sign In</button>
                <button className="btn btn-secondary rounded-4xl">Sign Up</button>
            </div>

        </nav>
    );
};

export default Nav;