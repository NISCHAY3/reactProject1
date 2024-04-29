import { apple, google, bill } from "../../assets";

const Billing = () => {
  return (
    <div className="flex flex-row w-full gap-x-[40px]">
      <div className="flex-1">
        <img src={bill} alt="" />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-white font-semibold font-poppins text-[48px] leading-[76px] w-[80%]">
          Easily control your billing & invoicing
        </h1>
        <div className="text-[18px] text-white/70 leading-[30.8px] mt-[20px] max-w-[470px] font-normal font-poppins">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </div>
        <div className="flex mt-[40px]">
          <img
            src={apple}
            alt=""
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img src={google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
