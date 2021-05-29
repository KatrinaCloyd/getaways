import React from 'react';
import style from './app.css';
import { Link } from 'react-router-dom';

export default function Header({ user }) {

    return (
        <div className={style.headerBar}>
            <h1>We Need a Getaway!</h1>
            <div className={style.linksList}>
                <Link to={'/'}>
                    Home
                </Link>
                {(user && user.username) &&
                    <Link to={'/logout'}>
                        Log Out
                </Link>}
                {(!user || user.message) && <>
                    <Link to={'/register'}>
                        Sign Up
                </Link>
                    <Link to={'/login'}>
                        Log In
                    </Link> </>}
            </div>
        </div>
    )
};
