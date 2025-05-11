import React, { useState } from "react";
import { Search, MessageCircle, Instagram, Telegram, WhatsApp } from "lucide-react";

const UserList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="w-[320px] border-r border-gray-200 bg-white h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between border-b border-gray-200 py-2 px-4">
        <div className="flex items-center text-indigo-600 font-medium gap-1">
          <MessageCircle size={18} />
          <span>ALL</span>
        </div>
        <div className="flex items-center gap-4">
          <Instagram className="text-[#9b87f5] hover:text-indigo-700 cursor-pointer" size={18} />
          <Telegram className="text-[#9b87f5] hover:text-indigo-700 cursor-pointer" size={18} />
          <WhatsApp className="text-[#9b87f5] hover:text-indigo-700 cursor-pointer" size={18} />
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1">
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/0afe33f522d1396c9a48c15ddb7348757fad033d?placeholderIfAbsent=true"
          name="Felecia Rower"
          message="I will purchase it for sure. 👍"
          date="Apr 10"
          active={true}
          unread={true}
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/fb100dc63704723dc3ef14ba3c43a7394e477426?placeholderIfAbsent=true"
          name="Adalberto Granzin"
          message="UI/UX Designer"
          date="Jan 8"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/58a882ddaf057280d975cc0a5c0456766a4dc553?placeholderIfAbsent=true"
          name="Zenia Jacobs"
          message="Building surveyor"
          date="Jan 16"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/12a355041e52439dcf6c813db7635d9c6ab604b4?placeholderIfAbsent=true"
          name="Heather Gislason"
          message="UI Designer"
          date="Jan 21"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/7212848e484de331c63c3633a7e597e13b139f6b?placeholderIfAbsent=true"
          name="Rosemary Hettinger"
          message="Direct Mobility Manager"
          date="Jan25"
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
}

const UserListItem: React.FC<UserListItemProps> = ({
  avatar,
  name,
  message,
  date,
  active = false,
  unread = false,
}) => {
  return (
    <div
      className={`flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer ${
        active ? "bg-indigo-50" : ""
      }`}
    >
      <div className="relative">
        <img
          src={avatar}
          className="w-10 h-10 rounded-full object-cover"
          alt={name}
        />
        {unread && (
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
            2
          </span>
        )}
        <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${active ? "bg-green-500" : "bg-gray-300"} border-2 border-white rounded-full`}></span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h4 className={`font-medium truncate ${active ? "text-indigo-700" : "text-gray-900"}`}>{name}</h4>
          <span className="text-xs text-gray-500 whitespace-nowrap">{date}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{message}</p>
      </div>
    </div>
  );
};

export default UserList;
