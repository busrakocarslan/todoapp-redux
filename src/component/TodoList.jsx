import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { clearTodo, fetchTodos } from "../redux/action/todoAction"
import { useEffect } from "react"


const TodoList = () => {
 const todoList= useSelector(state=>{
  console.log('State in useSelector:', state);
  state.todoList})
 const dispatch=useDispatch()

 useEffect(() => {
  dispatch(fetchTodos());
}, [dispatch]);




  const handleClearList = () => {
    dispatch(clearTodo())
    
  }
  console.log(todoList);
  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
