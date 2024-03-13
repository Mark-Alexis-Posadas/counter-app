import { useReducer, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faGear,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
const initialCount = { count: 0, isToggle: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: (state.count = 0) };

    case "TOGGLE_SETTINGS":
      return { ...state, isToggle: !state.isToggle };

    case "TOGGLE_CLOSE":
      return { ...state, isToggle: false };
    default:
      return state;
  }
};

const buttonText = ["-", "+"];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialCount);

  useEffect(() => {
    if (state && typeof state.count !== "undefined") {
      localStorage.setItem("count", state.count.toString());
    }
  }, [state]);

  const handleClick = (idx) => {
    if (idx === 0) {
      dispatch({ type: "DECREMENT" });
    } else if (idx === 1) {
      dispatch({ type: "INCREMENT" });
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handleToggleSettings = () => {
    dispatch({ type: "TOGGLE_SETTINGS" });
  };

  const handleToggleClose = () => {
    dispatch({ type: "TOGGLE_CLOSE" });
  };

  return (
    <div className="bg-slate-100 rounded h-screen p-3 flex-col flex items-center ">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faGear} onClick={handleToggleSettings} />
        <button
          className="bg-red-500 text-white rounded p-2"
          onClick={handleReset}
        >
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
      </div>
      {state.isToggle && (
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
            <div className="w-6 h-6 rounded bg-black"></div>
            <div className="w-6 h-6 rounded bg-white"></div>
            <div className="w-6 h-6 rounded bg-yellow-700"></div>
            <div className="w-6 h-6 rounded bg-green-700"></div>
            <div className="w-6 h-6 rounded bg-blue-700"></div>
            <div className="w-6 h-6 rounded bg-pink-700"></div>
            <div className="w-6 h-6 rounded bg-gray-700"></div>
            <div className="w-6 h-6 rounded bg-slate-500"></div>
          </div>
          <FontAwesomeIcon icon={faCircleXmark} onClick={handleToggleClose} />
        </div>
      )}

      {state.isToggle ? (
        ""
      ) : (
        <div className="w-72">
          <h1 className="text-center font-bold text-9xl">{state.count}</h1>
          <div
            className={`flex items-center w-full ${
              state.count === 0 ? "justify-end" : "justify-between"
            }`}
          >
            {buttonText.map((button, index) => (
              <button
                onClick={() => handleClick(index)}
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
      )}
    </div>
  );
}
