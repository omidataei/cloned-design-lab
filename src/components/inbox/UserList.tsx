
import React, { useState } from "react";
import { Search, MessageCircle, Instagram, MessageSquare, Phone } from "lucide-react";

const UserList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="w-[320px] border-r border-gray-700 bg-[#1a1a1a] h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="text-white flex items-center gap-2 font-medium">
            <MessageCircle size={20} className="text-white" />
            <span>Simple Chat</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <div className="flex items-center text-gray-400 font-medium gap-1">
          <span className="text-sm uppercase">Recent Chats</span>
          <span className="bg-gray-700 text-white text-xs px-1.5 rounded-full">2</span>
        </div>
        <div className="flex items-center gap-4">
          <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={18} />
          <MessageSquare className="text-gray-400 hover:text-white cursor-pointer" size={18} />
          <Phone className="text-gray-400 hover:text-white cursor-pointer" size={18} />
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1 bg-[#1a1a1a]">
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/0afe33f522d1396c9a48c15ddb7348757fad033d?placeholderIfAbsent=true"
          name="John Davidson"
          message="Hey! How have you be..."
          date="03:42"
          active={true}
          unread={true}
          unreadCount={4}
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/fb100dc63704723dc3ef14ba3c43a7394e477426?placeholderIfAbsent=true"
          name="Frank Jackson"
          message="Let move the meeting t..."
          date="03:42"
          active={true}
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/58a882ddaf057280d975cc0a5c0456766a4dc553?placeholderIfAbsent=true"
          name="Melissa Naude"
          message="You keen for coffee?"
          date="03:42"
          active={false}
          status="yellow"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/12a355041e52439dcf6c813db7635d9c6ab604b4?placeholderIfAbsent=true"
          name="Erik James"
          message="What happened last ni..."
          date="03:42"
          active={false}
          status="yellow"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/7212848e484de331c63c3633a7e597e13b139f6b?placeholderIfAbsent=true"
          name="Jeffery Friedman"
          message="How was the party yest..."
          date="03:42"
          active={false}
          status="red"
        />
      </div>
    </div>
  );
};

interface UserListItemProps {
  avatar: string;
  name: string;
  message: string;
  date: string;
  active?: boolean;
  unread?: boolean;
  unreadCount?: number;
  status?: string;
}

const UserListItem: React.FC<UserListItemProps> = ({
  avatar,
  name,
  message,
  date,
  active = false,
  unread = false,
  unreadCount = 0,
  status = "green"
}) => {
  return (
    <div
      className={`flex items-center gap-3 p-3 border-b border-gray-700 hover:bg-gray-800 cursor-pointer`}
    >
      <div className="relative">
        <img
          src={avatar}
          className="w-10 h-10 rounded-full object-cover"
          alt={name}
        />
        {unread && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#9b87f5] rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
            {unreadCount}
          </span>
        )}
        <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${
          status === "green" ? "bg-green-500" : 
          status === "yellow" ? "bg-yellow-500" : 
          status === "red" ? "bg-red-500" : 
          "bg-gray-500"
        } border-2 border-[#1a1a1a] rounded-full`}></span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h4 className="font-medium truncate text-white">{name}</h4>
          <span className="text-xs text-gray-400 whitespace-nowrap">{date}</span>
        </div>
        <p className="text-sm text-gray-400 truncate">{message}</p>
      </div>
    </div>
  );
};

export default UserList;
