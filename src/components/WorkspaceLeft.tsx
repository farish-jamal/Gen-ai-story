import React from "react";
import logo from "../assets/logo-bg.png";
import { Button } from "./ui/button";
import { EllipsisVertical, PlusIcon } from "lucide-react";
import FileTree from "./FileTree";
import { Folder } from "@/types/sideLeft";
import { timeOfTheDay } from "@/utils/timeCheck";

interface WorkspaceLeftProps {
  fileData: Folder[];
}

const WorkspaceLeft: React.FC<WorkspaceLeftProps> = ({ fileData }) => {
  return (
    <div className="w-[15%] h-[100vh] bg-gray-700 text-gray-50 py-5 flex items-center justify-start flex-col">
      <div className="w-full flex justify-center">
        <img className="w-[60%]" src={logo} alt="Logo" />
      </div>
      <div className="w-[100%] mt-3 flex items-center justify-between space-x-4 py-2 rounded-md px-3">
        <p className="text-sm">Hey, {timeOfTheDay()} Farish!</p>
        <EllipsisVertical className="h-4 w-4 cursor-pointer" />
      </div>
      <Button className="bg-[#6346fe] w-[90%] mt-5 hover:bg-[#6346fe]">
        <PlusIcon /> Create Folder
      </Button>
      <FileTree fileData={fileData} />
    </div>
  );
};

export default WorkspaceLeft;
