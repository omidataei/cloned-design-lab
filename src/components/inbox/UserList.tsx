import React from "react";

const UserList: React.FC = () => {
  return (
    <div className="rounded-[6px_0px_0px_6px] min-w-[240px] min-h-[778px] w-[370px]">
      <div className="items-center flex min-h-[76px] w-full gap-4 text-[15px] text-[#2f2b3d] font-normal whitespace-nowrap leading-[1.6] px-6 pt-0 pb-6 max-md:px-5">
        <div className="justify-center items-stretch border-[input-border] self-stretch flex min-w-60 min-h-[38px] w-full flex-col flex-1 shrink basis-[0%] my-auto border-0 border-solid">
          <div className="rounded-[border-round] w-full gap-1">
            <div className="items-center border border-[input-border] flex w-full gap-2.5 px-3.5 py-[7px] rounded-md border-solid">
              <div className="self-stretch flex min-w-60 w-[268px] flex-col justify-center flex-1 shrink basis-[0%] my-auto">
                <div className="gap-2.5">Search...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border min-h-px w-full border-[rgba(47,43,61,0.12)] border-solid" />
      <div className="w-full px-3 py-2">
        <div className="items-center flex w-full gap-[11px] text-[15px] text-[#675DD8] font-normal whitespace-nowrap leading-none px-4 py-2">
          <div className="self-stretch flex gap-1 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ea728f47bb89ddc09cc36a332aadc3d0342e4bfe?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
            />
            <div className="text-[#675DD8]">ALL</div>
          </div>
          <div className="border self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(47,43,61,0.12)] border-solid" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/acb8175049e1e545cdc870e870c3e3c929e88f4a?placeholderIfAbsent=true"
            className="aspect-[1.19] object-contain w-[25px] self-stretch shrink-0 my-auto"
          />
          <div className="border self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(47,43,61,0.12)] border-solid" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/6847cef5ba57d30a6fa87be1aef52fb3ab5e319b?placeholderIfAbsent=true"
            className="aspect-[1/1] object-contain w-[21px] fill-[#737682] self-stretch shrink-0 my-auto"
          />
          <div className="border self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(47,43,61,0.12)] border-solid" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/4f7abdbf3c6554ec04c0b4ca0b04e653091749c2?placeholderIfAbsent=true"
            className="aspect-[1/1] object-contain w-[21px] fill-[#E6E6E9] self-stretch shrink-0 my-auto"
          />
          <div className="border self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(47,43,61,0.12)] border-solid" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/f0ffce9ef13c5e7cf95df194602e1f55fbcf7d7c?placeholderIfAbsent=true"
            className="aspect-[8/7] object-contain w-6 fill-[#E6E6E9] self-stretch shrink-0 my-auto"
          />
        </div>
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/0afe33f522d1396c9a48c15ddb7348757fad033d?placeholderIfAbsent=true"
          name="Felecia Rower"
          message="I will purchase it for sure. 👍"
          date="Apr 10"
          active={true}
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/fb100dc63704723dc3ef14ba3c43a7394e477426?placeholderIfAbsent=true"
          name="Adalberto Granzin"
          message="UI/UX Designer"
          date="Jan 8"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/58a882ddaf057280d975cc0a5c0456766a4dc553?placeholderIfAbsent=true"
          name="Zenia Jacobs"
          message="Building surveyor"
          date="Jan 16"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/12a355041e52439dcf6c813db7635d9c6ab604b4?placeholderIfAbsent=true"
          name="Heather Gislason"
          message="UI Designer"
          date="Jan 21"
        />
        <UserListItem
          avatar="https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/7212848e484de331c63c3633a7e597e13b139f6b?placeholderIfAbsent=true"
          name="Rosemary Hettinger"
          message="Direct Mobility Manager"
          date="Jan25"
        />
      </div>
    </div>
  );
};

interface UserListItemProps {
  avatar: string;
  name: string;
  message: string;
  date: string;
  active?: boolean;
}

const UserListItem: React.FC<UserListItemProps> = ({
  avatar,
  name,
  message,
  date,
  active = false,
}) => {
  return (
    <div
      className={`items-center rounded-md flex w-full gap-4 mt-1 px-3 py-2 ${
        active ? "shadow-[0px_2px_6px_0px_rgba(115,103,240,0.30)]" : ""
      }`}
    >
      <div className="self-stretch flex min-h-10 items-center gap-2.5 justify-center w-10 my-auto">
        <img
          src={avatar}
          className="aspect-[1] object-contain w-10 self-stretch my-auto"
        />
      </div>
      <div
        className={`self-stretch min-w-60 min-h-11 ${
          active ? "text-white" : "text-[#2f2b3d]"
        } font-normal flex-1 shrink basis-[0%] my-auto`}
      >
        <div className="flex w-full">
          <div className="text-[15px] leading-none flex-1 shrink basis-[0%]">
            {name}
          </div>
          <div className="flex items-center gap-[5px] text-[13px] text-right leading-loose">
            <img
              src={active ? "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/b9411c128ac3202130bc97fcc2d7085d8939e890?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/0a7789a751af45d89d78b26880dd3f82/ca7914ced4c8230f08bf1c1ce200991017e52473?placeholderIfAbsent=true"}
              className={`aspect-[1] object-contain w-4 ${
                active ? "fill-[bg-white]" : "fill-[#737682]"
              } self-stretch shrink-0 my-auto`}
            />
            <div className="self-stretch my-auto">{date}</div>
          </div>
        </div>
        <div className="text-[13px] leading-loose">{message}</div>
      </div>
    </div>
  );
};

export default UserList;
