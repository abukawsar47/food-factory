import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
import { NavLink } from "react-router-dom"

const Navbar = ({ children }) => {

    /*   const menuItems = <>
  
      </> */
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-100 sticky shadow-sm top-0 z-50 lg:px-20">
                    <div className="flex-1 px-2 mx-2">
                        <img
                            className='md:w-50 w-40'
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-3">
                            <li><NavLink
                                to="/"
                                className='rounded-lg  hover:btn-secondary duration-1000 font-bold '
                            >Home</NavLink>
                            </li>

                            <li><NavLink
                                to="/all-foods"
                                className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                            >Foods</NavLink></li>

                            <li><NavLink
                                to="/about"
                                className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                            >About</NavLink></li>

                            <li><NavLink
                                to="/contact"
                                className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                            >Contact</NavLink></li>

                            <li><NavLink
                                to="/login"
                                className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                            >Login</NavLink></li>

                            <li class='dropdown dropdown-hover dropdown-end '>
                                <label
                                    tabIndex='0'
                                    class='btn btn-primary btn-outline rounded-lg hover:btn-secondary duration-1000 font-bold '
                                >
                                    BOOK NOW
                                </label>
                                <ul
                                    tabIndex='0'
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
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
                    <li><NavLink
                        to="/"
                        className='rounded-lg  hover:btn-secondary duration-1000 font-bold '
                    >Home</NavLink>
                    </li>

                    <li><NavLink
                        to="/all-foods"
                        className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                    >Foods</NavLink></li>

                    <li><NavLink
                        to="/about"
                        className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                    >About</NavLink></li>

                    <li><NavLink
                        to="/contact"
                        className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                    >Contact</NavLink></li>

                    <li><NavLink
                        to="/login"
                        className='rounded-lg hover:btn-secondary duration-1000 font-bold '
                    >Login</NavLink></li>
                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            BOOK NOW
                        </div>
                        <div className="collapse-content">
                            <li>
                                <NavLink to="" className='hover:btn-secondary duration-1000 font-bold'>Item 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="" className='hover:btn-secondary duration-1000 font-bold'>Item 2</NavLink>
                            </li>
                        </div>
                    </div>
                </ul>

            </div >
        </div >
    );
};

export default Navbar;