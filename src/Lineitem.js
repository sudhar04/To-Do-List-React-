import React from 'react'
import { FaTrash } from "react-icons/fa";

const Lineitem = ({item,handleCheck,handleDelete}) => {
    return (
        <li className='item' key={item.id}>
                    <input
                        type="checkbox"
                     onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label 
                        style={(item.checked)?{textDecoration: 'line-through'}: null}
                        onDoubleClick={() => handleCheck(item.id)}
                    >{item.item}</label>
                    < FaTrash 
                        role='button'
                        onClick={() => handleDelete(item.id)}
                        tabIndex='0'
                        aria-label= {`Delete ${item.item}`}
                    />
        </li>
    
    )
}

export default Lineitem