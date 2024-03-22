import { useContext } from "react";
import MyContext from "../Context";

export default function Reset() {
  const { state, handleReset, handleToggleClose } = useContext(MyContext);
  return (
    <div>
      <h1
        className={
          state.selectedColor === "bg-black" ? "text-white" : "text-black"
        }
      >
        Reset Counter ?
      </h1>
      <ul>
        <li
          className={`${
            state.selectedColor === "bg-black" ? "text-white" : "text-black"
          } cursor-pointer`}
          onClick={handleReset}
        >
          Yes
        </li>
        <li
          className={`${
            state.selectedColor === "bg-black" ? "text-white" : "text-black"
          } cursor-pointer`}
          onClick={handleToggleClose}
        >
          Cancel
        </li>
      </ul>
    </div>
  );
}
