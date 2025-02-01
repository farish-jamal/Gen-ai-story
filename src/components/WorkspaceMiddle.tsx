import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChevronDown, Wand2 } from "lucide-react";
import Select from "./Select";
import {
  genreOptions,
  languageOptions,
  advancedOptions,
} from "../constants/dropdown";

const WorkspaceMiddle: React.FC = () => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isCharacterOpen, setIsCharacterOpen] = useState(false);

  return (
    <div className="w-[30%] h-[100vh] bg-white flex flex-col shadow-lg rounded-lg overflow-hidden">
      <div
        style={{
          overflow: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="flex-1 overflow-y-auto p-6 space-y-4"
      >
        <Textarea
          className="w-full border border-gray-300 rounded-lg "
          placeholder="A marine biologist is assigned to study a mysterious decline in sea life near an old lighthouse..."
        />
        <Select options={genreOptions} placeholder="Select a genre" />
        <Select options={languageOptions} placeholder="Select a language" />
        <div className="w-full">
          <button
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className="w-full flex justify-between items-center bg-gray-100 py-3 px-4 rounded-lg text-sm font-medium transition hover:bg-gray-200"
          >
            <span>Advanced</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isAdvancedOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isAdvancedOpen && (
            <div className="mt-2 space-y-2 transition-all">
              <Select
                options={advancedOptions.length}
                placeholder="Select length of story"
              />
              <Select
                options={advancedOptions.creativity}
                placeholder="Select a character"
              />
            </div>
          )}
        </div>
        <div className="w-full">
          <button
            onClick={() => setIsCharacterOpen(!isCharacterOpen)}
            className="w-full flex justify-between items-center bg-gray-100 py-3 px-4 rounded-lg text-sm font-medium transition hover:bg-gray-200"
          >
            <span>Character development</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isCharacterOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isCharacterOpen && (
            <div className="mt-2 space-y-2 transition-all">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Dr. Anna Carter"
              />
              <Textarea
                className="w-full border border-gray-300 rounded-lg "
                placeholder="Write how you want to develop your character..."
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t bg-white shadow-md sticky bottom-0">
        <Button className="w-full bg-[#6346fe] hover:bg-[#6346fe] text-white flex items-center justify-center py-3 rounded-lg text-sm font-medium shadow-md transition">
          <Wand2 className="h-4 w-4 mr-2" />
          Generate
        </Button>
      </div>
    </div>
  );
};

export default WorkspaceMiddle;
