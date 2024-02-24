import React from "react";
// import Menu1 from "../../../../../../
import Menu2 from "./Menu2";
const Menu1 = ({ menu }) => {
  return (
    <div className="menu-tree">
      <Menu2 list={menu} />
    </div>
  );
};

export default Menu1;
