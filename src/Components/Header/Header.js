import React from 'react';
import './Header.css';
import Logo from '../../images/ICON/Logo.png';
import {Link} from "react-router-dom"

function Header() {
    return (
        <nav className="header">
           <Link to='/'> <img className="header__image" src={Logo} alt=""/></Link>
            <div className="header__items">
                <Link to='/' className="nav__link">HOME</Link>
                <Link to='/courses' className="nav__link">COURSES</Link>
                <Link to='/teachers'  className="nav__link">TEACHERS</Link>
                <Link to='/testimonials'  className="nav__link">TESTIMONIALS</Link>
            </div>
        </nav>
    )
}

export default Header
