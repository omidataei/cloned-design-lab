
import React from "react";
import { Phone, Video } from "lucide-react";

interface ChatHeaderProps {
  avatar: string;
  name: string;
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ avatar, name, title }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={avatar}
            className="w-10 h-10 rounded-full object-cover"
            alt={name}
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Phone size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Video size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
