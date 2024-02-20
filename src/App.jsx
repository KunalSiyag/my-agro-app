import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
     <div class="wrapper">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
    </div>
	<Navbar />
	<Outlet />   
    </>
  );
}

export default App;
