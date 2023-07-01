import React, {useState} from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import {MdHomeWork} from 'react-icons/md'
import { Link } from "react-router-dom";


const Sidebar = () => {
    const menus = [
        { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
        { name: "Properties", link: "/properties", icon: MdHomeWork },
        { name: "Tenants", link: "/tenants", icon: AiOutlineUser },
        { name: "Payments", link: "/payments", icon: MdOutlinePayments },
        // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
        // { name: "File Manager", link: "/", icon: FiFolder },
        // { name: "Cart", link: "/", icon: FiShoppingCart },
        // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
        // { name: "Setting", link: "/", icon: RiSettings4Line },
      ];
      const [open, setOpen] = useState(true);
  return (

    <div
        className={`bg-blue-500 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-white px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        
    </div>
    

    //   <div className="pt-16">
    //     <Link to="/properties" className="block px-4 py-2 hover:bg-blue-600">Properties</Link>
    //     <Link to="/tenants" className="block px-4 py-2 hover:bg-blue-600">Tenants</Link>
    //     <Link to="/payments" className="block px-4 py-2 hover:bg-blue-600">Payments</Link>
    //     {/* Add more links as needed */}
    //   </div>

  );
};

export default Sidebar;
