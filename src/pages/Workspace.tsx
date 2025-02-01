import WorkspaceLeft from "@/components/WorkspaceLeft";
import React from "react";
import { fileData } from "@/dumps/dummySidebar";
import WorkspaceMiddle from "@/components/WorkspaceMiddle";
import WorkspaceRight from "@/components/WorkspaceRight";

const Workspace: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center">
      <WorkspaceLeft fileData={fileData} />
      <WorkspaceMiddle  />
      <WorkspaceRight />
    </div>
  );
};

export default Workspace;
