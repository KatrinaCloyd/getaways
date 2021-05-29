import React, { useState } from 'react';
import { logInUser } from '../../services/usersApi';
import style from '../app/app.css';
import Loading from '../app/Loading';

export default function Login({ user, setUser }) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = (e) => {
        e.preventDefault();
        setLoading(true);
        logInUser(email, password)
            .then(setUser)
            .finally(() => setLoading(false));
    }

    if (loading) return <Loading />

    if (user && user.username) return (
        <div className={style.logPage}>
            <h2>Hi {user.username}!</h2>
            <p>Looks like you are already logged in! </p>
            <p>Click the Home button to browse our destinations.</p>
        </div>
    );

    if (user && user.message) return (
        <div className={style.logPage}>
            <h2>Something went wrong.</h2>
            <p>{user.message}</p>
            <p>Click the Log In link in the header to try again.</p>
        </div>
    );

    return (
        <div className={style.logPage}>
            <h3>Oh Hullo! Welcome Back!</h3>
            <form onSubmit={handleLogIn} className={style.searchBox}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    role="textbox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="text"
                    role="textbox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button aria-label="login">Log In!</button>
            </form>
        </div>
    )
};
