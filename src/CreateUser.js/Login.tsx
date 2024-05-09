// src/components/Login.tsx
import React, { useState } from 'react';

import { getusers } from '../Services/GetUser.service';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const login = async (email: string, password: string) => {
    if (email === '' || password === '') {
      window.alert('Email and password are required');
      return;
    }

    try {
      await getusers(email, (res: any[]) => {
        const data = res[0];
        if (!data) {
          window.alert('No user found');
          return;
        }
        window.localStorage.setItem('token', data.id);
        setMessage('Login successful');
        window.location.href = '/auth/dashboard/admin';
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    await login(email, password);
    setLoading(false);
  };

  return (
   <>
    <Navbar/>
    <div
      className="min-h-screen flex items-center justify-center bg-gray-800"
    >
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
{/* 
        {message && (
          <Alert variant="info" className="mb-4">
            {message}
          </Alert>
        )} */}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            {loading ? 'Please Wait...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Login;
