export const registerNewUser = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/users/create`, {
            method: 'POST',
            body: { username, email, password }
        });
        return response.json();
    } catch {
        throw new Error(await response.json());
    }
};
