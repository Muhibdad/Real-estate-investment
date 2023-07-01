// import React, { useState } from 'react';

// const Navigation = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleToggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="flex items-center justify-between bg-blue-500 text-white p-4">
//       <div className="flex items-center">
//         <img
//           src="/path/to/logo.png" // Replace with your logo image path
//           alt="Logo"
//           className="h-6 w-6 mr-2"
//         />
//         <h1 className="text-xl font-bold">My Dashboard</h1>
//       </div>
//       <div className="flex items-center">
//         <img
//           src="/path/to/account-picture.png" // Replace with your account picture image path
//           alt="Account"
//           className="h-8 w-8 rounded-full mr-2 cursor-pointer"
//           onClick={handleToggleDropdown}
//         />
//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
//             <ul className="py-2">
//               <li className="px-4 py-2 hover:bg-gray-100">Account Settings</li>
//               <li className="px-4 py-2 hover:bg-gray-100">Privacy Settings</li>
//               <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
