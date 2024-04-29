import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";

export default function Hero() {
  return (
    <section className="mx-auto flex flex-row justify-center w-[70%] py-[64px]">
      <div className="flex flex-col items-start justify-center">
        <div className=" overflow-hidden bg-discount-gradient rounded-[10px] px-[16px] py-[6px] relative flex justify-around gap-[10px]">
          <img src={discount} alt="" />
          <span className="text-[18px] leading-[30.8px] font-poppins">
            <span className="text-white">20%</span>
            <span className="text-white/70">
              Discount for <span className="text-white">1 Month</span> Account
            </span>
          </span>
        </div>
        <div
          className="flex flex-row w-full justify-start
         items-center gap-20"
        >
          <p className="text-[72px] leading-[100.8px] text-white font-poppins font-semibold w-min">
            The Next <span className="text-gradient">Generation</span>
          </p>
          <div className="text-gradient text-[18px] font-medium  w-[140px] h-[140px] cursor-pointer">
            <GetStarted></GetStarted>
          </div>
        </div>
        <p className="w-full leading-[75px] text-[72px] text-white font-poppins font-semibold mt-2">
          Payment Method
        </p>
        <p className="text-white/70 font-poppins text-[18px] leading-[30.8px] text-start mt-5 max-w-[470px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="w-[80%] h-[80%]">
        <img src={robot} alt="" className="w-full h-full" />
      </div>
    </section>
  );
}
