import { feedback } from "../../constants";
import FeedbackCards from "./FeedbackCard";

export default function Feedback() {
  return (
    <div className="flex flex-col justify-between py-[64px]">
      <div className="flex flex-row w-full justify-between items-center">
        <h3 className="font-poppins text-white text-[48px] leading-[76.8px] font-semibold flex-1">
          What People are
          <br />
          saying about us
        </h3>
        <div className="w-full h-fit flex-1">
          <p className="h-fit font-poppins font-normal text-white/70 text-[18px] leading-[30.8px] w-[70%]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full mt-[64px]">
        {feedback.map((el) => {
          return <FeedbackCards key={el.id} items={el}></FeedbackCards>;
        })}
      </div>
    </div>
  );
}
