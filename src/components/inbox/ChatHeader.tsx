import React from "react";

interface ChatHeaderProps {
  avatar: string;
  name: string;
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ avatar, name, title }) => {
  return (
    <div className="items-center self-center flex min-h-[76px] w-full max-w-[760px] px-6 max-md:max-w-full max-md:px-5">
      <div className="items-center self-stretch flex min-w-60 w-full gap-4 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="self-stretch flex min-h-10 items-stretch gap-2.5 justify-center w-10 my-auto">
          <img
            src={avatar}
            className="aspect-[1] object-contain w-10 flex-1 shrink basis-[0%]"
          />
        </div>
        <div className="self-stretch min-w-60 min-h-11 text-[#2f2b3d] font-normal flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="text-[15px] leading-none flex-1 max-md:max-w-full">
            {name}
          </div>
          <div className="text-[13px] leading-loose max-md:max-w-full">
            {title}
          </div>
        </div>
        <div className="self-stretch flex gap-1 my-auto">
          <div className="flex flex-col items-center w-[38px]">
            <div className="items-center flex w-full max-w-[38px] p-2 rounded-md">
              <div className="self-stretch flex w-[22px] my-auto">
                <div className="flex min-h-[22px] w-[22px] items-stretch gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/b0441852c1dc19f8a96fdaf44a90bbcbc12baf22?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-full flex-1 shrink basis-[0%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[38px]">
            <div className="items-center flex w-full max-w-[38px] p-2 rounded-md">
              <div className="self-stretch flex w-[22px] my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/8e97149b125b943ab81b3bc4377c810fd7dcb301?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
