import React from 'react';
import Logo from "../assets/logo-text.png"
import Bars from "../assets/bars logo.png"
import '../index.css'

const Nav = () => {
    return (
        <nav className='sticky top-0 z-50 flex navbar bg-amber-50 justify-between items-center container mx-auto px-4'>
            <div className="flex items-center gap-4">
                <img className='h-8 block md:hidden text-slate-800 focus:outline-none text-xl p-1" aria-label="Open Menu' src={Bars} alt="" />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                <img className='h-8 object-contain' src={Logo} alt="Logo in nav" />
            </div>

            <ul className='hidden md:flex gap-6'>
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