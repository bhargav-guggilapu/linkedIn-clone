import React from "react";
import "./App.css";
import Feed from "./app/components/Feed/Feed";
import Header from "./app/components/Header/Header";
import Sidebar from "./app/components/Sidebar/Sidebar";
import SidebarRight from "./app/components/SidebarRight/SidebarRight";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Sidebar />
        <Feed />
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
