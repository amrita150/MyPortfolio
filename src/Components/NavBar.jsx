import React from 'react';

const NavBar = () => {
    return (
       <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[50%]  bg-white/10 backdrop-blur-md text-white rounded-xl shadow-md px-8 py-3 z-50">
            <ul className="flex justify-between items-center gap-4">
                <li className='text-white text-sm font-medium hover:text-pink-400 cursor-pointer transition-all duration-300'> About Me </li>
                <li className='text-white text-sm font-medium hover:text-pink-400 cursor-pointer transition-all duration-300'> Skills </li>
                <li className='text-white text-sm font-medium hover:text-pink-400 cursor-pointer transition-all duration-300'> Education </li>
                <li className='text-white text-sm font-medium hover:text-pink-400 cursor-pointer transition-all duration-300'> Projects </li>
                <li className='text-white text-sm font-medium hover:text-pink-400 cursor-pointer transition-all duration-300'> Contact </li>
                <li className='text-white text-sm font-medium hover:text-pink-400 cursor-pointer transition-all duration-300'> Resume </li>
            </ul>
        </nav>
    );
};

export default NavBar;