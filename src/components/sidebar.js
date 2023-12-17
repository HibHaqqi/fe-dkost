import { BsArrowLeftShort, BsSearch, BsChevronDown, BsBank,BsFillPiggyBankFill } from "react-icons/bs";
import { GiBanknote } from "react-icons/gi";
import { AiFillEnvironment } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(true);

  const Menus = [
    { title: "Dashboard"  },
    { title: "Expanses" ,icon: <GiBanknote /> },
    { title: "Income" ,icon: <BsBank />},
    { title: "Wallet",icon: <BsFillPiggyBankFill /> ,spacing: true },
    {
      title: "Profile",
      icon : <FaRegUser />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Logout",icon:<IoIosLogOut /> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8  duration-300 relative ${
          open ? "w-72" : "w-20"
        }`}
      >
        <BsArrowLeftShort
          className={`text-3xl bg-white text-dark-purple rounded-full absolute -right-3 top-9 border
       border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-lime-300 text-dark-purple rounded text-4xl cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Tailwind
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left ${open && "mr-2"}`}
          />
          <input
            type={"search"}
            placeholder="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon :<RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen &&open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md`}
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
