import React from "react";
import logo from "../assets/logo.png";
import { menuItems } from "@/constants/menu";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-10 mt-5">
      <div className="w-[20%]">
        <img className="w-[40%]" src={logo} alt="" />
      </div>
      <div className="w-[60%]">
        <ul className="flex items-center justify-center gap-6 w-full">
          {menuItems.map((item) => {
            return (
              <li key={Math.random()} className="text-sm">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[20%]">
        <div className="flex items-center justify-end space-x-5">
          <Button className="w-20 text-sm h-9">Login</Button>
          <GithubIcon className="h-6 w-6 text-gray-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
