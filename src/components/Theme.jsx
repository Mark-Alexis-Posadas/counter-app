import { useContext } from "react";
import MyContext from "../Context";

export default function Theme() {
  const { handleChangeTheme } = useContext(MyContext);
  const colors = [
    "bg-black",
    "bg-white",
    "bg-yellow-700",
    "bg-green-700",
    "bg-blue-700",
    "bg-pink-700",
    "bg-gray-700",
    "bg-slate-500",
  ];

  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          className={` ${color} w-6 h-6 rounded mr-2`}
          onClick={() => handleChangeTheme(color)}
        ></div>
      ))}
    </>
  );
}
