import React from 'react'
import Lineitem from './Lineitem';

const Itemslist = ({items,handleCheck,handleDelete}) => {
    return (
        <ul>
            {items.map((item) => (
                <Lineitem 
                    item ={item}
                    key={item.id}
                    handleCheck ={handleCheck}
                    handleDelete ={handleDelete}
                />
            ))}
        </ul>
    )
}

export default Itemslist