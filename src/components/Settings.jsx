import { useContext } from "react";
import Theme from "./Theme";
import MyContext from "../Context";

export default function Settings() {
  const {
    state,
    handleToggleClose,
    FontAwesomeIcon,
    faCircleXmark,
    handleChange,
    handleSave,
    handleToggleMax,
  } = useContext(MyContext);

  return (
    <div className="rounded border-2 border-purple-600 p-2 mt-3">
      <h1
        className={`${
          state.selectedColor === "bg-white" ? "text-black" : "text-white"
        } font-bold text-3xl`}
      >
        Settings
      </h1>
      <div className="flex items-center my-3">
        <label
          className={`${
            state.selectedColor === "bg-white" ? "text-black" : "text-white"
          }`}
        >
          Set count =
        </label>
        <input
          type="number"
          value={state.countInput}
          onChange={handleChange}
          className="w-12 rounded px-2 ml-2 border-2 border-slate-500"
        />
      </div>
      <div className="flex items-start flex-col mb-3">
        <div className="flex items-center ">
          <label
            className={`${
              state.selectedColor === "bg-white" ? "text-black" : "text-white"
            }`}
          >
            Limit
          </label>
          <button
            className="bg-black mx-2 rounded p-2 text-white"
            onClick={handleToggleMax}
          >
            {state.isInputEnabled ? "On" : "Off"}
          </button>
        </div>
        <div className="flex">
          <label
            className={`${
              state.selectedColor === "bg-white" ? "text-black" : "text-white"
            }`}
          >
            Maximum ={" "}
          </label>
          <input
            type="number"
            className={`${
              !state.isInputEnabled ? "cursor-not-allowed " : ""
            }w-12 rounded px-2 ml-2 border-2 border-slate-500`}
            disabled={!state.isInputEnabled}
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        className="bg-purple-500 mb-3 text-white rounded p-2"
      >
        Save
      </button>

      <div className="flex items-center mb-3">
        <Theme />
      </div>
      <FontAwesomeIcon icon={faCircleXmark} onClick={handleToggleClose} />
    </div>
  );
}
