import { useState, useEffect, useRef } from "react";
import { progressMessages } from "@/constants/terminal";
import { TerminalIcon } from "lucide-react";

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < progressMessages.length) {
        setLines((prev) => [...prev, progressMessages[index]]);
        index++;

        setTimeout(() => {
          if (terminalRef.current) {
            terminalRef.current.scrollTo({
              top: terminalRef.current.scrollHeight,
              behavior: "smooth",
            });
          }
        }, 200);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
      <div
        className="fixed bottom-4 left-4 bg-gray-800 text-green-400 font-mono p-2 rounded-lg cursor-pointer"
        onClick={() => setIsVisible(true)}
      >
        <TerminalIcon />
      </div>
    );
  }

  return (
    <div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-green-400 font-mono border border-gray-700 rounded-lg shadow-lg transition-all duration-300
       h-[60vh] w-[50vw] p-4"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex items-center justify-between bg-gray-800 p-2 rounded-t-lg">
        <div className="flex space-x-2">
          <button
            onClick={() => setIsVisible(false)}
            className="w-3 h-3 bg-red-500 rounded-full"
          ></button>
        </div>
        <span className="text-xs text-gray-400">Terminal</span>
      </div>
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="overflow-y-auto h-[85%] p-2"
        ref={terminalRef}
      >
        {lines.map((line, index) => (
          <div key={index} className="fade-in">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
