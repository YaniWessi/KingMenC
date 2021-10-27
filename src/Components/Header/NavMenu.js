import React from "react"
import {navMenuCategories} from '../../Utils/Constants/NavigationLinks';

const NavMenu  = () => {

    return(
        <menu>
           { navMenuCategories.map(container => {
               <p>{container.categoryKey}</p>
           })}
        </menu>
    )
}
   
export default NavMenu;
