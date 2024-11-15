const login = async (username: String, password: String) => {
    try {
        // const response = await fetch('http://localhost:8000/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username, password }),
        // });
        // if (!response.ok) {
        //     throw new Error('Login failed');
        // }
        // const data = await response.json();
        // localStorage.setItem('token', data.token);
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        return {
            success: false,
            message: 'Login successful',
        };
    } catch (error) {
        console.log('Login failed:', error);
        return {
            success: false,
            message: `Login failed: ${error}`,
        };
    }
}

export default login;