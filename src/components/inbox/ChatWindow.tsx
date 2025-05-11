
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Send } from "lucide-react";

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "How can we help? We're here for you!",
      time: "1:15 PM",
      type: "admin" as const,
    },
    {
      id: 2,
      content: "It should be MUI v5 compatible.",
      time: "1:15 PM",
      type: "user" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ddf255d45b853637056c0bc9904523112af8c7cf?placeholderIfAbsent=true",
    },
    {
      id: 3,
      content: "This admin template is built with MUI!",
      time: "1:16 PM",
      type: "admin-primary" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/bf17aa5334e0de4d91c93a533644d5e80641b8d7?placeholderIfAbsent=true",
    },
    {
      id: 4,
      content: "How can I purchase it?",
      time: "1:17 PM",
      type: "user" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ddf255d45b853637056c0bc9904523112af8c7cf?placeholderIfAbsent=true",
    },
    {
      id: 5,
      content: "This admin template is built with MUI!",
      time: "1:16 PM",
      type: "admin-success" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/de80dd09aa7b71b754b35b32d47321219dadc428?placeholderIfAbsent=true",
    },
  ]);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      content: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      type: "user" as const,
      avatar: "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ddf255d45b853637056c0bc9904523112af8c7cf?placeholderIfAbsent=true",
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-[778px] overflow-hidden bg-gray-50 flex-1">
      <ChatHeader
        avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/0afe33f522d1396c9a48c15ddb7348757fad033d?placeholderIfAbsent=true"
        name="Felecia Rower"
        title="Frontend Developer"
      />
      <div className="border-b border-gray-200" />
      
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            time={message.time}
            type={message.type}
            avatar={message.avatar}
          />
        ))}
        
        <div className="flex items-center gap-2 text-xs text-gray-400 my-4 justify-center">
          <div className="border-t border-gray-200 flex-1" />
          <div>Jan25</div>
          <div className="border-t border-gray-200 flex-1" />
        </div>
      </div>
      
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-2 bg-indigo-100 text-indigo-500 rounded-l-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/bf17aa5334e0de4d91c93a533644d5e80641b8d7?placeholderIfAbsent=true"
              className="w-6 h-6"
            />
          </div>
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-1 px-4 py-2 outline-none text-sm"
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
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 flex items-center gap-2"
            onClick={(e) => {
              const input = e.currentTarget.previousElementSibling as HTMLInputElement;
              if (input && input.value.trim()) {
                handleSendMessage(input.value);
                input.value = '';
              }
            }}
          >
            Send
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
