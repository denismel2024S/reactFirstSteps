import { useState, useEffect } from "react"
import ToDoInput from "./ToDoInput"
import ToDoList from "./ToDoList"


function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

    function persist(newList){
      localStorage.setItem('todos', JSON.stringify({todos: newList}))
    }

      function handleAddTodos(newTodo){
        const newTodoList = [...todos, newTodo]
        persist(newTodoList)
        setTodos(newTodoList)
      }
      
      function handleDelete(index){
        const newTodoList = todos.filter((todo, todoIndex)=> {
          return todoIndex != index
        })
        persist(newTodoList)
        setTodos(newTodoList)

      }

      function handleEdit(index){
          const valueToEdit = todos[index]
          setTodoValue(valueToEdit)
          handleDelete(index)

      }

      useEffect(()=>{
        if (!localStorage){
          return
        }

        let localTodos = localStorage.getItem('todos')
        if (!localTodos) {
          return
        }
        localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)

      },[])


    return (
      <>
        <ToDoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos}/>
        <ToDoList handleEdit = {handleEdit} handleDelete ={handleDelete} todos = {todos}/>
      </>
    )
}

export default App
