import React from 'react'

export default function ToDoCard(props) {
    const {children, handleDelete, index , handleEdit} = props
  return (
    <li className = 'todoItem'>
        {children}
            <div className = 'actionsContainer'>
                <button onClick = {() => {
                    handleDelete(index)
                }}>               
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>

                <button onClick = {() => {
                    handleEdit(index)        
                }}>
                    <i className="fa-sharp-duotone fa-solid fa-pen-to-square"></i>
                </button>
            </div>
    </li>
  )
}
