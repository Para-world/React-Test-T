import React, { useEffect, useState } from "react";

const Category = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Category Page😏";
    console.log("Component Mounted!");

    return () => {
      document.title = "Vite App";
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Category</h2>
      <div className="border p-4 rounded bg-zinc-700 w-fit">
        <h3 className="mb-2">useEffect Dependency Example</h3>
        <p className="mb-4">Check console for updates</p>
        <p className="text-xl mb-2">Count: {count}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment Count
        </button>
          <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => setCount((prev) => prev == 0 ? 0 : prev - 1)}
        >
          Decrement Count
        </button>
          <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => setCount((prev) => prev = 0)}
        >
          Reset Count
        </button>
      </div>
    </div>
  );
};

export default Category;
