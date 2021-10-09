import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className='headr'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>LogIn</Link>
            {user?.email && <button onClick={logOut}> LogOut</button>}
        </div >
    );
};

export default Header;