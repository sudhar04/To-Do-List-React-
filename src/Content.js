import React from 'react'
import Itemslist from './Itemslist'

const Content = ({items,handleCheck,handleDelete}) => {
  
 return (
    <main>
      {(items && items.length > 0)? (
        <Itemslist
          items ={items}
          handleCheck ={handleCheck}
          handleDelete ={handleDelete}
        />
      ) : (
        
        <p>your list is empty</p>
      )
}
    </main>
  )

}

export default Content 