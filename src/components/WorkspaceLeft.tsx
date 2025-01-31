import React from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import FileTree from "./FileTree";
import { Folder } from "@/types/sideLeft";

interface WorkspaceLeftProps {
  fileData: Folder[];
}

const WorkspaceLeft: React.FC<WorkspaceLeftProps> = ({ fileData }) => {
  return (
    <div className="w-[15%] h-[100vh] bg-gray-900 text-gray-50 py-5 flex items-center justify-start flex-col">
      <div className="w-full flex justify-center">
        <img className="w-[90%] h-[80%]" src={logo} alt="Logo" />
      </div>
      <Button className="bg-[#6346fe] w-[90%] mt-5 hover:bg-[#6346fe]">
        <PlusIcon /> Create Folder
      </Button>
      <FileTree fileData={fileData} />
    </div>
  );
};

export default WorkspaceLeft;
