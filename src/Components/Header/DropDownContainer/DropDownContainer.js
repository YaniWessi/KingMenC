import React, { useState } from "react";

import styles from "./DropDownContainer.module.css";
import DropDownLinks from '../DropDownLinks/DropDownLinks'

const DropDownContainer = ({ category }) => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseExit = () => {
    setActive(false);
  };

  return (
    <div
      className={styles["dropdown-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <p>{category.categoryKey}</p>
      <DropDownLinks links={category.categoryValues} display={active}/>
    </div>
  );
};

export default DropDownContainer;
