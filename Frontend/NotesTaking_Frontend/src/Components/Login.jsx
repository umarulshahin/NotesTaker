import React, { useState } from 'react';
import Header from './Header';
import useAuth from '../Hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const {Login_Axios}= useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login submitted', { email, password });
      Login_Axios({ email, password });
    }
  };

  return (
    <div className="min-h-screen flex flex-col  ">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-yellow-100 p-4">
        <div className="w-full max-w-md bg-transparent shadow-md rounded-lg border">
          <div className="flex justify-between bg-orange-300 items-center p-4 border-b rounded-t-lg">
            <div className="text-black font-bold text-xl">Login</div>
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            
            <div>
              <span className='font-bold font-serif'>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 border font-serif rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
            <span className='font-bold font-serif' >Password</span>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border font-serif rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>

            <div className="flex space-x-2 px-6">
              <button
                type="submit"
                className="flex-1 bg-orange-300 font-serif cursor-pointer  text-black p-2 rounded-lg hover:bg-orange-400 transition duration-300"
              >
                Login
              </button>
              <button
                type="button"
                className="flex-1 font-serif text-black p-2 rounded-lg bg-sky-200 hover:bg-sky-300 cursor-pointer transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;