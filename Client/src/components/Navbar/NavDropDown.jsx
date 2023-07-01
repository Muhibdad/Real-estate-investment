import React, { useState, useRef, useEffect } from 'react';

const NavDropDown = ({ imageUrl, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center focus:outline-none"
        onClick={handleToggleDropdown}
      >
        <img
          src={imageUrl}
          alt="Account"
          className="h-8 w-8 rounded-full mr-2 cursor-pointer"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 transition-transform ${
            isDropdownOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path d="M12 5v14"></path>
          <path d="M19 12l-7 7-7-7"></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
        >
          <ul>{children}</ul>
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
