import React from 'react'
import styles from './Dropdown.module.css';
import { Items } from '../Items/Items.js';
import { Searchbar } from '../Searchbar/Searchbar.js';
import { ItemsSelected } from '../ItemsSelected/ItemsSelected.js';


export const Dropdown = (props) => {
    return (
        <>
            <div className = {styles.lng}>
                Язык
            </div>
            <ItemsSelected 
                items = {props.items} 
                setSelected = {props.setSelected} 
                setVisibility = {props.setVisibility} 
                isDropdownVisible = {props.isDropdownVisible}
            />
            <div className={`${styles.dropdown} ${props.isDropdownVisible ? '' : styles.unvisible}`}>
                <Searchbar 
                    changeSearchString = {props.changeSearchString}
                    searchString = {props.searchString}
                />
                
                <Items items = {props.items} setSelected = {props.setSelected} searchString = {props.searchString}/>
            </div>
        </>
    )
}

export default Dropdown