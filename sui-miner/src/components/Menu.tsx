import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Assurez-vous de créer un fichier CSS pour styliser le menu

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <h1>SUI Miner</h1>
            <ul>
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/">Success</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Menu;