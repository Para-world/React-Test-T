import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
      document.title = "Home Page😏";
      console.log("Component Mounted!");
  
      return () => {
        document.title = "Vite App";
        console.log("Component Unmounted");
      };
    }, []);
  return (
    <div>Home</div>
  )
}

export default Home