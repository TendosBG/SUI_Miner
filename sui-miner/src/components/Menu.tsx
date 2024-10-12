import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Assurez-vous de créer un fichier CSS pour styliser le menu

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/success">Success</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Menu;