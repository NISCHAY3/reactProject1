import GetstartedBtn from "./GetstartedBtn";
import { card } from "../../assets";

const CardsDeal = () => {
  return (
    <div className="w-full flex flex-row-reverse justify-between items-center gap-[40px]">
      <div className=" my-[64px] flex-1">
        <img src={card} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start my-[64px] flex-1 ">
        <h3 className="text-white font-semibold font-poppins text-[48px] leading-[76px] w-[95%]">
          Find a better card deal in few easy steps.
        </h3>
        <p className="text-[18px] text-white/70 leading-[30.8px] mt-[20px] max-w-[470px] font-normal font-poppins">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <GetstartedBtn></GetstartedBtn>
      </div>
    </div>
  );
};

export default CardsDeal;
