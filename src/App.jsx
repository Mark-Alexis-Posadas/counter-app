import { useReducer, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faGear,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Theme from "./components/Theme";
import Settings from "./components/Settings";
import MyContext from "./Context";
import Main from "./components/Main";
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
    <MyContext.Provider
      value={{
        state,
        buttonText,
        handleClick,
        handleToggleClose,
        faCircleXmark,
        FontAwesomeIcon,
      }}
    >
      <div className="bg-slate-100 rounded h-screen p-3 flex-col flex items-center ">
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleSettings}
            className="p-2 bg-purple-700 text-white rounded"
          >
            <FontAwesomeIcon icon={faGear} />
          </button>
          <button>
            <FontAwesomeIcon icon={faArrowRotateRight} />
          </button>
        </div>
        {state.isToggle && <Settings />}

        <div>
          <h1>Reset Counter ?</h1>
          <ul>
            <li className="cursor-pointer" onClick={handleReset}>
              Yes
            </li>
            <li className="cursor-pointer">Cancel</li>
          </ul>
        </div>

        {state.isToggle ? "" : <Main />}
      </div>
    </MyContext.Provider>
  );
}
