import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-fluid bg-light">
            <div className='container d-flex flex-wrap justify-content-md-between p-3 justify-content-evenly text-center'>
                <h2 className='px-5'>Test Yourself</h2>
                <nav className="nav-items d-flex justify-content-end">
                    <NavLink to={'/'} className='default'>Topics</NavLink>
                    <NavLink to={'/statistics'} className={({ isActive }) => isActive ? 'active_item' : undefined}>Statistics</NavLink>
                    <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'active_item' : undefined}>Blog</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;