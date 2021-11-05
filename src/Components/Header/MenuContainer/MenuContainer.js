import React from "react"


import {navMenuCategories} from '../../../Utils/Constants/NavigationLinks';
import styles from './MenuContainer.module.css';
import DropDownContainer from '../DropDownContainer/DropDownContainer';


const MenuContainer  = () => {

    return(
        <menu className={styles['menu-container']}>
           { navMenuCategories.map(category => 
            <DropDownContainer category={category}/>
           )}
        </menu>
    )
}
   
export default MenuContainer;
