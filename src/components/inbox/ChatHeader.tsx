
import React from "react";
import { Video } from "lucide-react";

interface ChatHeaderProps {
  avatar: string;
  name: string;
  title?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ avatar, name, title }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-[#1a1a1a]">
      <div className="flex items-center gap-3">
        <div>
          <h3 className="font-medium text-white">To: {name}</h3>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-gray-700 text-white">
          <Video size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
