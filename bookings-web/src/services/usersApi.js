export const registerNewUser = async (username, email, password) => {
    // console.log({ username, email, password })
    try {
        const rawResponse = await fetch(`${process.env.BASE_URL}/users/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        // console.log(response);
        const response = await rawResponse.json();
        return response;
    } catch {
        throw new Error(await response.json());
    }
};
