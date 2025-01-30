import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm opacity-80 text-[#6346fe]">
          © {new Date().getFullYear()} Built with ❤️, ☕, and way too many
          console logs. 🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;