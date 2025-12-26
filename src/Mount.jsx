import React, { useRef } from "react";

const Mount = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {

    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "lightyellow";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-bold">useRef Example</h2>
      <p className="mb-4">
        useRef allows you to access DOM elements directly. It persists values
        between renders without causing a re-render.
      </p>

      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="I will be focused"
          className="border p-2 rounded text-black"
        />
        <button
          onClick={handleFocus}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default Mount;
