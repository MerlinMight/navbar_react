import React from "react";
import '../navbar.css';
import{FaFacebookF ,FaTwitter , FaInstagramSquare  } from "react-icons/fa"
import logoImage from '../logo.png'; 


function Navbar(){
    return(
       <nav className='nav'>
        <a href ="#" className = "nav_brand">
        <img width="55px" src={logoImage} alt="Logo" className="logo" />
        </a>
        <ul className = "nav_menu">
            <li className="nav_items"><a href="#" className="nav_link">AboutUs</a></li>
            <li className="nav_items"><a href="#" className="nav_link">Workshop</a></li>
            <li className="nav_items"><a href="#" className="nav_link">Blog</a></li>
            <li className="nav_items"><a href="#" className="nav_link">ContactUs</a></li>
            <li className="nav_items"><a href="#" className="nav_link"><FaFacebookF/></a></li>
            <li className="nav_items"><a href="#" className="nav_link"><FaTwitter/></a></li>
            <li className="nav_items"><a href="#" className="nav_link"><FaInstagramSquare className/></a></li>
            <li className="nav_items"><a href="#" className="navlink">Register/Login</a></li>

        </ul>
       </nav>
    );
}
export default Navbar;