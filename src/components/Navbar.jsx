import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const toggleNavbar = () => {
        setOpen(!isOpen);
    }
    return (
        <nav className="py-8 ">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="text-white text-3xl font-bold tracking-widest">
                    Logo
                </div>

                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-gray-300 font-bold hover:text-white transition duration-300">
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 font-bold hover:text-white transition duration-300">
                        About
                    </a>
                    <a href="#services" className="text-gray-300 font-bold hover:text-white transition duration-300">
                        Services
                    </a>
                    <a href="#contact" className="text-gray-300 font-bold hover:text-white transition duration-300">
                        Contact
                    </a>
                </div>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button className='cursor-pointer' onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='fixed right-0 z-10 bg-neutral-900 w-full py-20 h-6 flex flex-col justify-center items-center space-y-3 lg:hidden '>
                    <a href="#home" className="text-gray-300 hover:text-orange-700 hover:cursor-pointer font-bold transition duration-300">
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-orange-700 hover:cursor-pointer font-bold transition duration-300">
                        About
                    </a>
                    <a href="#services" className="text-gray-300 hover:text-orange-700 hover:cursor-pointer font-bold transition duration-300">
                        Services
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-orange-700 hover:cursor-pointer font-bold transition duration-300">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
