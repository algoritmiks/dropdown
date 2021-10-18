import React from 'react';
import Item from './Item/Item';


export const Items = ({ items, setSelected, searchString }) => {

    const checkHandler = (id) => {
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