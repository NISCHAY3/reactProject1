import { footerLinks, socialMedia } from "../../constants";
import { logo } from "../../assets";
export default function Footer() {
  return (
    <div className="py-[64px]">
      <div className="flex justify-between items-start mb-[32px]">
        <div className="flex flex-col justify-center items-start flex-1 mr-[40px]">
          <img
            src={logo}
            alt=""
            className="object-contain w-[266px] h-[72px]"
          />
          <p className="text-white/70 font-poppins font-normal text-[18px] leading-[30.8px] max-w-[312px] mt-4">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-row flex-[1.5] justify-between">
          {footerLinks.map((el) => {
            return (
              <div className="text-white flex flex-col min-w-[150px]">
                <h2 className="text-white font-poppins text-[18px] leading-[27px] font-medium">
                  {el.title}
                </h2>
                <ul>
                  {el.links.map((el2) => {
                    return (
                      <li className="text-white/70 text-[16px] leading-[24px] font-poppins font-normal mt-4 hover:text-secondary">
                        {el2.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between w-full items-end pt-[24px] border-t-[1px] border-[#3F3E45]">
        <p className="font-poppins text-white text-[18px] leading-[27px] text-center font-normal">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row gap-x-6">
          {socialMedia.map((el) => {
            return (
              <img
                key={el.id}
                src={el.icon}
                alt=""
                className="cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
