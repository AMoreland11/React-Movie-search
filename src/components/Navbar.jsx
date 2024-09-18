import React from 'react';
import './Navbar.css';
import NavLogo from '../assets/nav__logo.png';
import { House } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    
  return (
    <nav id="nav__bar">
        <div className="nav__container">
            <div className="row">
                <div className="nav">
                <div className="nav__home"><Link to="/"><House /></Link></div>
                    <ul className="nav__lists">
                        <button className="nav__sign-up"><Link to="/signup">Sign Up</Link></button>
                        <button className="nav__log-in"><Link to ="/login">Login</Link></button>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
