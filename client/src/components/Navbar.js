import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container">
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>Listings</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/create'>Create</Link>
                </li>
            </ul>
            </div>
           
        </nav>
     );
}
 
export default Navbar;