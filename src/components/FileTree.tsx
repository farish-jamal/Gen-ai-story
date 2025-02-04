import React, { useState } from "react";
import { Folder } from "@/types/sideLeft";
import { EllipsisVertical, FileText, FolderIcon, FolderOpen, PlusIcon } from "lucide-react";
import { truncateString } from "@/utils/truncate";

interface FileTreeProps {
  fileData: Folder[];
}

const FileTree: React.FC<FileTreeProps> = ({ fileData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileId, setFileId] = useState<string | null>(null);

  const openFile = (id: string) => {
    if (id === fileId) {
      setIsOpen(false);
      setFileId(null);
    } else {
      setIsOpen(true);
      setFileId(id);
    }
  };
  return (
    <div className="flex flex-col space-y-4 mt-5 w-[100%] px-2">
      {fileData &&
        fileData?.map((file) => (
          <div>
            <div
              onClick={() => openFile(file.id)}
              className="relative flex items-center space-x-2 bg-gray-200 py-2 px-4 rounded-md w-full text-gray-800 text-sm cursor-pointer hover:bg-slate-300"
              key={file.id}
            >
              {fileId === file.id && isOpen ? (
                <FolderOpen className="h-4 w-4" />
              ) : (
                <FolderIcon className="h-4 w-4" />
              )}
              <p>{file.name}</p>
              <PlusIcon className="h-3 w-3 absolute right-2" />
            </div>
            {fileId === file.id &&
              isOpen &&
              file.stories.length > 0 &&
              file.stories.map((story) => (
                <div
                  key={story.id}
                  className="relative w-full flex items-center space-x-2 mt-2 py-2 px-4 rounded-md text-gray-100 text-sm cursor-pointer hover:bg-slate-200 hover:text-gray-800"
                >
                  <FileText className="h-4 w-4" />
                    <p>{truncateString(story.title, 15)}</p>
                    <EllipsisVertical className="h-3 w-3 absolute right-2" />
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default FileTree;
