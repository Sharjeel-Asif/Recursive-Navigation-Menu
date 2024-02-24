import React from "react";
import Menu3 from "./Menu3";
const Menu2 = ({ list }) => {
  return (
    <ul>
      {list && list.length > 0
        ? list.map((listItem) => <Menu3 item={listItem} />)
        : null}
    </ul>
  );
};

export default Menu2;
