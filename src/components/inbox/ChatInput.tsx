
import React, { useState, useRef } from "react";
import { Send, Paperclip, Mic } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
        <button className="p-3 text-gray-500 hover:text-indigo-600">
          <Paperclip size={20} />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message here..."
          className="flex-1 px-3 py-3 outline-none text-sm"
        />
        <button className="p-3 text-gray-500 hover:text-indigo-600">
          <Mic size={20} />
        </button>
        <button 
          onClick={handleSend}
          disabled={!message.trim()}
          className={`bg-green-500 hover:bg-green-600 text-white px-4 py-3 flex items-center gap-2 transition-colors ${!message.trim() ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          Send
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
