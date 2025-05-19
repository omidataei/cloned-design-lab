
import React from "react";

interface ChatMessageProps {
  content: string;
  time: string;
  type: "admin" | "user" | "admin-primary" | "admin-success";
  avatar?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  time,
  type,
  avatar,
}) => {
  const isUser = type === "user";

  const getBgColor = () => {
    if (isUser) return "bg-[#333333]";
    return "bg-[#444444]";
  };

  const getTextColor = () => {
    return "text-white";
  };

  const getBorderRadius = () => {
    if (isUser) return "rounded-t-lg rounded-bl-lg";
    return "rounded-t-lg rounded-br-lg";
  };

  if (isUser) {
    return (
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-1" /> {/* Spacer */}
        <div className="max-w-[75%]">
          <div className={`${getBorderRadius()} ${getBgColor()} ${getTextColor()} p-3`}>
            {content}
          </div>
          <div className="text-xs text-gray-400 mt-1 text-right">
            {time}
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={avatar}
            className="w-8 h-8 rounded-full"
            alt="User"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 mb-4">
      {avatar && (
        <div className="flex-shrink-0">
          <img 
            src={avatar}
            className="w-8 h-8 rounded-full"
            alt="Admin"
          />
        </div>
      )}
      <div className="max-w-[75%]">
        <div className={`${getBorderRadius()} ${getBgColor()} ${getTextColor()} p-3`}>
          {content}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {time}
        </div>
      </div>
      <div className="flex-1" /> {/* Spacer */}
    </div>
  );
};

export default ChatMessage;
