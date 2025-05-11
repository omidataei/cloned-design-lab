import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserList from "./UserList";
import ChatWindow from "./ChatWindow";

const InboxSupport: React.FC = () => {
  return (
    <div className="pt-[138px] max-md:pt-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/910fad8ed363c806fb0f8a879f198546854219ab?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 z-10 ml-[322px] mt-[138px] max-md:ml-2.5 max-md:mt-10"
      />
      <div
        className="justify-center items-stretch flex mt-[-162px] h-[916px] w-full overflow-hidden flex-wrap max-md:max-w-full"
      >
        <Sidebar />
        <div
          className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full"
        >
          <Navbar />
          <div
            className="flex w-full flex-col items-stretch justify-center px-6 py-[27px] max-md:max-w-full max-md:px-5"
          >
            <div
              className="rounded-md shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] flex min-h-[778px] w-full overflow-hidden flex-wrap max-md:max-w-full"
            >
              <UserList />
              <div
                className="border w-0 shrink-0 h-[778px] border-[rgba(47,43,61,0.12)] border-solid"
              />
              <ChatWindow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxSupport;
