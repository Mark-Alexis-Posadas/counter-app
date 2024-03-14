import { useReducer, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faGear,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import Settings from "./components/Settings";
import MyContext from "./Context";
import Main from "./components/Main";
import Reset from "./components/Reset";
const initialCount = {
  count: 0,
  isToggleOne: false,
  isToggleTwo: false,
  selectedColor: "bg-slate-100",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: (state.count = 0) };

    case "TOGGLE":
      return { ...state, [action.payload]: !state[action.payload] };

    case "TOGGLE_CLOSE":
      return { ...state, isToggle: false };
    case "CHANGE_THEME":
      return { ...state, selectedColor: action.payload };
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

  const handleToggleCount = (idx) => {
    if (idx === 0) {
      dispatch({ type: "DECREMENT" });
    } else if (idx === 1) {
      dispatch({ type: "INCREMENT" });
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handleToggleClose = () => {
    dispatch({ type: "TOGGLE_CLOSE" });
  };

  const handleChangeTheme = (color) => {
    dispatch({ type: "CHANGE_THEME", payload: color });
  };

  return (
    <MyContext.Provider
      value={{
        state,
        buttonText,
        handleToggleCount,
        handleToggleClose,
        handleChangeTheme,
        handleReset,
        faCircleXmark,
        FontAwesomeIcon,
      }}
    >
      <div
        className={`${state.selectedColor} rounded h-screen p-3 flex-col flex items-center`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch({ type: "TOGGLE", payload: "isToggleOne" })}
            className="p-2 bg-purple-700 text-white rounded"
          >
            <FontAwesomeIcon icon={faGear} />
          </button>
          <button
            onClick={() => dispatch({ type: "TOGGLE", payload: "isToggleTwo" })}
            className="p-2 bg-purple-700 text-white rounded"
          >
            <FontAwesomeIcon icon={faArrowRotateRight} />
          </button>
        </div>
        {state.isToggleOne && <Settings />}
        {state.isToggleTwo && <Reset />}

        {!(state.isToggleOne || state.isToggleTwo) && <Main />}
      </div>
    </MyContext.Provider>
  );
}
