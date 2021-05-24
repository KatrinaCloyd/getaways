import React, { useState } from 'react';
import style from '../app/app.css';

export default function Logout() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogOut = (e) => {
        e.preventDefault();
        //need to write this function
        //not sure where we will be getting the loged in user from yet or what log out returns 
        logUserOut(user.username)
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
            <h3>See ya Next Time!</h3>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
