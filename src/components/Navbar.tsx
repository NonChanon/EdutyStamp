import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { useToggle } from "../hooks/useToggle";
import { Icon } from "@iconify/react";
import Logo from "../imgs/logo.png";

export const Navbar = () => {
  const { status: isAuth, toggleStatus: setIsAuth } = useToggle();

  const Links = [
    { name: "Batch Data Result", path: "/" },
    { name: "RD Transaction", path: "/rd" },
    { name: "Invoice Payment", path: "/invoice" },
    { name: "Reciept & AS9", path: "/reciept" },
  ];

  return (
    <div className="lg:flex justify-between items-center shadow-md w-full lg:h-[50px] text-sm">
      <ul className="lg:flex lg:items-center">
        <img src={Logo} className="h-[18px] px-5" />
        {Links.map((link) => (
          <li>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-white px-5 lg:flex lg:items-center lg:my-0 lg:h-[50px]"
                  : "px-5 lg:flex lg:items-center lg:my-0 lg:h-[50px]"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {isAuth ? (
        <div className="lg:flex text-[26px] px-5">
          <Icon icon="healthicons:ui-user-profile-outline" />
          <Icon icon="iconamoon:arrow-down-2-thin" />
        </div>
      ) : (
        <div className="lg:flex px-5">
          <Button variant={"white"} onClick={setIsAuth}>
            Log in
          </Button>
          <Button className="ml-2">Register</Button>
        </div>
      )}
    </div>
  );
};
