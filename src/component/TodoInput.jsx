import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/action/todoAction"


const TodoInput = () => {
  const [text, setText] = useState("")
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    //ui tarafından global statein değiştirilme isteğinin reducer a bildirilmesi
    // dispatch({type:"add",payload:text})// payloadın burada text olmasının sebebi 6. sıradaki state
    if(!text.trim()){
      return null
      
    }
    dispatch(addTodo(text))
    setText("")
  }
  console.log(text);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  )
}

export default TodoInput
