import { useContext } from "react";
import Theme from "./Theme";
import MyContext from "../Context";

export default function Settings() {
  const { handleToggleClose, FontAwesomeIcon, faCircleXmark } =
    useContext(MyContext);
  return (
    <div>
      <h1>Settings</h1>
      <div className="flex items-center">
        <label>Set count = </label>
        <input type="number" />
      </div>

      <div className="flex items-center">
        <label>Limit Off / On</label>

        <div className="flex">
          <label>Maximum = </label>
          <input type="number" />
        </div>
      </div>
      <div className="flex items-center">
        <Theme />
      </div>
      <FontAwesomeIcon icon={faCircleXmark} onClick={handleToggleClose} />
    </div>
  );
}
