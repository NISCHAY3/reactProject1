import { features } from "../../constants";

export default function Feedback() {
  return features.map((el) => {
    return (
      <div
        key={el.id}
        className="flex flex-row p-6 mb-6 rounded-[20px] hover:bg-black-gradient text-white justify-between gap-x-4 "
      >
        <div className="w-[64px] h-[64px] bg-dimBlue rounded-full flex justify-center items-center ">
          <img src={el.icon} alt="" className="w-1/2 h-1/2 object-contain" />
        </div>
        <div>
          <h3 className="text-[18px] leading-[23.8px] text-white font-semibold font-poppins">
            {el.title}
          </h3>
          <p className="text-[16px] leading-[24px] text-white/70 font-poppins font-normal">
            {el.content}
          </p>
        </div>
      </div>
    );
  });
}
