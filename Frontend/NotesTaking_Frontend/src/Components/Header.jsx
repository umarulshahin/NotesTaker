import React from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserLogout } from '../Redux/UserSlice';
const Header = () => {

    const token = Cookies.get('userToken')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () =>{
        if (token){
            Cookies.remove('userToken')
            dispatch(UserLogout())
        }
        navigate('/')

    }
  return (
    <header className="bg-sky-200 py-4 px-4 md:px-12 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold text-blue-900">
        Keep Notes
      </div>
      <nav className="flex space-x-6">
        <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">About</a>
        <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Notes</a>
        <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Account</a>
        <a href="#" onClick={handleLogout} className="text-blue-800 hover:text-blue-600 font-medium">{ token ? 'Logout' : 'Login'}</a>
      </nav>
    </header>
  );
}

export default Header;