export const ADD = 'ADD'
export const DEL = 'DEL'
export const CLR = 'CLR'
export const TOOGLE = 'TOOGLE'

export const addTodo = (payload) => ({
  type: ADD,
  payload:payload
})
export const clearTodo = () => ({
  type: CLR
  
})

export const deleteTodo=(id)=>({
  type:DEL,
  payload:id
})

export const ToogleTodo = (id) => ({
  type: TOOGLE,
  payload:id
})
