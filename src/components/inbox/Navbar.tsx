import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="w-full pt-6 px-6 max-md:max-w-full max-md:px-5">
      <div className="items-center shadow-[0px_2px_8px_0px_rgba(47,43,61,0.12)] flex w-full overflow-hidden flex-wrap px-[0p] py-[8px)] rounded-md max-md:max-w-full">
        <div className="self-stretch flex w-[141px] shrink-0 h-[22px] gap-2 my-auto" />
        <div className="items-center self-stretch flex min-w-60 gap-[11px] flex-wrap flex-1 shrink basis-[0%] my-auto pr-6 max-md:max-w-full">
          <div className="self-stretch flex min-h-[38px] flex-col items-center justify-center w-[38px] my-auto">
            <img src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/051f39f467af7e67bb49279a7f952526d07ca03b?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
          </div>
          <div className="self-stretch flex min-h-[38px] flex-col items-center justify-center w-[38px] my-auto">
            <img src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/5f558f5c81f2ec4b520781f57717a2dc9b66b578?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center w-[38px] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/87ec8ced7ac60950ed669875eb67cee76b44b976?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[38px] rounded-[48px]"
            />
          </div>
          <div className="self-stretch flex min-w-60 min-h-[38px] items-center gap-1 text-[15px] text-[#2f2b3d] font-normal leading-none justify-center w-[278px] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/eda3a79685863b773c8b6bbd4d751df5a4302cf2?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <div className="self-stretch w-[239px] my-auto">
              <span className="font-bold text-[#6f6f6f]">Days left</span> in your
              full-featured trial
            </div>
          </div>
          <div className="justify-center items-center rounded-md shadow-[0px_2px_6px_0px_rgba(115,103,240,0.30)] self-stretch flex flex-col overflow-hidden text-[15px] text-white font-medium whitespace-nowrap capitalize leading-none my-auto">
            <div className="self-stretch gap-2 overflow-hidden px-4 py-2 bg-primary">
              upgrade
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex min-h-11 w-[67px] my-auto pl-2.5 pr-[11px] py-2.5 rounded-md">
            <div className="bg-[rgba(255,78,78,1)] self-stretch flex w-6 shrink-0 h-6 my-auto rounded-[300px]" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/722253fbca3cdd6d7051c38f3bad0bbe92182e13?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[22px] self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
