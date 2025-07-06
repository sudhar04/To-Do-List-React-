import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

  const inputRef = useRef()
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item </label>
        <input 
            type="text"
            autoFocus
            ref={inputRef}
            required
            id='addItem'
            placeholder='Add Item' 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem