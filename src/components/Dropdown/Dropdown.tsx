import React from 'react'
import styles from './Dropdown.module.css';
import { Items } from '../Items/Items';
import { Searchbar } from '../Searchbar/Searchbar';
import { ItemsSelected } from '../ItemsSelected/ItemsSelected';
import { IAppState, SetSelectedType, SetVisibilityType, СhangeSearchStringType } from '../../types/types';


type PropsType = IAppState & SetSelectedType & SetVisibilityType & СhangeSearchStringType

export const Dropdown = (props: PropsType) => {
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
                
                <Items 
                    items = {props.items} 
                    setSelected = {props.setSelected} 
                    searchString = {props.searchString}
                />
            </div>
        </>
    )
}

export default Dropdown