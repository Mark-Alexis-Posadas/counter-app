import { useReducer, useEffect } from "react";

const initialCount = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const buttonText = ["-", "+"];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialCount);

  useEffect(() => {
    localStorage.setItem("count", state.count.toString());
  }, [state.count]);

  const handleClick = (idx) => {
    if (idx === 0) {
      dispatch({ type: "DECREMENT" });
    } else if (idx === 1) {
      dispatch({ type: "INCREMENT" });
    }
  };
  return (
    <div className="bg-slate-100 m-5 rounded p-3">
      <h1 className="text-center font-bold">{state.count}</h1>
      <div
        className={`flex items-center ${
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
  );
}
