import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { useToggle } from "../hooks/useToggle";
import { Icon } from "@iconify/react";
import Logo from "../imgs/logo.png";

export const Navbar = () => {
  const { status: isAuth, toggleStatus: setIsAuth } = useToggle();
  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();

  const Links = [
    { name: "Batch Data Result", path: "/" },
    { name: "RD Transaction", path: "/rd" },
    { name: "Invoice Payment", path: "/invoice" },
    { name: "Reciept & AS9", path: "/reciept" },
  ];

  return (
    <div className="flex justify-between fixed top-0 left-0 items-center shadow-md w-full h-[50px] px-5 text-sm bg-white">
      <div className="flex items-center">
        <div>
          <img src={Logo} className="h-[16px] mr-5" />
        </div>
        <ul
          className={`lg:flex items-center absolute lg:static bg-white w-full lg:w-auto left-0 shadow-md lg:shadow-none ${
            isOpen ? "top-[50px]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="h-[50px]">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white px-5 flex items-center h-[50px] font-[500px]"
                    : "px-5 flex items-center h-[50px]"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {isAuth ? (
        <div className="lg:flex text-[26px] hidden">
          <Icon icon="healthicons:ui-user-profile-outline" />
          <Icon icon="iconamoon:arrow-down-2-thin" />
        </div>
      ) : (
        <div className="lg:flex items-center hidden">
          <Button variant={"white"} onClick={setIsAuth}>
            Log in
          </Button>
          <Button className="ml-2">Register</Button>
        </div>
      )}
      <div onClick={setIsOpen} className="text-[24px] lg:hidden">
        <Icon icon={isOpen ? "ion:close-outline" : "basil:menu-outline"} />
      </div>
    </div>
  );
};
