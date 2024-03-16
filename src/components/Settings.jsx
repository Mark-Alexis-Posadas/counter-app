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
  } = useContext(MyContext);

  return (
    <div className="rounded border-2 border-purple-600 p-2 mt-3">
      <h1 className="font-bold text-3xl">Settings</h1>
      <div className="flex items-center my-3">
        <label>Set count = </label>
        <input type="number" value={state.countInput} onChange={handleChange} />
      </div>
      <div className="flex items-center mb-3">
        <label>Limit Off / On</label>

        <div className="flex">
          <label>Maximum = </label>
          <input type="number" />
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
