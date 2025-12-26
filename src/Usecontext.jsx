import React, { createContext, useContext, useState } from "react";

// 1. Create the Context
const ThemeContext = createContext();

// Child Component: Theme Toggle Button
const ThemeToggle = () => {
  // 3. Consume Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded font-bold transition-all duration-300
                ${
                  theme === "light"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-yellow-400 text-black hover:bg-yellow-500"
                }`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

// Child Component: Content Card
const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg border mt-6 transition-all duration-300
            ${
              theme === "light"
                ? "bg-white text-zinc-800 border-zinc-200"
                : "bg-zinc-800 text-white border-zinc-600"
            }`}
    >
      <h2 className="text-2xl font-bold mb-2">Theme Card</h2>
      <p className="mb-4">
        This card's style changes automatically based on the global theme
        context. No props were passed to me!
      </p>
      <div className="text-sm opacity-70">
        Current Theme:{" "}
        <span className="font-mono font-bold uppercase">{theme}</span>
      </div>
    </div>
  );
};

// Main Component
const Usecontext = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 border-b border-zinc-700 pb-2">
        useContext (Theme Switcher)
      </h1>

      {/* 2. Provide Context */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={`p-8 rounded-xl border-2 border-dashed transition-all duration-300 
                    ${
                      theme === "light"
                        ? "border-zinc-300 bg-zinc-50"
                        : "border-zinc-600 bg-zinc-900/50"
                    }`}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-zinc-400">
              App Area
            </span>
            <ThemeToggle />
          </div>

          <Card />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Usecontext;
