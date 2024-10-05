import React, { useState } from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import NavLinks from "../navigation/NavLinks";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const MenuItems = [
        { name: 'Home', href: '#' },
        { name: 'Properties', href: '#' },
        { name: 'Agents', href: '#' },
        { name: 'Blog', href: '#' },
      ];
    return (
        <header className="fixed top-0 right-0 z-10 flex-wrap justify-between w-full h-24 px-10 animate-fade-down animate-delay-300 animate-once md:flex">
            {/* Logo */}
            <Logo className="flex items-center justify-center w-16 h-16 my-auto"></Logo>

            <div className="sm:ml-auto block md:hidden text-end mt-[-40px]">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-8 h-8 text-cyan-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            <ul className={`${
                    isMenuOpen ? "block absolute z-10 right-10" : "hidden  text-xl "
                } md:flex items-center justify-between font-bold text-cyan-600 uppercase text-end h-full`}>
                {/* Dynamic Navigation Links */}
                <NavLinks 
                    navItems={MenuItems} 
                    className="mb-2 md:mx-10 md:mb-0"
                />
                
                {/* Mobile Login Link */}
                {isMenuOpen && (
                    <li className="block md:hidden">
                    <a href="#" className="font-semibold uppercase text-cyan-600">
                        Login
                    </a>
                    </li>
                )}
                </ul>
            {/* Login Button (hidden on small screens) */}
            <Button onClick={() => console.log('Button clicked') }>Login</Button>
        </header>
    );
};

export default Header;
