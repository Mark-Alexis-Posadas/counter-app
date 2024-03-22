import { useContext } from "react";
import MyContext from "../Context";

export default function Main() {
  const { state, buttonText, handleToggleCount } = useContext(MyContext);
  return (
    <div className="w-72">
      <h1
        className={`${
          state.selectedColor === "bg-black" ? "text-white" : "text-black"
        } text-center font-bold text-9xl`}
      >
        {state.count}
      </h1>
      <div
        className={`flex items-center w-full ${
          state.count === 0 ? "justify-end" : "justify-between"
        }`}
      >
        {buttonText.map((button, index) => (
          <button
            onClick={() => handleToggleCount(index)}
            key={index}
            className={`rounded bg-purple-900 text-white p-2 w-10 ${
              index === 0 && state.count === 0 ? "hidden" : "block"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}
