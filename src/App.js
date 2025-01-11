import React, { useState, useEffect } from "react";
import './App.css';
import './Technology/animate.css';
import Navbar from './Navbar/Navbar';
import Homepage from './Parallex/Parallex';
import Tech from './Technology/tech';
import Tech1 from './Tech1/Tech1';
import DownloadResume from './Download_Resume/DownloadResume';

function App() {
  return (
    <div>
 
   <Homepage/>
   <DownloadResume/>


   
   </div>
  );
}
export default App;
