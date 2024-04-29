import { quotes } from "../../assets";
const FeedbackCards = ({ items }) => {
  return (
    <div className="px-10 py-12 rounded-[20px] flex flex-col justify-center items-start flex-1 max-w-[370px] hover:bg-black-gradient">
      <img
        src={quotes}
        alt=""
        className=" object-contain w-[42.6px] h-[27.6px]"
      />
      <p className="font-poppins text-[18px] leading-[32.4px] font-normal text-white my-[40px] flex-1">
        {items.content}
      </p>
      <div className="flex flex-row flex-1 justify-center items-center">
        <img
          src={items.img}
          alt=""
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="ml-[16px]">
          <h4 className="text-white text-[20px] leading-[32px]">
            {items.name}
          </h4>
          <p className="text-white/70 font-poppins ">{items.title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCards;
