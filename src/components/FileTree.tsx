import React from "react";
import { Folder } from "@/types/sideLeft";
import { FileIcon, FolderIcon } from "lucide-react";

interface FileTreeProps {
  fileData: Folder[];
}

const FileTree: React.FC<FileTreeProps> = ({ fileData }) => {
  return (
    <div className="flex flex-col space-y-4 mt-5 w-[100%] px-2">
      {fileData &&
        fileData?.map((file) => (
          <div
            className="flex items-center space-x-2 bg-gray-200 py-2 px-4 rounded-md w-full text-gray-800 text-sm cursor-pointer hover:bg-slate-300"
            key={file.id}
          >
            <FolderIcon className="h-4 w-4" />
            <p>{file.name}</p>
          </div>
        ))}
    </div>
  );
};

export default FileTree;
