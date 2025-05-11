import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

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
    <div className="flex min-w-60 h-[778px] flex-col overflow-hidden items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
      <ChatHeader
        avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/0afe33f522d1396c9a48c15ddb7348757fad033d?placeholderIfAbsent=true"
        name="Felecia Rower"
        title="Frontend Developer"
      />
      <div className="border min-h-px w-full border-[rgba(47,43,61,0.12)] border-solid max-md:max-w-full" />
      
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            time={message.time}
            type={message.type}
            avatar={message.avatar}
          />
        ))}
        
        <div className="self-center flex items-center gap-2.5 text-[13px] text-[#D9D9D9] font-normal whitespace-nowrap text-right leading-loose justify-center flex-wrap max-md:max-w-full">
          <div className="border self-stretch min-w-60 w-[285px] shrink-0 h-px my-auto border-[rgba(232,232,232,1)] border-solid" />
          <div className="self-stretch my-auto">Jan25</div>
          <div className="border self-stretch min-w-60 w-[285px] shrink-0 h-px my-auto border-[rgba(232,232,232,1)] border-solid" />
        </div>
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
