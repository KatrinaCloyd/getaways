import { useState } from 'react';

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    return { user, setUser, loading, setLoading }
}
