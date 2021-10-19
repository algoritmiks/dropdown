import React from 'react';
import img from '../../../assets/check.svg';
import styles from './Item.module.css';
import {IData} from '../../../types/types'

type PropsType = {
    el: IData
    ind: number
    checkHandler: (id: number)=>void
}

const Item = ({el, ind, checkHandler}: PropsType) => {
    
    return (
        <div className={styles.item} key={ind}>
            <div className={styles.img}>
                <img alt="language" src={el.img}></img>
            </div>

            <div className={styles.lng}>
                {el.language}
            </div>

            <div onClick={ () => {checkHandler(el.id)} } className={`${styles.checkbox} ${el.isSelected ? styles.checked : styles.unchecked}`}>
                <img src={img} alt="check"></img>
            </div>
        </div>
    )
}

export default Item;