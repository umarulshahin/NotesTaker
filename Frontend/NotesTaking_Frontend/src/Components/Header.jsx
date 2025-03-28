import React from 'react';

const Header = () => {
  return (
    <header className="bg-sky-200 py-4 px-4 md:px-26 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold text-blue-900">
        Keep Notes
      </div>
      <nav className="flex space-x-6">
        <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">About</a>
        <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Notes</a>
        <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Account</a>
        <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Logout</a>
      </nav>
    </header>
  );
}

export default Header;