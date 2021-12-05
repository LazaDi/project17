import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return <div>
        <nav className="navbar">
            <ul className="navlinks">
                <li><Link to="/me">My profile</Link></li>
                <li><Link to="/user">User profile search</Link></li>
            </ul>
        </nav>
    </div>
}

export default Navbar;