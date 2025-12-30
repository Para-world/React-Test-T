import React, { useReducer } from "react";


const initialState = { count: 0 };


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Reducer = () => {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-10 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-zinc-100">
        useReducer Hook Example
      </h1>

      <div className="bg-zinc-700 p-8 rounded-lg shadow-lg flex flex-col items-center gap-4 border border-zinc-600">
        <h2 className="text-5xl font-mono text-yellow-400">{state.count}</h2>
        <p className="text-zinc-400">Current Count</p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Decrease -
          </button>

          <button
            onClick={() => dispatch({ type: "reset" })}
            className="bg-zinc-500 hover:bg-zinc-600 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Reset
          </button>

          <button
            onClick={() => dispatch({ type: "increment" })}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Increase +
          </button>
        </div>
      </div>

      <div className="max-w-md text-zinc-300 bg-zinc-800 p-4 rounded border border-zinc-700 text-sm">
        <h3 className="font-bold text-lg mb-2 text-zinc-100">How it works:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>state</strong>: The current snapshot of data (count:{" "}
            {state.count})
          </li>
          <li>
            <strong>dispatch</strong>: A function to send commands (actions)
          </li>
          <li>
            <strong>reducer</strong>: The logic that decides how state changes
            based on the action type
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reducer;
