import Features from "./Features";
import GetstartedBtn from "./GetstartedBtn";

const Bussiness = () => {
  return (
    <div className="w-full flex justify-between items-center py-[64px]">
      <div className="flex-1 flex flex-col justify-center items-start py-6">
        <h1 className="text-[48px] font-poppins font-semibold leading-[72px] text-white text-start w-[95%]">
          You do the business, we’ll handle the money.
        </h1>
        <p className="font-poppins text-[18px] text-white/70 leading-[30.8px] mt-[20px] max-w-[470px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <GetstartedBtn></GetstartedBtn>
      </div>
      <div className="ml-[40px] flex-1">
        <Features></Features>
      </div>
    </div>
  );
};

export default Bussiness;
