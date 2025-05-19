
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import { Send } from "lucide-react";

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "You think we can meet tomorrow for coffee at the place on the corner?",
      time: "5 min ago",
      type: "user" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ddf255d45b853637056c0bc9904523112af8c7cf?placeholderIfAbsent=true",
    },
    {
      id: 2,
      content: "Hopefully :(",
      time: "4 min ago",
      type: "admin" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/bf17aa5334e0de4d91c93a533644d5e80641b8d7?placeholderIfAbsent=true",
    },
    {
      id: 3,
      content: "Been working super late this past week, trying to meet this deadline.",
      time: "4 min ago",
      type: "admin" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/bf17aa5334e0de4d91c93a533644d5e80641b8d7?placeholderIfAbsent=true",
    },
    {
      id: 4,
      content: "No worries mate, I understand. Its always stressful before a launch.",
      time: "2 min ago",
      type: "user" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ddf255d45b853637056c0bc9904523112af8c7cf?placeholderIfAbsent=true",
    },
  ]);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      content: message,
      time: "Just now",
      type: "user" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ddf255d45b853637056c0bc9904523112af8c7cf?placeholderIfAbsent=true",
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-[778px] overflow-hidden bg-[#262626] flex-1">
      <ChatHeader
        avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/0afe33f522d1396c9a48c15ddb7348757fad033d?placeholderIfAbsent=true"
        name="Jason Davidson"
      />
      
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-gray-400 my-4 justify-center">
          <div className="border-t border-gray-700 flex-1" />
          <div>TODAY</div>
          <div className="border-t border-gray-700 flex-1" />
        </div>
        
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            time={message.time}
            type={message.type}
            avatar={message.avatar}
          />
        ))}
        
        <div className="flex items-center gap-2 mt-4 mb-2">
          <div className="flex gap-2 items-center text-gray-400">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-sm">Typing...</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center bg-[#333333] rounded-md overflow-hidden border border-gray-700">
          <input
            type="text"
            placeholder="Type something..."
            className="flex-1 px-4 py-3 outline-none text-sm bg-transparent text-white"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const target = e.target as HTMLInputElement;
                if (target.value.trim()) {
                  handleSendMessage(target.value);
                  target.value = '';
                }
              }
            }}
          />
          <button 
            className="bg-[#333333] hover:bg-gray-700 text-white px-4 py-3 flex items-center gap-2 transition-colors"
            onClick={(e) => {
              const input = e.currentTarget.previousElementSibling as HTMLInputElement;
              if (input && input.value.trim()) {
                handleSendMessage(input.value);
                input.value = '';
              }
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
