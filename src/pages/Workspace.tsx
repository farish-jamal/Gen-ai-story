import WorkspaceLeft from "@/components/WorkspaceLeft";
import React from "react";
import { fileData } from "@/dumps/dummySidebar";

const Workspace: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center">
      <WorkspaceLeft fileData={fileData} />
      <div className="w-[30%] h-[100vh] bg-blue-600">2</div>
      <div className="w-[55%] h-[100vh] bg-green-600">3</div>
    </div>
  );
};

export default Workspace;
