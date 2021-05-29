import React, { useState } from 'react';
import { logOutUser } from '../../services/usersApi';
import style from '../app/app.css';

export default function Logout({ user, setUser }) {
    const [loading, setLoading] = useState(false);

    const handleLogOut = (e) => {
        e.preventDefault();
        logOutUser()
            .then(setUser)
            .finally(() => setLoading(false));
    }

    if (loading) return <Loading />

    if (user && user.message) return (
        <div className={style.logPage}>
            <h2>Visit Us Again Soon!</h2>
            <p>{user.message}</p>
        </div>
    );

    return (
        <div className={style.logPage}>
            <h3>See ya Next Time, {user.username}!</h3>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
