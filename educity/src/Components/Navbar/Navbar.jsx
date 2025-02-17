import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const ToggleMenu =()=>{
        setMobileMenu(!mobileMenu)
    }

    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <img src={logo} alt='logo img' className='logo'></img>
                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li><Link to = 'hero' smooth = "true" offset = {-50} duration = {500}>Home</Link></li>
                    <li><Link to = 'programs' smooth = "true" offset = {-260} duration = {500}>Program</Link></li>
                    <li><Link to = 'about' smooth = "true" offset = {-150} duration = {500}>About Us</Link></li>
                    <li><Link to = 'campus' smooth = "true" offset = {-260} duration = {500}>Campus</Link></li>
                    <li><Link to = 'testimonials' smooth = "true" offset = {-260} duration = {500}>Testimonials</Link></li>
                    <li><Link to = 'contact' smooth = "true" offset = {-260} duration = {500} className='btn'>Contact Us</Link></li>
                </ul>
                <img src={menu_icon} alt='menu' className='menu-icon' onClick={ToggleMenu}></img>
            </nav>
        </>
    )
}


export default Navbar