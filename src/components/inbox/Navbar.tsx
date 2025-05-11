
import React from "react";
import { Bell, HelpCircle, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-4">
      <div></div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100">
          <HelpCircle size={20} />
        </button>
        
        <button className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2 text-gray-600">
          <span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center text-sm font-medium">7</span>
          <span>Days left</span>
          <span className="text-gray-400">in your full-featured trial</span>
        </div>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm">
          Upgrade
        </button>
        
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/87ec8ced7ac60950ed669875eb67cee76b44b976?placeholderIfAbsent=true" 
              alt="User avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
