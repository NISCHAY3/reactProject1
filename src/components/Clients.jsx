import { clients } from "../../constants";
export default function Client() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      {clients.map((el) => {
        return (
          <div
            key={el.id}
            className="m-[20px] flex-1 items-center justify-center flex"
          >
            <img src={el.logo} alt="" className="w-[192px]" />
          </div>
        );
      })}
    </div>
  );
}
