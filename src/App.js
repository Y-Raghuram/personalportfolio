import React, { useState, useEffect } from "react";
import './App.css';
import './Technology/animate.css';
import Navbar from './Navbar/Navbar';
import Homepage from './Parallex/Parallex';
import Tech from './Technology/tech';
import Tech1 from './Tech1/Tech1';
import DownloadResume from './Download_Resume/DownloadResume';

function App() {
  // State to store window width and height
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Apply different classes or styles based on window size
  const isMobile = windowSize.width <= 600;
  const isTablet = windowSize.width > 600 && windowSize.width <= 1024;
  const isDesktop = windowSize.width > 1024;

  return (
    <div className={`App ${isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}`}>
      
      <Homepage />
      <DownloadResume />
    </div>
  );
}

export default App;
