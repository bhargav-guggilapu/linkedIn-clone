import React from "react";
import "./App.css";
import Feed from "./app/components/Feed/Feed";
import Header from "./app/components/Header/Header";
import Sidebar from "./app/components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
