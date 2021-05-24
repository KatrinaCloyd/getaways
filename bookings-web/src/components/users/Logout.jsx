import React, { useState } from 'react';
import { logOutUser } from '../../services/usersApi';
import style from '../app/app.css';

export default function Logout() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogOut = (e) => {
        e.preventDefault();
        //need to write this function
        //not sure where we will be getting the loged in user from yet or what log out returns 
        logOutUser()
            .then(setUser)
            .finally(() => setLoading(false));
    }
    if (user && user.message) { console.log(user) }

    if (loading) return <Loading />

    if (user && user.message) return (
        <div className={style.logPage}>
            <h2>Visit Us Again Soon!</h2>
            <p>{user.message}</p>
        </div>
    );

    return (
        <div className={style.logPage}>
            <h3>See ya Next Time!</h3>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
