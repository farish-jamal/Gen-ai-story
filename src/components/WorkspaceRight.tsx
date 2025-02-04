import { Copy, FolderUp, Redo2, Save, Share2, Undo2 } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import StoryEditor from "./StoryEditor";

const WorkspaceRight: React.FC = () => {
  return (
    <div className="w-[55%] flex flex-col h-screen bg-gray-100">
      <div className="flex justify-between items-center px-4 py-3 bg-white">
        <h3 className="text-lg font-semibold">Result</h3>
        <div className="flex space-x-3">
          <Undo2 className="w-5 h-5 mt-2 text-gray-500 hover:text-gray-800 cursor-pointer transition-all duration-200" />
          <Redo2 className="w-5 h-5 mt-2 text-gray-500 hover:text-gray-800 cursor-pointer transition-all duration-200" />
          <Button className="bg-[#e4dfff] hover:bg-[#d7d0ff] text-gray-800">
            <Copy className="w-4 h-4" />
          </Button>
          <Button className="bg-[#e4dfff] hover:bg-[#d7d0ff] text-gray-800">
            <FolderUp className="w-4 h-4" />
            <p>Export</p>
          </Button>
          <Button className="bg-[#6346fe] hover:bg-[#5638ff] text-white">
            <Share2 className="w-4 h-4" />
            <p>Share</p>
          </Button>
        </div>
      </div>
      <StoryEditor />
      <div className="flex items-center justify-between px-5 mt-3">
        <div className="flex items-center space-x-4">
          <p className="text-gray-500 text-sm">500 words</p>
          <p className="text-gray-500 text-sm">500 charchters</p>
        </div>
        <div>
          <Button className="bg-[#6346fe] hover:bg-[#5638ff] text-white">
            <Save className="w-4 h-4" />
            <p className="text-sm">Save Story</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceRight;
