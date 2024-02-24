import React, { useState } from "react";
import Menu2 from "./Menu2";
import { FaPlus, FaMinus } from "react-icons/fa";
const Menu3 = ({ item }) => {
  console.log("Items", item.children);

  const [displayChildren, setDisplayChildren] = useState({});
  const handlePlusSign = (currentLabel) => {
    setDisplayChildren({
      ...displayChildren,
      [currentLabel]: !displayChildren[currentLabel],
    });
  };
  console.log(displayChildren);

  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <p>{item.label}</p>

        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handlePlusSign(item.label)}>
            {displayChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length &&
      displayChildren[item.label] > 0 ? (
        <Menu2 list={item.children} />
      ) : null}
    </li>
  );
};

export default Menu3;
