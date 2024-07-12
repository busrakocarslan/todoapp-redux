import axios from "axios"

//action tiplerini tanımlıyorum bu action tiplerini  reducer'da hangi işlemin yapılacağını belirtmek için kullanıyorum
export const ADD = 'ADD'
export const DEL = 'DEL'
export const CLR = 'CLR'
export const TOGGLE = 'TOGGLE'
export const LIST_TODOS='LIST_TODOS'

// sequelize ile oluşturduğum endpointi bağlıyorum
const BASE_URL = 'http://localhost:8000/';

//! tüm todoları görüntülemek için kullandığım action
export const listTodos=(todos)=>({
  type:LIST_TODOS,
  payload:todos
})
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    dispatch(listTodos(response.data.result));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}`, { title:title,isDone:false });
      dispatch({ type: ADD, payload: response.data.result });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };
};

export const clearTodo = () => ({
  type: CLR
  
})

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      dispatch({ type: DEL, payload: id });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
};

export const toggleTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, { isDone: true });
      dispatch({ type: TOGGLE, payload: id });
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };
};
