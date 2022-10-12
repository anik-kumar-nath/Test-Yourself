import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-fluid bg-secondary">
            <div className="container d-flex justify-content-md-between align-items-center flex-md-row flex-column p-2">
                <div className="logo">
                    <h2 className='text-bg-success p-3 bolder'>Test Yourself</h2>
                </div>
                <div className="nav-items d-flex justify-content-md-end justify-content-around">
                    <NavLink role="button" to={'/'} className='default p-2 mx-2 btn btn-primary'>Topics</NavLink>
                    <NavLink role="button" to={'/statistics'} className={`p-2 mx-2 btn btn-outline-info bolder ${({ isActive }) => isActive ? 'active' : undefined}`}>Statistics</NavLink>
                    <NavLink role="button" to={'/blog'} className={`p-2 mx-2 btn btn-outline-info bolder ${({ isActive }) => isActive ? 'active' : undefined}`}>Blog</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;