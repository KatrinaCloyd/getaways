import React, { useState } from 'react';
import style from '../app/app.css';
import Loading from '../app/Loading';

export default function Login() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = (e) => {
        e.preventDefault();
        //need to write this function
        logInUser(username, password)
            .then(setUser)
            .finally(() => setLoading(false));
    }

    if (loading) return <Loading />

    if (user) return (
        <div className={style.logPage}>
            <h2>Welcome {user.username}!</h2>
            <p>Click the Home button to view a list of destinations!</p>
        </div>
    );

    return (
        <div className={style.logPage}>
            <h3>Oh Hullo! Welcome Back!</h3>
            <form onSubmit={handleLogIn} className={style.searchBox}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    role="textbox"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
