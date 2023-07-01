import React from 'react';
import NavDropDown from './NavDropDown';
import {HiHomeModern } from 'react-icons/hi2'

const Navbar = () => {
  const imageUrl = "/path/to/account-picture.png"; // Replace with the actual image URL

  return (
    <nav className="flex items-center justify-between bg-blue-500 text-white p-4">
      <div className="flex items-center">
        {/* <img
          src="/path/to/logo.png" // Replace with your logo image path
          alt="Logo"
          className="h-6 w-6 mr-2"
        /> */}
         <HiHomeModern size={30} className='p-1' />
        <h1 className="text-xl font-bold">HomeLand</h1>
      </div>
      <div className="flex items-center">
        <NavDropDown imageUrl={imageUrl}>
          <li className="px-4 py-2 text-black hover:bg-gray-100">Account Settings</li>
          <li className="px-4 py-2 text-black hover:bg-gray-100">Privacy Settings</li>
          <li className="px-4 py-2 text-black hover:bg-gray-100">Logout</li>
        </NavDropDown>
      </div>
    </nav>
  );
};

export default Navbar;
