import React, { useState } from 'react';
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

    if (loading) return <Loading />

    if (user) return (
        <div className={style.logPage}>
            <h2>Welcome {user.username}!</h2>
            <p>Click the Home button to view a list of destinations!</p>
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
