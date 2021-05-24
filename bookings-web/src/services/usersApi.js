export const registerNewUser = async (username, email, password) => {
    try {
        const rawResponse = await fetch(`${process.env.BASE_URL}/users/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        const response = await rawResponse.json();
        const signedIn = await logInUser(response.email, password);
        console.log(signedIn);
        return signedIn;
    } catch {
        throw new Error(await response.json());
    }
};

export const logInUser = async (email, password) => {
    try {
        const rawResponse = await fetch(`${process.env.BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        });
        const response = await rawResponse.json();
        localStorage.setItem('USER', response.username);
        return response;
    } catch {
        throw new Error(await response.json());
    }
};

export const logOutUser = async () => {
    try {
        const rawResponse = await fetch(`${process.env.BASE_URL}/users/logout`, {
            credentials: 'include'
        });
        const response = await rawResponse.json();
        localStorage.removeItem('USER');
        return response;
    } catch {
        throw new Error(await response.json());
    }
};
