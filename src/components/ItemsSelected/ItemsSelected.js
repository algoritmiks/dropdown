import React from 'react';
import styles from './ItemsSelected.module.css'
import removeImg from '../../assets/remove.png'
import showHide from '../../assets/showhide.png'


export const ItemsSelected = ({ items, setSelected, setVisibility, isDropdownVisible }) => {

    const showDropdownHandler = () => {
        setVisibility();
    }

    return (
            <div className = {styles.items}>
                {items.map((el, ind)=>{
                    if (el.isSelected) {
                        return (
                            <div className = {styles.item} key={ind}>
                                {el.language}
                                <div className = {styles.remove} onClick = {()=>{setSelected(el.id)}}>
                                    <img src={removeImg} alt="img"></img>
                                </div>
                            </div>
                        )
                    }
                    return null
                })}
                <div className = {`${styles.showHide} ${isDropdownVisible ? '' : styles.showHide_close}`} onClick = {showDropdownHandler} >
                    <img src={showHide} alt="dropdown"></img>
                </div>
            </div>
    )
}