import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function StoryEditor() {
  const [rawText, setRawText] = useState<string>("");
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState<string>(""); 
  const [snippetIndex, setSnippetIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setRawText(
        `The night was silent, except for the soft rustle of leaves.\n\nElara held her breath as she stepped forward.\n\nSomething moved in the shadows, and she knew she wasn’t alone. The night was silent, except for the soft rustle of leaves.\n\nElara held her breath as she stepped forward.\n\nSomething moved in the shadows, and she knew she wasn’t alone.`
      );
    }, 1000);
  }, []);

  useEffect(() => {
    if (!rawText) return;

    const paragraphs = rawText.split("\n\n");

    if (snippetIndex >= paragraphs.length) return;

    const typeLine = () => {
      const currentSnippet = paragraphs[snippetIndex];

      if (charIndex < currentSnippet.length) {
        setCurrentLine((prev) => prev + currentSnippet[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setLines((prev) => [...prev, currentSnippet]);
        setCurrentLine("");
        setSnippetIndex((prev) => prev + 1);
        setCharIndex(0);
      }

      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.scrollTo({
            top: editorRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 200);
    };

    const typingInterval = setInterval(typeLine, 50);

    return () => clearInterval(typingInterval);
  }, [charIndex, snippetIndex, rawText]); 

  return (
    <div
      ref={editorRef}
      className="h-[79vh] w-full bg-gray-100 text-gray-900 font-serif p-6 overflow-y-auto border-2 border-gray-300 rounded-2xl shadow-lg leading-relaxed"
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="whitespace-pre-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {line}
        </motion.div>
      ))}
      <motion.div
        className="whitespace-pre-wrap inline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {currentLine}
      </motion.div>
      {snippetIndex < rawText.split("\n\n").length && (
        <motion.span
          className="inline-block w-[1px] h-5 bg-gray-900 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      )}
    </div>
  );
}