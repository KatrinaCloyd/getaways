import React, { useState, useEffect } from 'react';
import { registerNewUser } from '../../services/usersApi';
import style from '../app/app.css';
import Loading from '../app/Loading';

export default function SignUp() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);
        registerNewUser(username, email, password)
            .then(setUser)
            .finally(() => setLoading(false));
    }

    const logedInUser = localStorage.getItem('USER');
    if (logedInUser) return (
        <div className={style.logPage}>
            <h2>Hi {logedInUser}!</h2>
            <p>Looks like you are already signed up and logged in! </p>
            <p>Click the Home button to browse our destinations.</p>
        </div>
    );

    if (loading) return <Loading />

    if (user && user.message) return (
        <div className={style.logPage}>
            <h2>Something went wrong.</h2>
            <p>{user.message}</p>
            <p>Click the Sign Up link in the header to try again.</p>
        </div>
    );

    return (
        <div className={style.logPage}>
            <h3>Register Here as a New User!</h3>
            <form onSubmit={handleSignUp} className={style.searchBox}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    role="textbox"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br />
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
                <button aria-label="signup">Submit</button>
            </form>
        </div>
    )
};
