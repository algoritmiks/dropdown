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
                {items.map((el)=>{
                    if (!searchString) {
                        return (
                            <Item key={el.id} el={el} checkHandler={checkHandler}/>
                        )
                    }
                    if (el.language.toLowerCase().indexOf(searchString.toLowerCase()) === 0) {
                        return (
                            <Item key={el.id} el={el} checkHandler={checkHandler}/>
                        )
                    }
                    return null
                })}
            </div>
    )
}