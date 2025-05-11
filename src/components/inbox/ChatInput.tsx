import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="justify-center items-center flex w-full flex-col px-[22px] py-6 max-md:max-w-full max-md:px-5">
      <div className="items-center shadow-[0px_1px_6px_0px_rgba(47,43,61,0.10)] flex w-full max-w-[718px] gap-4 flex-wrap pl-4 pr-2 py-2 rounded-md max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/11067c83845c7708b0b3f4fdfcea008df7e4c2da?placeholderIfAbsent=true"
          className="aspect-[1.08] object-contain w-[41px] self-stretch shrink-0 my-auto"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message here..."
          className="text-[#2f2b3d] text-[15px] font-normal leading-none self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent outline-none"
        />
        <div className="items-center self-stretch flex gap-1 my-auto">
          <div className="self-stretch flex flex-col items-center w-[38px] my-auto">
            <div className="items-center flex w-full max-w-[38px] p-2 rounded-md">
              <div className="self-stretch flex w-[22px] my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/7b4ca512f2b8e205a20ffa9619bce72ad2a7e1f4?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[22px]"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center w-[38px] my-auto">
            <div className="items-center flex w-full max-w-[38px] p-2 rounded-md">
              <div className="self-stretch flex w-[22px] my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/5a66284a69f9c158c57f906577d09cb6a676361f?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[22px]"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSend}
            className="justify-center items-center rounded-md shadow-[0px_2px_6px_0px_rgba(115,103,240,0.30)] self-stretch flex flex-col overflow-hidden text-[15px] text-white font-medium whitespace-nowrap capitalize leading-none bg-[#24B364] my-auto"
          >
            <div className="justify-center items-center flex gap-2 overflow-hidden px-4 py-2">
              <div className="self-stretch my-auto">Send</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/3656b7a6966597acb180592cc9c545ff53e8c5f7?placeholderIfAbsent=true"
                className="aspect-[0.6] object-contain w-3 self-stretch shrink-0 my-auto"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
