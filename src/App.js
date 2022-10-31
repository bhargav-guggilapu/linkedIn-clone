import React from "react";
import "./App.css";
import Header from "./app/components/Header/Header";
import Sidebar from "./app/components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
