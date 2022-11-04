import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./app/components/Feed/Feed";
import Header from "./app/components/Header/Header";
import Login from "./app/components/Login/Login";
import Sidebar from "./app/components/Sidebar/Sidebar";
import SidebarRight from "./app/components/SidebarRight/SidebarRight";
import { selectUser } from "./app/Store/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="body">
            <Sidebar />
            <Feed />
            <SidebarRight />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
