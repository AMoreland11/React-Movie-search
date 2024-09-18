import React from 'react';
import './Navbar.css';
import NavLogo from '../assets/nav__logo.png';
import { House } from 'lucide-react';


const Navbar = () => {
    
  return (
    <section id="nav__bar">
        <div className="nav__container">
            <div className="row">
                <div className="nav">
                    <div className="nav__logo">
                        <img src={NavLogo} alt=''/>
                    </div>
                    <ul className="nav__lists">
                        <div className="nav__home"><a href="index.html"><House  /></a></div>
                        <button className="nav__sign-up">Sign up</button>
                        <button className="nav__log-in">Log in</button>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar
