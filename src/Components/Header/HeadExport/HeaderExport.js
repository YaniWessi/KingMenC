import React from "react"
import NavMenu from "../MenuContainer/MenuContainer";
import TitleContainer from '../TiitleContainer/TitleContainer';
import styles from './HeaderExport.module.css'

const HeaderExport = () => 
    <header className={styles['header-container']}>
     <TitleContainer/>   
     <NavMenu/>
    </header>

export default HeaderExport;
