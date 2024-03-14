import { useContext } from "react";
import MyContext from "../Context";

export default function Reset() {
  const { handleReset } = useContext(MyContext);
  return (
    <div>
      <h1>Reset Counter ?</h1>
      <ul>
        <li className="cursor-pointer" onClick={handleReset}>
          Yes
        </li>
        <li className="cursor-pointer">Cancel</li>
      </ul>
    </div>
  );
}
