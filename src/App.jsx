import "./App.css";
import React from "react";
import Menu1 from "./Comp/Menu1";
import { Menus } from "./Comp/Sidebar";
const App = () => {
  return (
    <div className="tree-menu">
      <Menu1 menu={Menus} />
    </div>
  );
};

export default App;
