import { arrowUp } from "../../assets";
export default function GetStarted() {
  return (
    <p className="w-full h-full flex flex-col justify-center items-center font-poppins rounded-full border border-secondary">
      <span className="flex">
        Get <img src={arrowUp} alt="" />
      </span>
      <span>started</span>
    </p>
  );
}
