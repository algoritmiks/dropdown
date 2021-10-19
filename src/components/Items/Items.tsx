import React from 'react';
import Item from './Item/Item';
import {IData} from '../../types/types'


type PropsType = {
    items: Array<IData>
    setSelected: (id: number)=>void
    searchString: string | undefined
}


export const Items = ({ items, setSelected, searchString }: PropsType) => {

    const checkHandler = (id: number) => {
        setSelected(id);
    }

    return (
            <div>
                {items.map((el, ind)=>{
                    if (!searchString) {
                        return (
                            <Item key={ind} el={el} ind={ind} checkHandler={checkHandler}/>
                        )
                    }
                    if (el.language.toLowerCase().indexOf(searchString.toLowerCase()) === 0) {
                        return (
                            <Item key={ind} el={el} ind={ind} checkHandler={checkHandler}/>
                        )
                    }
                    return null
                })}
            </div>
    )
}