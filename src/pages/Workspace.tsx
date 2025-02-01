import WorkspaceLeft from "@/components/WorkspaceLeft";
import React from "react";
import { fileData } from "@/dumps/dummySidebar";
import WorkspaceMiddle from "@/components/WorkspaceMiddle";

const Workspace: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center">
      <WorkspaceLeft fileData={fileData} />
      <WorkspaceMiddle  />
      <div className="w-[55%] flex flex-col h-screen bg-gray-100">3</div>
    </div>
  );
};

export default Workspace;
