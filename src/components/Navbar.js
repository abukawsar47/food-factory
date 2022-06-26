import React from 'react';
import logo from '../assets/images/logo.png'
import { NavLink } from "react-router-dom"

const Navbar = ({ children }) => {
    const menuItems = <>
        <li><NavLink to="/" className='rounded-lg '>Home</NavLink></li>
        <li><NavLink to="/foods" className='rounded-lg '>Foods</NavLink></li>
        <li><NavLink to="/about" className='rounded-lg '>About</NavLink></li>
        <li><NavLink to="/contact" className='rounded-lg '>Contact</NavLink></li>
        <li><NavLink to="/login" className='rounded-lg '>Login</NavLink></li>
        <li class='dropdown dropdown-hover dropdown-end'>
            <label
                tabindex='0'
                class='btn btn-primary btn-outline rounded-lg'
            >
                BOOK NOW
            </label>
            <ul
                tabindex='0'
                class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </li>
    </>
    return (
        <div class="drawer ">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar ">
                    <div class="flex-1 px-2 mx-2">
                        <img
                            className='md:w-60 w-40'
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-3">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
                    {menuItems}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;