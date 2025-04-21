import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { checkAuth } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            await axios.post('/login', {
                email: formData.get('email'),
                password: formData.get('password')
            });
            await checkAuth();
            navigate('/tools');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 p-2 border rounded"
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
