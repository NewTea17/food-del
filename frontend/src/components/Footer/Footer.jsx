import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam rerum aut recusandae obcaecati ullam porro tempore voluptatem dolore corporis.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook icon" />
                        <img src={assets.twitter_icon} alt="Twitter icon" />
                        <img src={assets.linkedin_icon} alt="Linkedin icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+380123456789</li>
                        <li>example@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 © Jeen.com. All Right Reserved.</p>
        </footer>
    )
}

export default Footer;