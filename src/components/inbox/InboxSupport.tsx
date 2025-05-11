
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserList from "./UserList";
import ChatWindow from "./ChatWindow";

const InboxSupport: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-1 overflow-hidden">
            <UserList />
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxSupport;
