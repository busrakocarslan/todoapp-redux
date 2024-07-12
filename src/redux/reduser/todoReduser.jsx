import { ADD, DEL, CLR, TOGGLE, LIST_TODOS } from "../action/todoAction";

const initialState = {
  todoList: [],
}; // state in ilk durumu

export const todoReducer = (state = initialState, { type, payload }) => {
  console.log('Reducer State:', state);
  console.log('Reducer Action:',type,payload);
  switch (type) {
    case LIST_TODOS:
      return {
        ...state,
        todoList: payload,
      };
    case ADD:
      return {
        ...state,
        // initial değeri alıyoruz önce obje yapısını bozmamak için
        todoList: [
          ...state.todoList,
          {id:payload.is,title: payload.title,isDone:payload.isDone}
        ], // destruc ediyoruz ki olan yapılarıda gelsin ancak state içinde olduğundan state içindeki todolisti aç diyoruz.,// veri burada payload da tutulduğundan yazılacak olan yere dinamik olarak payloadı veriyoruz
      };
      case CLR:
      return initialState;
      case DEL:
      return {
        ...state,
        todoList:state.todoList.filter(item=>item.id !== payload)
      }
      case TOGGLE:
      return {
        ...state,
        todoList:state.todoList.map(item=>
          item.id === payload? {...item,completed:!item.completed} : item )
      }

    default:
      return state;
  }
};
