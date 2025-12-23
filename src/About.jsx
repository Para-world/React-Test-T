import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "You are on the About Page!";
    console.log("Component Mounted!");

    return () => {
      document.title = "Vite App";
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>About Page - useEffect Hook</h1>
      <p>Notice how the tab title changed 😊 above?</p>
      <p>
        We used <code>useEffect</code> to change <code>document.title</code>{" "}
        when this page loads.
      </p>
    </div>
  );
};

export default About;
