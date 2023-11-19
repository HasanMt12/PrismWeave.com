// src/pages/LoginPage.tsx
import React, { useState } from 'react';

import axios from 'axios';

const LoginPage: React.FC = () => {
    
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleLogin = async () => {
        try {
            // Perform login API request
            const response = await axios.post('/api/login', loginData);

            // Assuming your server returns a token upon successful login
            const token = response.data.token;

            // Store the token in localStorage or a secure storage method
            localStorage.setItem('token', token);

            // Redirect to the home page
          
        } catch (error) {
            console.error('Login failed', error);
            // Handle login failure (show error message, etc.)
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
