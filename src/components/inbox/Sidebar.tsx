import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="flex min-w-60 h-full w-[260px]">
      <div className="shadow-[0px_2px_8px_0px_rgba(47,43,61,0.12)] min-w-60 w-[260px] overflow-hidden">
        <div className="flex min-h-[78px] w-full gap-3 py-5" />
        <div className="max-w-full w-[260px] flex-1 px-3 py-1">
          <div className="w-full">
            <div className="items-center shadow-[0px_2px_6px_0px_rgba(115,103,240,0.30)] flex w-full gap-2 px-3 py-2 rounded-md">
              <div className="self-stretch flex flex-col w-11 my-auto pl-4 pr-1.5">
                <img src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/4d0f8e3ab509b82d5252e35f2a5a1ab9c8d8fe95?placeholderIfAbsent=true" className="aspect-[1] object-contain w-[22px]" />
              </div>
              <div className="text-white text-[15px] font-normal leading-none self-stretch flex-1 shrink basis-[22px] my-auto">
                Dashboards
              </div>
            </div>
          </div>
          <div className="w-full text-[13px] text-[#2f2b3d] font-normal whitespace-nowrap tracking-[0.4px] leading-none pt-3.5">
            <div className="self-stretch flex-1 shrink basis-[0%] min-h-[34px] w-full gap-2 px-3 py-2">
              APPS
            </div>
          </div>
          <div className="w-full text-[15px] text-[#2f2b3d] font-normal whitespace-nowrap leading-none pb-2">
            <div className="items-center flex w-full gap-2 px-3 py-2 rounded-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/6ef30023455d58ab3b74af06ba202d6c64f3435e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                Inbox
              </div>
            </div>
            <div className="items-center flex w-full gap-2 mt-1.5 px-3 py-2 rounded-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/7b933d150f616753cfa142018cbbcf29cd93f6ee?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                Customers
              </div>
            </div>
            <div className="items-center flex w-full gap-2 mt-1.5 px-3 py-2 rounded-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/6a5e3037d19f6989548bf7689c1210550a9f7a01?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                Marketing
              </div>
            </div>
          </div>
          <div className="w-full text-[13px] text-[#2f2b3d] font-normal whitespace-nowrap tracking-[0.4px] leading-none pt-3.5">
            <div className="self-stretch min-h-[34px] w-full gap-2 px-3 py-2">
              Personal
            </div>
          </div>
          <div className="w-full text-[15px] text-[#2f2b3d] font-normal leading-none pb-2">
            <div className="items-center flex w-full gap-2 whitespace-nowrap px-3 py-2 rounded-[0px_50px_50px_0px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/0d169256a8bc6845c9c8e9634806a250f493e3c6?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                Settings
              </div>
              <div className="self-stretch flex w-[22px] shrink-0 h-[22px] my-auto" />
            </div>
            <div className="items-center flex w-full gap-2 mt-1.5 px-3 py-2 rounded-[0px_50px_50px_0px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/84d025baa9e3c88e3b4f82a68fc9a611e1e26221?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                Billing & Plan
              </div>
              <div className="self-stretch flex w-[22px] shrink-0 h-[22px] my-auto" />
            </div>
            <div className="items-center flex w-full gap-2 mt-1.5 px-3 py-2 rounded-[0px_50px_50px_0px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/24b3bc2baddaa2d85a4153e241443af8e1d9a6dd?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                My Profile
              </div>
              <div className="self-stretch flex w-[22px] shrink-0 h-[22px] my-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
