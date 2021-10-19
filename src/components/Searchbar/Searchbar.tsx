import React, { useRef } from 'react';
import styles from './Searchbar.module.css';
import search from '../../assets/search.png';
import {СhangeSearchStringType} from '../../types/types'


export const Searchbar = (props: СhangeSearchStringType & any) => {
    
    const searchInput = useRef<HTMLInputElement>(null);

    const inputHandler = () => {
        props.changeSearchString(searchInput.current!.value);
    }

    return (
        <div className = {styles.searchbar}>
            <div className = {styles.loop}>
                <img src={search} alt="loop"></img>
            </div>

            <input ref={searchInput} 
                type="text" 
                onChange={inputHandler} 
                placeholder = "Поиск" 
                className = {styles.input}
                value = {props.searchString}
            /> 
        </div>
    )
}