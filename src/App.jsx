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
  count: parseInt(localStorage.getItem("count")) || 0,
  setCount: "",
  countInput: "",
  isToggleOne: false,
  isToggleTwo: false,
  selectedColor: localStorage.getItem("theme") || "bg-slate-100",
  isInputEnabled: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: (state.count = 0), isToggleTwo: false };

    case "TOGGLE_SETTINGS":
      return { ...state, isToggleOne: true, isToggleTwo: false };
    case "TOGGLE_RESET":
      return { ...state, isToggleOne: false, isToggleTwo: true };

    case "TOGGLE_CLOSE":
      return { ...state, isToggleOne: false, isToggleTwo: false };
    case "CHANGE_THEME":
      localStorage.setItem("theme", action.payload); // Save selected theme to local storage
      return { ...state, selectedColor: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, countInput: action.payload };

    case "SET_COUNT":
      return { ...state, count: parseInt(state.countInput) };

    case "TOGGLE_MAX":
      return { ...state, isInputEnabled: !state.isInputEnabled };
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

  useEffect(() => {
    dispatch({ type: "SET_INPUT_VALUE", payload: parseInt(state.count) });
  }, [state.count, dispatch]);

  const handleChange = (e) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
  };

  const handleSave = () => {
    dispatch({ type: "SET_COUNT" });
    handleToggleClose();
  };

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

  const handleToggleMax = () => {
    dispatch({ type: "TOGGLE_MAX" });
  };

  return (
    <MyContext.Provider
      value={{
        state,
        buttonText,
        handleChange,
        handleSave,
        handleToggleCount,
        handleToggleClose,
        handleChangeTheme,
        handleReset,
        handleToggleMax,
        faCircleXmark,
        FontAwesomeIcon,
        dispatch,
      }}
    >
      <div
        className={`${state.selectedColor} rounded h-screen p-3 flex-col flex items-center`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}
            className="p-2 bg-purple-700 text-white rounded cursor-pointer"
          >
            <FontAwesomeIcon icon={faGear} />
          </button>
          <button
            onClick={() => dispatch({ type: "TOGGLE_RESET" })}
            className="p-2 bg-purple-700 text-white rounded cursor-pointer"
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
