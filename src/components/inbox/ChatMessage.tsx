
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
  const isAdminPrimary = type === "admin-primary";
  const isAdminSuccess = type === "admin-success";

  const getBgColor = () => {
    if (isUser) return "bg-white";
    if (isAdminPrimary) return "bg-indigo-100";
    if (isAdminSuccess) return "bg-green-500";
    return "bg-indigo-600";
  };

  const getTextColor = () => {
    if (isUser) return "text-gray-800";
    if (isAdminPrimary) return "text-indigo-700";
    if (isAdminSuccess || type === "admin") return "text-white";
    return "text-gray-800";
  };

  const getBorderRadius = () => {
    if (isUser) return "rounded-tl-lg rounded-tr-lg rounded-br-lg";
    return "rounded-tl-lg rounded-tr-lg rounded-bl-lg";
  };

  if (isUser) {
    return (
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-1" /> {/* Spacer */}
        <div className="max-w-[75%]">
          <div className={`${getBorderRadius()} shadow-sm border border-gray-200 ${getBgColor()} ${getTextColor()} p-3`}>
            {content}
          </div>
          <div className="text-xs text-gray-500 mt-1 text-right">
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
        <div className={`${getBorderRadius()} shadow-sm ${getBgColor()} ${getTextColor()} p-3`}>
          {content}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {time}
        </div>
      </div>
      <div className="flex-1" /> {/* Spacer */}
    </div>
  );
};

export default ChatMessage;
