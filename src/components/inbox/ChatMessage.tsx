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
    if (isAdminPrimary) return "bg-[#E3E1FC]";
    if (isAdminSuccess) return "bg-[#24B364]";
    return "";
  };

  const getTextColor = () => {
    if (isAdminPrimary) return "text-[#675dd8]";
    if (isAdminSuccess || type === "admin") return "text-white";
    return "text-[#2f2b3d]";
  };

  const getBorderRadius = () => {
    if (isUser) return "rounded-[0px_6px_6px_6px]";
    return "rounded-[6px_0px_6px_6px]";
  };

  if (isUser) {
    return (
      <div className="justify-center flex w-full flex-col text-[#2f2b3d] font-normal p-6 max-md:max-w-full max-md:px-5">
        <div className="flex gap-4">
          <img
            src={avatar}
            className="aspect-[1] object-contain w-8 min-h-8 shrink-0"
          />
          <div className="justify-center items-stretch flex min-w-60 flex-col w-[251px]">
            <div className="w-full max-w-[251px]">
              <div
                className={`${getBorderRadius()} shadow-[0px_1px_6px_0px_rgba(47,43,61,0.10)] w-full text-[15px] leading-none px-4 py-2 ${getTextColor()}`}
              >
                {content}
              </div>
              <div className="w-11 gap-1.5 text-[13px] tracking-[0.4px] leading-none mt-1">
                {time}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="justify-center flex w-full flex-col font-normal p-6 max-md:max-w-full max-md:px-5">
      <div className="flex w-[378px] max-w-full gap-4">
        <div className="justify-center flex min-w-60 flex-col w-72">
          <div className="flex w-full max-w-[292px] flex-col justify-center">
            <div
              className={`${getBorderRadius()} shadow-[0px_1px_6px_0px_rgba(47,43,61,0.10)] w-full text-[15px] ${getTextColor()} text-right leading-none ${getBgColor()} px-4 py-2`}
            >
              {content}
            </div>
            <div className="self-stretch gap-2 text-[13px] text-[#2f2b3d] tracking-[0.4px] leading-none mt-1.5">
              {time}
            </div>
          </div>
        </div>
        {avatar && (
          <img src={avatar} className="aspect-[1] object-contain w-8 shrink-0" />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
