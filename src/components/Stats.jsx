import { stats } from "../../constants";

export default function Stats() {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      {stats.map((el) => {
        return (
          <span
            key={el.id}
            className="font-semibold font-poppins text-[40.8px] leading-[50.8px] text-white flex items-center justify-center "
          >
            {el.value}{" "}
            <span className="text-[20px] leading-[26px] bg-blue-gradient bg-clip-text text-transparent ml-3">
              {el.title}
            </span>
          </span>
        );
      })}
    </div>
  );
}
