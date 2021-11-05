import React from "react";
import { Link } from "react-router-dom";
import styles from './DropDownLinks.module.css';

const DropDownLinks = ({links, display }) =>
    <div className={display ? styles['active-menu'] : styles["hidden-menu"]}>
        {links.map(item => 
         <Link to={item.linkHref}>{item.linkName}</Link>
        )}
   </div>

export default  DropDownLinks;
