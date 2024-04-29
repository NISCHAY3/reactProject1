import GetstartedBtn from "./GetstartedBtn";

const CTA = function () {
  return (
    <div className="w-full flex flex-row jusitfy-between items-center my-[64px] px-[64px] py-[48px] bg-black-gradient-2 rounded-[20px]">
      <div className="flex flex-col justify-center items-start flex-1">
        <h2 className="font-poppins text-white text-[48px] leading-[76.8px] font-semibold">
          Let’s try our service now!
        </h2>
        <p className="font-poppins text-white/70 text-[18px] leading-[30.8px] max-w-[500px] mt-[20px] font-normal-">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="">
        <GetstartedBtn></GetstartedBtn>
      </div>
    </div>
  );
};

export default CTA;
