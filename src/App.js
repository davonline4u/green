import React from "react"
import Analytics from "./components/Analytics";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Login />
      <Analytics/>
    </div>
  );
}

export default App;
